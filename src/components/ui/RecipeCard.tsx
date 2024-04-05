import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

type Props = Recipe;

export default function RecipeCard({
  title,
  servings,
  ingredients,
  instructions,
}: Props) {
  return (
    <div className="w-full bg-slate-500 aspect-video rounded-lg flex flex-col items-center justify-center gap-1">
      <div className="text-center">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-lg">{servings}</p>
      </div>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-blue-500 hover:bg-blue-800">View Recipe</Button>
        </DialogTrigger>
        <DialogContent className=" overflow-scroll max-h-[600px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="space-y-5">
              <div className="">
                <h2 className="text-lg font-medium text-white">
                  Ingredients :
                </h2>
                {ingredients.split("|").map((ingredient, index) => (
                  <p key={index} className="text-base text-slate-300">
                    {index + 1}. {ingredient}
                  </p>
                ))}
              </div>
              <div className="">
                <h2 className="text-lg font-medium text-white">
                  Instructions :
                </h2>
                {instructions.split(".").map((instruction, index) => {
                  if (instruction.trim() === "") return null;
                  return (
                    <p key={index} className="text-base text-slate-300">
                      {index + 1}. {instruction}
                    </p>
                  );
                })}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
