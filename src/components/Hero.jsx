import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex items-center">
        <div className="max-w-2xl text-white">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-blue-300/80 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">Premium • 4K HDR</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Stream the best of cinema and series
          </h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg">
            A modern, cinematic experience with a curated library, smart recommendations, and crystal-clear playback.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
              Start Watching
            </button>
            <button className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">
              Explore Library
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
