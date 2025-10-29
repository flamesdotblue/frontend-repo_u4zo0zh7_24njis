import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden rounded-b-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-amber-400">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-white backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-sm font-medium">Exclusively for campus communities</span>
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          UniSwop
        </h1>
        <p className="mt-3 max-w-2xl text-white/90 text-sm sm:text-base">
          Swap, sell, or donate your wardrobe with fellow students. An Instagram-inspired, image-first marketplace for your campus.
        </p>
      </div>
    </section>
  );
}
