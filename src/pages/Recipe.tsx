import WeaterSkeleton from "@/components/ui/WeaterSkeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFetch } from "@/hooks/useFetch";
import { RootState } from "@/lib/store";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipeList } from "@/lib/slice/recipeSlice";
import RecipeCard from "@/components/ui/RecipeCard";

export default function Recipe() {
  const [recipe, setRecipe] = useState("");
  const { fetcher, isLoading } = useFetch();
  const recipeList = useSelector((state: RootState) => state.recipe.recipeList);
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetcher(`/recipe?query=${recipe}`);
      dispatch(setRecipeList(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full text-white min-h-screen py-10 space-y-10">
      <section className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">Recipe List</h1>
        <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
          <Input
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
            placeholder="Food name"
          />
          <Button type="submit" className="bg-blue-500 flex gap-1 items-center">
            <Search size={20} />
            Search
          </Button>
        </form>
      </section>
      <section className="container mx-auto grid grid-cols-4 gap-5">
        {isLoading ? (
          Array.from({ length: 12 }).map((_, index) => (
            <WeaterSkeleton key={index} />
          ))
        ) : recipeList.length == 0 ? (
          <div className="w-full flex justify-center items-center col-start-1 col-end-5 py-10">
            <p className="text-center text-3xl font-semibold">No Data</p>
          </div>
        ) : (
          recipeList.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              servings={recipe.servings}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
            />
          ))
        )}
      </section>
    </main>
  );
}
