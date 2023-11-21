import FoodCard from "../../Components/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div>
              <div className="grid md:grid-cols-3  justify-center">
            {items.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </div>
    );
};

export default OrderTab;