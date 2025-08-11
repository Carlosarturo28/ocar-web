// src/components/layout/CursorStyles.tsx
'use client';

export default function CursorStyles() {
  return (
    <style jsx global>{`
      @media (min-width: 768px) {
        body {
          cursor: url('/images/cursor-sword.png'), auto;
        }
        a,
        button {
          cursor: url('/images/cursor-hand.png'), pointer;
        }
      }
    `}</style>
  );
}
