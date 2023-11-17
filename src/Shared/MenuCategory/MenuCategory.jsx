import MenuItem from "../../Pages/Home/PopularMenu/MenuItem";
import Cover from "../Cover";


const MenuCategory = ({items, title, img}) => {
    return (
        <div>
      { 
       title && <Cover img={img} title={title}
        description={"Would you like to try a dish?"}
      ></Cover>}
            <div className="mt-16 grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>  
        </div>
    );
};

export default MenuCategory;