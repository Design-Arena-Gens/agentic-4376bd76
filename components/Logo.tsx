import * as React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 1200 400"
        role="img"
        aria-labelledby="logoTitle logoDesc"
        className="w-full h-auto"
      >
        <title id="logoTitle">Noorullah Logo</title>
        <desc id="logoDesc">Technological neon logo with circuit elements for Noorullah</desc>

        <defs>
          <linearGradient id="gradText" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>

          <linearGradient id="gradStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="outerGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.35  0 0 0 0 0.6  0 0 0 0 1  0 0 0 0.6 0" />
          </filter>

          <radialGradient id="bgFade" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.10" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Ambient glow */}
        <g filter="url(#outerGlow)">
          <ellipse cx="600" cy="200" rx="520" ry="150" fill="url(#bgFade)" />
        </g>

        {/* Decorative circuit traces */}
        <g stroke="url(#gradStroke)" strokeWidth="2" opacity="0.6">
          <path d="M80 90 H320 q20 0 20 20 v40 q0 20 20 20 h60" fill="none" />
          <circle cx="320" cy="150" r="4" fill="#22d3ee" />
          <path d="M1120 310 H880 q-20 0 -20 -20 v-40 q0 -20 -20 -20 h-60" fill="none" />
          <circle cx="880" cy="250" r="4" fill="#a78bfa" />
          <path d="M200 320 h120 v-30 h60" fill="none" />
          <path d="M1000 80 h-120 v30 h-60" fill="none" />
          <circle cx="260" cy="320" r="3" fill="#60a5fa" />
          <circle cx="940" cy="80" r="3" fill="#60a5fa" />
        </g>

        {/* Main wordmark */}
        <g filter="url(#glow)">
          <text
            x="50%"
            y="52%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="120"
            fontWeight="800"
            letterSpacing="8"
            fill="url(#gradText)"
            style={{ fontFamily: 'var(--font-orbitron), system-ui, sans-serif' }}
          >
            NOORULLAH
          </text>

          {/* Accent stroke */}
          <text
            x="50%"
            y="52%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="120"
            fontWeight="800"
            letterSpacing="8"
            fill="none"
            stroke="url(#gradStroke)"
            strokeWidth="1.5"
            style={{ fontFamily: 'var(--font-orbitron), system-ui, sans-serif' }}
          >
            NOORULLAH
          </text>
        </g>

        {/* Tagline */}
        <g opacity="0.8">
          <text
            x="50%"
            y="72%"
            textAnchor="middle"
            fontSize="22"
            fill="#c7d2fe"
            style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
          >
            NETWORKING ? SECURITY ? CLOUD ? AUTOMATION
          </text>
        </g>
      </svg>
    </div>
  );
}
