import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RecipeState {
  recipeList: Recipe[];
}

const initialState: RecipeState = {
  recipeList: [],
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipeList: (state, action: PayloadAction<Recipe[]>) => {
      console.log(action.payload);
      state.recipeList = action.payload;
    },
  },
});

export const { setRecipeList } = recipeSlice.actions;
export default recipeSlice.reducer;
