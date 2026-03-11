'use client'

import React from 'react'

interface LogoProps {
    isScrolled?: boolean
    className?: string
    light?: boolean
}

export default function Logo({ isScrolled, className = '', light }: LogoProps) {
    // Use light colors if the header is NOT scrolled OR if explicitly requested
    const isLight = light || !isScrolled

    const textColor = isLight ? '#FFFFFF' : '#111827'
    const subtextColor = isLight ? 'rgba(255, 255, 255, 0.7)' : '#4B5563'
    const primaryColor = '#16a34a' // ProTransfer Emerald Green

    return (
        <svg
            viewBox="0 0 280 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ height: '100%', width: 'auto' }}
        >
            {/* Compass / Pusula Icon */}
            <g transform="translate(0, 5)">
                <circle cx="25" cy="25" r="22" stroke={primaryColor} strokeWidth="1.5" />
                <path d="M25 5L29 21H21L25 5Z" fill={primaryColor} />
                <path d="M25 45L21 29H29L25 45Z" fill={primaryColor} opacity="0.6" />
                <path d="M45 25L29 29V21L45 25Z" fill={primaryColor} />
                <path d="M5 25L21 21V29L5 25Z" fill={primaryColor} opacity="0.6" />
                {/* Needle inner details */}
                <circle cx="25" cy="25" r="3" fill={textColor} />
            </g>

            {/* Text: PRO TRANSFER */}
            <text
                x="65"
                y="32"
                fill={textColor}
                style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 800,
                    fontSize: '24px',
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase'
                }}
            >
                PRO TRANSFER
            </text>

            {/* Text: & TOURISM AGENCY */}
            <text
                x="65"
                y="50"
                fill={subtextColor}
                style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '10px',
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase'
                }}
            >
                & TOURISM AGENCY
            </text>
        </svg>
    )
}
