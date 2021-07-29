import React,{useState,useEffect} from "react";
import Slider from "react-slick";
// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

import SimpleInfo from "../components/SimpleInfo/SimpleInfo.component";
//config
import TempPosters from "../config/TempPosters.config";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import axios from "axios";

const HomePage = () => {

  const [popularMovies, setPopularMovies]=useState([]);
  const [topRatedMovies, setTopRatedMovies]=useState([]);
  const [upcomingMovies, setUpcomingMovies]=useState([]);

  useEffect(()=>{
    const requestPopularMovies=async()=>{
      const getPopularMovies=await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  },[]);

  useEffect(()=>{
    const requestTopRatedMovies=async()=>{
      const getTopRatedMovies=await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  },[]);

  useEffect(()=>{
    const requestUpcomingMovies=async()=>{
      const getUpcomingMovies=await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  },[]);

  return (
    <>
    <div className="flex flex-col gap-10">
          <div className="container mx-auto px-4 ">
          <SimpleInfo />
          </div>
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
      
      <div className="bg-postercolor-50 py-12">
        <div className="container mx-auto px-4 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premiere" className="w-full h-full" />
          </div>
          <PosterSlider images={popularMovies} title='Premieres' subtitle="Brand new releases every Tuesday!" isDark={true} />
        </div>
      </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider  images={topRatedMovies} title="Online Streaming Events" isDark={false}/>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider  images={upcomingMovies} title="Outdoor Events" isDark={false}/>
      </div>
      
    </>
  );
};

export default HomePage;