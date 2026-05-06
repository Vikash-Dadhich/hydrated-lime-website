export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-900">
      <div className="flex gap-2">
        <div className="loading-bar" />
        <div className="loading-bar loading-bar--2" />
        <div className="loading-bar loading-bar--3" />
      </div>
    </div>
  );
}
