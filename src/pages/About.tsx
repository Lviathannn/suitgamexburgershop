import Button from "../components/features/Button";

export default function About() {
  return (
    <main className="max-h-screen h-screen w-full flex justify-center items-center px-5">
      <section className="flex justify-center items-center gap-10 flex-col-reverse py-16 md:flex-row">
        <div className="space-y-5">
          <h1 className="text-5xl font-semibold text-white">About Us</h1>
          <p className="text-lg max-w-xl text-slate-200">
            Welcome to our burger Queen! We have the best burgers in town.
            Indulge your taste buds at our burger haven! Welcome to Burger
            Queen, where burger dreams come true. Savor the excellence of our
            culinary craftsmanship as we proudly serve the best burgers in town.
            Each bite is a symphony of flavors, meticulously crafted to satisfy
            your burger cravings.
          </p>
          <Button link="/shop">Order Now</Button>
        </div>
        <img
          src="/fast-food.png"
          alt="Logo"
          className="aspect-square w-60 md:size-80"
        />
      </section>
    </main>
  );
}
