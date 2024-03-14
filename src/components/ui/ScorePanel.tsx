type Props = {
  roundWinner: string | null;
};

export default function ScorePanel({ roundWinner }: Props) {
  return (
    <h2 className="text-center text-2xl font-semibold text-white">
      {roundWinner === "user"
        ? "Your Score +10"
        : roundWinner === "computer"
        ? "Computer Score +10"
        : roundWinner === "draw"
        ? "Draw"
        : "Choose Your Choice"}
    </h2>
  );
}
