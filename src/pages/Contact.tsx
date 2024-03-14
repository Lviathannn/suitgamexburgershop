export default function Contact() {
  return (
    <main className="max-h-screen h-screen w-full flex justify-center items-center">
      <section className="flex justify-center flex-col items-center gap-10 w-full px-5">
        <form className="flex flex-col items-center gap-5 w-full sm:w-[70%] xl:w-[30%] bg-slate-700 px-5 py-10 rounded-xl">
          <h1 className="text-5xl font-semibold text-white">Contact</h1>
          <div className="space-y-2 w-full">
            <label htmlFor="name" className="text-white text-lg">
              Name :
            </label>
            <input
              type="text"
              id="name"
              className=" py-2 w-full rounded-md bg-slate-600"
            />
          </div>
          <div className="space-y-2 w-full">
            <label htmlFor="email" className="text-white text-lg">
              Email :
            </label>
            <input
              type="text"
              id="email"
              className=" py-2 w-full rounded-md bg-slate-600"
            />
          </div>
          <div className="space-y-2 w-full flex flex-col">
            <label htmlFor="email" className="text-white text-lg">
              Message :
            </label>
            <textarea
              name=""
              id=""
              className="bg-slate-600 text-white focus:outline-none p-3 border-none rounded-lg"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 w-full py-2 rounded-lg mt-3">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
