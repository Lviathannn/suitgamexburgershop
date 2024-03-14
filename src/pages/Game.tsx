import { useState } from "react";
import Modal from "../components/features/Modal";
import ScorePanel from "../components/ui/ScorePanel";
import ChoiceButton from "../components/ui/ChoiceButton";

export default function Game() {
  const [yourChoice, setyourChoice] = useState<string | null>(null);
  const [computerChoice, setcomputerChoice] = useState<string | null>(null);
  const [userScore, setuserScore] = useState<number>(0);
  const [computerScore, setcomputerScore] = useState<number>(0);
  const [attemp, setattemp] = useState<number>(10);
  const [roundWinner, setroundWinner] = useState<string | null>(null);
  const [draw, setdraw] = useState<number>(0);

  const handleChoice = (choice: string) => {
    setattemp(attemp - 1);
    setyourChoice(choice);
    const choices = ["✊", "🖐", "✌️"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setcomputerChoice(randomChoice);

    if (choice === randomChoice) {
      setroundWinner("draw");
      setdraw(draw + 1);
    } else if (
      (choice === "✊" && randomChoice === "✌️") ||
      (choice === "🖐" && randomChoice === "✊") ||
      (choice === "✌️" && randomChoice === "🖐")
    ) {
      setroundWinner("user");
      setuserScore(userScore + 10);
    } else {
      setroundWinner("computer");
      setcomputerScore(computerScore + 10);
    }
  };

  const handleReset = () => {
    setyourChoice(null);
    setcomputerChoice(null);
    setuserScore(0);
    setcomputerScore(0);
    setattemp(10);
    setroundWinner(null);
    setdraw(0);
  };

  return (
    <main className="w-full bg-slate-800 py-10 flex flex-col gap-10 px-5">
      {attemp === 0 && (
        <Modal
          userScore={userScore}
          computerScore={computerScore}
          handleReset={handleReset}
          draw={draw}
        />
      )}
      <div className="w-full flex justify-center flex-col gap-5 items-center">
        <h1 className="text-4xl text-white font-semibold text-center">
          Paper Rock Scissors Game
        </h1>
        <p className="text-white text-2xl font-medium">
          Attemp Left : {attemp}
        </p>
        <p className="text-white text-2xl font-medium">
          Computer Score : {computerScore}
        </p>
        <div className="w-32 h-32 bg-slate-400 rounded-full flex justify-center items-center text-5xl">
          {computerChoice ? computerChoice : "🤖"}
        </div>
      </div>
      <ScorePanel roundWinner={roundWinner} />
      <div className="flex flex-col w-full justify-center items-center gap-10">
        <p className="text-white text-2xl font-medium">
          Your Score : {userScore}
        </p>
        <div className="flex w-full justify-center items-center gap-5 md:gap-10">
          <ChoiceButton
            choice="✊"
            handleClick={() => handleChoice("✊")}
            choosed={yourChoice}
          />
          <ChoiceButton
            choice="🖐"
            handleClick={() => handleChoice("🖐")}
            choosed={yourChoice}
          />
          <ChoiceButton
            choice="✌️"
            handleClick={() => handleChoice("✌️")}
            choosed={yourChoice}
          />
        </div>
      </div>
    </main>
  );
}
