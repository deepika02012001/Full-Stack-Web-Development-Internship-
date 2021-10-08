import { Route, Redirect, Switch } from "react-router-dom";
import React, { useEffect } from "react";

//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./Layout/Restaurant.layout";

//component
import Temp from "./Components/temp";

//pages
import Home from "./Page/Home";
import RedirectRestaurant from "./Page/Restaurant/Redirect";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Route path="/restaurant/:id" exact component={RedirectRestaurant} />
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Temp}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={Temp}
      />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Temp} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={Temp}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={Temp}
      />
    </>
  );
}

export default App;
