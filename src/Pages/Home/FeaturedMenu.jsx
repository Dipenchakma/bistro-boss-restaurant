import SectionTitle from "../../Components/SectionTitle";
import image from "../../../bistro-boss-restaurant-resources-main/assets/home/featured.jpg";

const FeaturedMenu = () => {
  return (
    <div className="min-h-screen bg-fixed" style={{backgroundImage: 'url(https://i.ibb.co/xzYChCv/featured.jpg)'}}>
  <div className="py-1">
  <SectionTitle
        subHeading={"Check out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="md:flex max-w-6xl mx-auto gap-10 items-center mb-20">
        <div className="md:w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="md:w-1/2 text-white space-y-1">
          <p>November 13, 2023 </p>
          <p>WHERE CAN I GET SOME</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            quas sit unde, nihil ex molestias excepturi ab eius nostrum
            distinctio ipsam, obcaecati adipisci dolores ad at quidem suscipit
            odio, enim libero. Perferendis laboriosam ullam sapiente quos esse
            veritatis modi rerum.
          </p>
          <button className="border-b-2 pt-3 px-4">READ MORE</button>
        </div>
      </div>
  </div>
    </div>
  );
};

export default FeaturedMenu;
