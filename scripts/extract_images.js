const fs = require('fs');
const path = require('path');

const pdfPath = path.join(__dirname, '..', 'Cilt13.pdf');
const outputDir = path.join(__dirname, '..', 'public', 'images', 'catalog');

// Create output directory
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Read PDF as binary buffer
const buffer = fs.readFileSync(pdfPath);
const data = buffer.toString('binary');

// Find all image streams in the PDF
// PDFs store images as stream objects. We'll look for common image signatures.
let imageCount = 0;

// Method 1: Extract JPEG images (start with FF D8, end with FF D9)
const jpegStart = Buffer.from([0xFF, 0xD8]);
const jpegEnd = Buffer.from([0xFF, 0xD9]);

let pos = 0;
while (pos < buffer.length) {
    const startIdx = buffer.indexOf(jpegStart, pos);
    if (startIdx === -1) break;

    const endIdx = buffer.indexOf(jpegEnd, startIdx + 2);
    if (endIdx === -1) break;

    const imageBuffer = buffer.slice(startIdx, endIdx + 2);

    // Only save images larger than 5KB (skip tiny thumbnails)
    if (imageBuffer.length > 5000) {
        imageCount++;
        const filename = `catalog-page-${imageCount}.jpg`;
        fs.writeFileSync(path.join(outputDir, filename), imageBuffer);
        console.log(`Extracted: ${filename} (${Math.round(imageBuffer.length / 1024)}KB)`);
    }

    pos = endIdx + 2;
}

// Method 2: Extract PNG images (PNG signature: 89 50 4E 47)
const pngStart = Buffer.from([0x89, 0x50, 0x4E, 0x47]);
const pngEnd = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82]);

pos = 0;
while (pos < buffer.length) {
    const startIdx = buffer.indexOf(pngStart, pos);
    if (startIdx === -1) break;

    const endIdx = buffer.indexOf(pngEnd, startIdx + 4);
    if (endIdx === -1) break;

    const imageBuffer = buffer.slice(startIdx, endIdx + pngEnd.length);

    if (imageBuffer.length > 5000) {
        imageCount++;
        const filename = `catalog-page-${imageCount}.png`;
        fs.writeFileSync(path.join(outputDir, filename), imageBuffer);
        console.log(`Extracted: ${filename} (${Math.round(imageBuffer.length / 1024)}KB)`);
    }

    pos = endIdx + pngEnd.length;
}

console.log(`\nTotal images extracted: ${imageCount}`);
