import Container from "../../Shared/Container";

const MotionDuck = () => {
  return (
    <div>
      <Container>
        <div className="flex lg:flex-row flex-col justify-between lg:gap-0 gap-5 items-center border-2 bg-white  rounded-2xl p-16 -mt-48">
          <div>
            <h1 className="text-5xl my-2">What is MotionDucks</h1>
            <p className="my-2">25,5000 + Assets</p>
            <button className="btn bg-pink-500 text-white hover:border-pink-300 hover:bg-pink-300">
              Play Video
            </button>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CuGyl9guSrM?si=LSqeay6zW_IRPZNJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullscreen
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MotionDuck;
