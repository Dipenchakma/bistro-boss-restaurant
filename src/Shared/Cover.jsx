import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -70, max: 70 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div>
        <div className="hero h-[600px]">
          <div className="hero-overlay bg-opacity-60 h-1/2 w-1/2"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
