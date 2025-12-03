import type { ReactElement } from 'react'

interface LogoProps {
  className?: string
  width?: number | string
  height?: number | string
}

function Logo({ className = '', width = 40, height = 40 }: LogoProps): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={width}
      height={height}
      role="img"
      aria-labelledby="titleA"
      className={className}
    >
      <title id="titleA">Kuon logo - Monogram K</title>
      <defs>
        <style>
          {`.stroke{ fill:none; stroke:currentColor; stroke-width:8; stroke-linecap:round; stroke-linejoin:round }`}
        </style>
      </defs>
      {/* marco circular sutil */}
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.08"
        strokeWidth="4"
      />
      {/* K estilizada */}
      <path
        className="stroke"
        d="M36 28 L36 92 M36 60 L78 28 M36 60 L78 92"
      />
    </svg>
  )
}

export default Logo

