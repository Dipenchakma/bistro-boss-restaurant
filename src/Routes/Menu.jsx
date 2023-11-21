import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImg from "../../bistro-boss-restaurant-resources-main/assets/menu/banner3.jpg";
import UseMenu from "../Shared/Custom hook/UseMenu";
import SectionTitle from "../Components/SectionTitle";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";
import dessertImg from '../../bistro-boss-restaurant-resources-main/assets/menu/dessert-bg.jpeg'
import offeredImg from '../../bistro-boss-restaurant-resources-main/assets/menu/pizza-bg.jpg'
import soups from '../../bistro-boss-restaurant-resources-main/assets/menu/soup-bg.jpg'
const Menu = () => {
  const [menu] = UseMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
//   const salad = menu.filter((item) => item.category === "salad");
//   const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"our menu"}
        description={"Would you like to try a dish?"}
      ></Cover>
    <SectionTitle subHeading={"Don't Miss"} heading= {"Today's Offer"}></SectionTitle>
    <MenuCategory items={offered} title={"offered"} img = {offeredImg}></MenuCategory>
    <MenuCategory items={desserts} title={"desserts"} img = {dessertImg}></MenuCategory>
    <MenuCategory items={soup} title={"soup"} img = {soups}></MenuCategory>
    </div>
  );
};

export default Menu;
