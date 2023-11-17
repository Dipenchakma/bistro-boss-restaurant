import UseMenu from "../../Shared/Custom hook/UseMenu";
import orderImg from '../../../bistro-boss-restaurant-resources-main/assets/menu/banner3.jpg'
import Cover from "../../Shared/Cover";
const Order = () => {
    const [menu] = UseMenu()
    console.log('menu', menu)
    return (
        <div>
           <Cover img ={orderImg} title= 'Our shop'></Cover>
        </div>
    );
};

export default Order;