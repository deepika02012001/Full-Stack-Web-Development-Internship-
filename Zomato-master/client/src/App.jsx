import { Route, Redirect, Switch } from "react-router-dom";
import React, { useEffect } from "react";

//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./Layout/Restaurant.layout";

//component
import Temp from "./Components/temp";
import Overview from "./Page/Restaurant/Overview";

//pages
import Home from "./Page/Home";
import RedirectRestaurant from "./Page/Restaurant/Redirect";
import OrderOnline from "./Page/Restaurant/OrderOnline";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Route path="/restaurant/:id" exact>
        <Redirect to="/restaurant/:id/overview" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={OrderOnline} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
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
