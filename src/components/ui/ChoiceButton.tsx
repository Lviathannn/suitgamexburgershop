type props = {
  choice: string;
  handleClick: () => void;
  choosed: string | null;
};

export default function ChoiceButton({ choice, handleClick, choosed }: props) {
  return (
    <button
      className={`size-20 md:size-32 aspect-square bg-slate-400 rounded-full flex items-center justify-center text-2xl md:text-5xl transition-all duration-300 ${
        choosed == choice
          ? "bg-slate-600 -translate-y-10"
          : "hover:-translate-y-10"
      }`}
      onClick={handleClick}
    >
      {choice}
    </button>
  );
}
