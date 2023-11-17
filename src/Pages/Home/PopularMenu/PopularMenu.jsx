
import SectionTitle from "../../../Components/SectionTitle";
import UseMenu from "../../../Shared/Custom hook/UseMenu";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [menu] = UseMenu();
const popular = menu.filter(item => item.category === 'popular')
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter(item => item.category === 'popular')
  //       setMenu(popularItems)
  //   }
  //    );
  // }, []);

  return (
    <div className="">
      <SectionTitle
        subHeading={"check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
