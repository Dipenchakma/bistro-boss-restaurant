import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Categories from "./Category/Categories";
import FeaturedMenu from "./FeaturedMenu";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
              <Helmet>
            <title>Bistro Boss | Home </title>
            </Helmet>
           <Banner></Banner>
           <Categories></Categories>
           <PopularMenu></PopularMenu>
           <FeaturedMenu></FeaturedMenu>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;