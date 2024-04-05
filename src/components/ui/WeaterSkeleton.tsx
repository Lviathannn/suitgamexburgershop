import { Skeleton } from "./skeleton";

export default function WeaterSkeleton() {
  return (
    <div className="w-full bg-slate-500 aspect-video rounded-lg flex flex-col items-center justify-center gap-3">
      <Skeleton className="w-32 h-7" />
      <Skeleton className="w-20 h-4" />
    </div>
  );
}
