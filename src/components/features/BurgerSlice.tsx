type Props = {
  name: string;
};

export default function BurgerSlice({ name }: Props) {
  const colors = (name: string) => {
    switch (name) {
      case "Beef":
        return "bg-stone-500";
      case "Cheese":
        return "bg-yellow-500";
      case "Lettuce":
        return "bg-emerald-500";
      case "Tomato":
        return "bg-red-500";
      case "Pickles":
        return "bg-green-500";
      case "Mayonnaise":
        return "bg-slate-200";
      case "Sauce":
        return "bg-rose-500";
      case "Tomato Sauce":
        return "bg-rose-600";
      default:
        return "bg-stone-500";
    }
  };

  return (
    <div
      className={`lg:w-[450px] w-[250px] h-5 ${colors(name)} rounded-full`}
    />
  );
}
