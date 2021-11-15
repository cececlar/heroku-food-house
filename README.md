# Food House

## Installation instructions

Run the following commands in a terminal window:

```bash
git clone git@github.com:cececlar/heroku-food-house.git
cd heroku-food-house && npm i
```

## Usage

Run the following from the root directory of the project in a terminal window to start a React server:

```bash
npm start
```

## About Food House

Food House was designed to demonstrate making API calls using Axios in a React application. Recipe data is pulled from [The MealDB API](https://www.themealdb.com/api.php) and displayed to users on home page. Upon clicking on the card for a specific recipe, the user is taken to an individual show page with additional details about that recipe.

The search bar is functional and allows users to query the API by main ingredient. A message is displayed to users when no recipes match their search query.
