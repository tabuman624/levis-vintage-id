import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "LEVI'S VINTAGE ID. | ヴィンテージリーバイス AI鑑定";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a2a3a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Denim texture lines — top */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`t${i}`}
            style={{
              position: 'absolute',
              top: `${8 + i * 5}px`,
              left: '0',
              right: '0',
              height: '1px',
              background: 'rgba(232,213,163,0.06)',
            }}
          />
        ))}

        {/* Denim texture lines — bottom */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`b${i}`}
            style={{
              position: 'absolute',
              bottom: `${8 + i * 5}px`,
              left: '0',
              right: '0',
              height: '1px',
              background: 'rgba(232,213,163,0.06)',
            }}
          />
        ))}

        {/* Left vertical accent */}
        <div
          style={{
            position: 'absolute',
            left: '60px',
            top: '60px',
            bottom: '60px',
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, rgba(192,57,43,0.6), transparent)',
          }}
        />

        {/* Right vertical accent */}
        <div
          style={{
            position: 'absolute',
            right: '60px',
            top: '60px',
            bottom: '60px',
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, rgba(232,213,163,0.25), transparent)',
          }}
        />

        {/* Category label */}
        <div
          style={{
            display: 'flex',
            marginBottom: '24px',
            fontFamily: 'monospace',
            fontSize: '13px',
            letterSpacing: '5px',
            color: 'rgba(184,204,228,0.6)',
            textTransform: 'uppercase',
          }}
        >
          VINTAGE LEVI&apos;S IDENTIFICATION
        </div>

        {/* Main title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0px',
            marginBottom: '20px',
          }}
        >
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '90px',
              fontWeight: '700',
              color: '#c0392b',
              lineHeight: 1,
              letterSpacing: '-1px',
            }}
          >
            LEVI&apos;S
          </span>
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '90px',
              fontWeight: '700',
              color: '#f0ebe0',
              lineHeight: 1,
              letterSpacing: '-1px',
            }}
          >
            {' '}VINTAGE ID.
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '480px',
            height: '1px',
            background: 'rgba(232,213,163,0.3)',
            marginBottom: '28px',
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            fontFamily: 'monospace',
            fontSize: '18px',
            color: 'rgba(232,213,163,0.8)',
            letterSpacing: '2px',
          }}
        >
          <span>AI 年代鑑定</span>
          <span style={{ color: 'rgba(184,204,228,0.4)' }}>—</span>
          <span>Big E / セルビッジ / 501XX</span>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            right: '72px',
            fontFamily: 'monospace',
            fontSize: '14px',
            color: 'rgba(184,204,228,0.35)',
            letterSpacing: '2px',
          }}
        >
          levis-id.com
        </div>

        {/* Bottom-left: free badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '72px',
            fontFamily: 'monospace',
            fontSize: '12px',
            color: 'rgba(192,57,43,0.7)',
            letterSpacing: '3px',
          }}
        >
          FREE · NO REGISTRATION
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
