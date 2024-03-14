import { Link } from "react-router-dom";

export default function Finish() {
  return (
    <main className="w-full h-screen flex justify-center items-center px-5">
      <div className="flex justify-center flex-col gap-10">
        <h1 className="md:text-4xl font-semibold text-white text-center text-3xl">
          Thank you for playing
        </h1>
        <Link
          to="/"
          className="py-3 flex justify-center items-center hover:bg-indigo-800 transition-colors duration-300 bg-indigo-500 rounded-lg text-lg text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
