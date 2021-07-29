import { Route } from "react-router-dom";
import axios from "axios";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
import StreamsHOC from "./HOC/Streams.HOC";

// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.pages";
import PlaysPage from "./pages/Plays.page";
import EventsPage from "./pages/Events.page";
import SportsPage from "./pages/Sports.pages";
import ActivitiesPage from "./pages/Activities.pages";
import StreamsPage from "./pages/Streams.pages";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={PlaysPage} />
      <DefaultHOC path="/events" exact component={EventsPage} />
      <DefaultHOC path="/sports" exact component={SportsPage} />
      <DefaultHOC path="/activities" exact component={ActivitiesPage} />
      <StreamsHOC path="/streams" exact component={StreamsPage} />
    </>
  );
}

export default App;