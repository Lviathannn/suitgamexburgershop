type Props = {
  value: number | undefined;
  title: string;
  unit: string;
};

export default function WeaterCard({ value, title, unit }: Props) {
  return (
    <div className="w-full bg-slate-500 aspect-video rounded-lg flex flex-col items-center justify-center">
      <div className="text-4xl font-bold">
        {unit == "time"
          ? new Date(value! * 1000).toLocaleTimeString()
          : `${value} ${unit}`}
      </div>
      <div className="text-lg">{title}</div>
    </div>
  );
}
