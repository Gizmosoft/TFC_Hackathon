import { response } from "express";
import * as recipeService from '../services/recipe-service.js';
import { setResponse, setErrorResponse } from "./response-handler.js";


// Controller for getting all recipes in the system
export const getRecipes = async (request, response) => {
    try {
        const params = {...request.query}
        const recipes = await recipeService.searchAll(params);
        setResponse(recipes, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

// Controller for adding new recipe to DB
export const createRecipe = async (request, response) => {
    try {
        const newRecipe = {...request.body};
        const recipe = await recipeService.createRecipe(newRecipe);
        setResponse(recipe, response);        
    } catch (error) {
        setErrorResponse(error, response);
    }
}