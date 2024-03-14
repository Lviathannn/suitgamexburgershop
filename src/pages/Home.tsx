import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center px-5">
      <div className="flex justify-center flex-col gap-10">
        <h1 className="md:text-4xl font-semibold text-white text-center text-3xl">
          Welcome to Burger Queen and Arcade
        </h1>
        <div className="flex justify-center items-center gap-5">
          <Link
            to="/game"
            className="py-2 px-3 hover:bg-indigo-800 transition-colors duration-300 flex justify-center items-center bg-indigo-500 rounded-lg text-lg text-white"
          >
            Play Games
          </Link>
          <Link
            to="/shop"
            className="py-2 px-3 hover:bg-indigo-800 transition-colors duration-300 flex justify-center items-center bg-indigo-500 rounded-lg text-lg text-white"
          >
            Order Burger
          </Link>
        </div>
      </div>
    </main>
  );
}
