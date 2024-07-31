import frontEnd from "../../assets/introb.gif";

const Model = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <img
        className="w-full h-full bg-cover lg:-mt-8"
        src={frontEnd}
        alt="intro"
      />
      {/* <video className="w-full h-full bg-cover -mt-8" loop autoPlay controls>
        <source src={frontEnd} type="video/mp4" />
      </video> */}
    </div>
  );
};

export default Model;
