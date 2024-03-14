import BurgerSlice from "./BurgerSlice";

type props = {
  order: Order[];
};
export default function Burger({ order }: props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="lg:w-[450px] w-[250px] relative h-20 lg:h-28 bg-orange-300 rounded-t-full">
        <div className="absolute rounded-full size-4 lg:top-14 top-7 right-16 lg:right-24 bg-orange-200" />
        <div className="absolute rounded-full size-5 lg:top-20 top-12 right-16 lg:right-20 bg-orange-200" />
        <div className="absolute rounded-full size-4 lg:top-20 top-5 right-10 lg:right-28 bg-orange-200" />
      </div>
      <div className="space-y-2">
        {order.map((item) => {
          return <BurgerSlice name={item.name} />;
        })}
      </div>
      <div className="lg:w-[450px] w-[250px] h-20 lg:h-28 bg-orange-300 rounded-b-full" />
    </div>
  );
}
