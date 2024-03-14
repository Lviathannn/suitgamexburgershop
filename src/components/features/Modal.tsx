import { Link } from "react-router-dom";

type Props = {
  userScore: number;
  computerScore: number;
  draw: number;
  handleReset: () => void;
};

export default function Modal({
  userScore,
  computerScore,
  handleReset,
  draw,
}: Props) {
  return (
    <div
      className={`inset-0 bg-black/50 flex justify-center items-center fixed z-10 px-5`}
    >
      <div className="w-[500px] aspect-video bg-white rounded-lg flex items-center flex-col justify-between py-10">
        <div className="text-center">
          <p className="text-2xl text-slate-700 font-semibold">
            Your Score : {userScore}
          </p>
          <p className="text-2xl text-slate-700 font-semibold">
            Computer Score Score : {computerScore}
          </p>
          <p className="text-2xl text-slate-700 font-semibold">
            Draw : {draw} x
          </p>
        </div>
        <p className="text-4xl text-slate-700 font-semibold">
          {userScore > computerScore
            ? "You Win"
            : userScore < computerScore
            ? "You Lose"
            : "Draw"}
        </p>
        <div className="flex gap-5 mt-5">
          <button
            className="px-5 py-2 text-white bg-indigo-500 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
          <button className="px-5 py-2 text-white bg-indigo-500 rounded">
            <Link to="/finish">Finish</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
