

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" mx-auto  text-center space-y-3 my-20 md:w-3/12">
            <p className="text-yellow-600">---{subHeading}---</p>
            <h3 className="text-4xl border-y-4 py-3 ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;