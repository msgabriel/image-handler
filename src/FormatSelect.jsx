
import React from 'react';

export function FormatSelect({ currentFormat, setFormat }) {
  return (
    <div className="flex items-center justify-center text-sm gap-2">
      <p>output</p>
      {['png', 'jpeg', 'avif'].map((format) => (
        <button
          key={format}
          onClick={() => setFormat(format)}
          className={
            currentFormat === format
              ? 'bg-secondary text-primary font-medium border-1.5 border-primary rounded-xl py-1.5 px-4'
              : 'bg-dark text-light border-1.5 border-secondary rounded-xl py-1.5 px-4'
          }
        >
          {format.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
