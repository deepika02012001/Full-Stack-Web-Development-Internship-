import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/movie.pages";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <DefaultHOC path="/" exact component={MoviePage} />
    </>
  );
}

export default App;