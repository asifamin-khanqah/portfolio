export function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[color:var(--accent)] opacity-20 blur-3xl" />
      <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="absolute inset-0 bg-grid opacity-50" />
    </div>
  );
}
