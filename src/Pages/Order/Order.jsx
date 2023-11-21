import UseMenu from "../../Shared/Custom hook/UseMenu";
import orderImg from "../../../bistro-boss-restaurant-resources-main/assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();


  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  console.log("drinks", drinks);
  return (
    <div>
      <Cover img={orderImg} title="Our shop"></Cover>
      <Tabs
        className="text-center my-10"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel> <OrderTab items={salads}></OrderTab></TabPanel>
        <TabPanel> <OrderTab items={pizzas}></OrderTab></TabPanel>
        <TabPanel> <OrderTab items={soups}></OrderTab></TabPanel>
        <TabPanel> <OrderTab items={desserts}></OrderTab></TabPanel>
        <TabPanel> <OrderTab items={drinks}></OrderTab></TabPanel>
     
     
      </Tabs>
    </div>
  );
};

export default Order;
