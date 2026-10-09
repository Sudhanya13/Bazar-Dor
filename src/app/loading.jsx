export default function Loading() {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 p-6">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
      <p className="text-3xl font-medium text-amber-600 animate-pulse">
        Loading...
      </p>
    </div>
  );
}
