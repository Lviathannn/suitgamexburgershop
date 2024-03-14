import { useEffect, useState } from "react";

type Props = {
  imgURL: string;
  name: string;
  price: number;
  order: Order[];
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>;
  totalQuantity: number;
};

export default function OrderCart({
  imgURL,
  name,
  price,
  setOrder,
  order,
  totalQuantity,
}: Props) {
  const initialQuantity =
    order.find((item) => item.name === name)?.quantity || 0;

  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const handleIncrement = () => {
    setOrder((prev) => {
      const found = prev.find((item) => item.name === name);
      if (found) {
        return prev.map((item) =>
          item.name === name
            ? {
                ...item,
                name,
                price: item.price + price,
                quantity: item.quantity + 1,
              }
            : item
        );
      }
      return [...prev, { name, price, quantity: 1 }];
    });
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setOrder((prev) => {
      const found = prev.find((item) => item.name === name);
      if (found) {
        if (found.price === price || found.quantity === 1) {
          return prev.filter((item) => item.name !== name);
        }
        return prev.map((item) =>
          item.name === name
            ? {
                ...item,
                price: item.price - price,
                quantity: item.quantity <= 0 ? 0 : item.quantity - 1,
              }
            : item
        );
      }
      return prev;
    });
    setQuantity((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  useEffect(() => {
    setQuantity(order.find((item) => item.name === name)?.quantity || 0);
  }, [order, name]);

  return (
    <div className="flex px-10 py-5 bg-slate-600 rounded-xl text-white gap-5 justify-between items-center">
      <div className="flex gap-3 items-center">
        <img src={imgURL} alt={name} className="size-14" />
        <div className="hidden sm:block">
          <p>{name}</p>
          <p className="text-sm text-slate-200">Rp.{price}</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex gap-5 items-center">
          <button
            className="size-5 bg-rose-500 rounded-md flex justify-center items-center hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500"
            onClick={handleDecrement}
            disabled={quantity <= 0}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="size-5 bg-indigo-500 rounded-md flex justify-center items-center hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-500"
            onClick={handleIncrement}
            disabled={totalQuantity >= 10}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
