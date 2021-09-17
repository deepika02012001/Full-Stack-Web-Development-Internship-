import {Route, Redirect} from "react-router-dom";

//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./Layout/Restaurant.layout";

//component
import Temp from "./Components/temp";

//pages
import Home from "./Page/Home";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
    </>
  );
}

export default App;
