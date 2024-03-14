import OrderCart from "../components/features/OrderCart";
import OrderHeader from "../components/layouts/OrderHeader";
import Burger from "../components/features/Burger";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const orderList = [
  {
    imgURL: "/cheese.png",
    name: "Cheese",
    price: 5000,
  },
  {
    imgURL: "/lettuce.png",
    name: "Lettuce",
    price: 1000,
  },
  {
    imgURL: "/tomato.png",
    name: "Tomato",
    price: 2500,
  },
  {
    imgURL: "/pickles.png",
    name: "Pickles",
    price: 2000,
  },
  {
    imgURL: "/beef.png",
    name: "Beef",
    price: 14000,
  },
  {
    imgURL: "/mayonnaise.png",
    name: "Mayonnaise",
    price: 4000,
  },
  {
    imgURL: "/sauce.png",
    name: "Sauce",
    price: 4000,
  },
  {
    imgURL: "/tomato-sauce.png",
    name: "Tomato Sauce",
    price: 4000,
  },
];

export default function Order() {
  const [order, setOrder] = useState<Order[]>([]);
  const quantity = order.reduce((acc, item) => acc + item.quantity, 0);
  const price = order.reduce((acc, item) => acc + item.price, 0);

  const [searchParams] = useSearchParams();
  if (searchParams.get("succes") == "true") {
    return (
      <div className="w-full flex justify-center items-center flex-col space-y-10 h-screen px-5">
        <h1 className="lg:text-5xl text-3xl text-center text-white font-semibold">
          Succes orderan anda akan segera kami proses
        </h1>
        <Link to={"/order"}>
          <button className="text-lg px-5 py-2 bg-indigo-500 rounded-lg text-white">
            Order Lagi!
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <main className="py-10 lg:px-20 lg:space-y-20 space-y-10 px-5">
        <OrderHeader price={price} setOrder={setOrder} order={order} />
        <section className="w-full flex flex-col xl:flex-row justify-around items-center gap-20">
          <Burger order={order} />
          <div className="w-full lg:w-[80%] text-center space-y-5">
            <p className="text-white text-xl font-medium">
              Limit Ingridient : {10 - quantity}
            </p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
              {orderList.map((item) => (
                <OrderCart
                  imgURL={item.imgURL}
                  name={item.name}
                  price={item.price}
                  setOrder={setOrder}
                  order={order}
                  totalQuantity={quantity}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
}
