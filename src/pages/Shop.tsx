import Button from "../components/features/Button";

export default function Shop() {
  const linkList = [
    { name: "Order", link: "/order" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <main className="max-h-screen h-screen w-full flex justify-center items-center px-5">
      <section className="flex flex-col justify-center items-center gap-10">
        <div className="space-y-5">
          <h1 className="text-5xl font-semibold text-white text-center">
            Burger Shop
          </h1>
          <p className="text-white text-lg text-center">
            Welcome to our burger shop! We have the best burgers in town.
          </p>
        </div>
        <img
          src="/burger.png"
          alt="Burger Image"
          className="aspect-square object-contain size-60"
        />
        <div className="flex gap-5">
          {linkList.map((link, index) => (
            <Button key={index} index={index} link={link.link}>
              {link.name}
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
}
