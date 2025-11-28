import Logo from '@/components/Logo';

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,.06),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,.06),transparent_60%)]" />
      </div>

      <div className="z-10 mx-6 w-full max-w-6xl">
        <div className="mb-10 text-center text-sm text-cyan-200/60">TECHNOLOGICAL IDENTITY</div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-glow">
          <Logo className="w-full" />
        </div>
        <p className="mt-8 text-center text-cyan-100/70">
          Network Professional ? Secure ? Reliable ? High Performance
        </p>
      </div>
    </main>
  );
}
