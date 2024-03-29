import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import DishCard from "./components/DishCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RandomRecipe from "./components/RandomRecipe";
import DishDetails from "./components/DishDetails";

const FoodHouse = () => {
  const [data, setData] = useState({ hits: [] });
  const [search, setSearch] = useState("chicken");

  const fetchData = async () => {
    const result = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    );
    setData({ hits: result.data.meals });
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/random">Recipe of the Day</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/random">
            <RandomRecipe />
          </Route>
          <Route path="/:id" component={DishDetails} />
          <Route exact path="/">
            <SearchForm setSearch={setSearch} initialPlaceholder={search} />

            <div className="container">
              {data.hits && data.hits.length
                ? data.hits.map((meal) => (
                    <DishCard key={meal.idMeal} meal={meal}></DishCard>
                  ))
                : "Nothing found :-/"}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default FoodHouse;
