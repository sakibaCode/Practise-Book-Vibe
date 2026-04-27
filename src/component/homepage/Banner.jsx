import heroImg from "../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="hero bg-base-200 min-h-[60vh] max-w-6xl mx-auto rounded-2xl">

        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12">

          {/* Image */}
          <img
            src={heroImg}
            alt="Books"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-xl object-cover"
          />

          {/* Text */}
          <div className="space-y-4 text-center lg:text-left max-w-md">

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Books to freshen up <br className="hidden sm:block" />
              your bookshelf
            </h1>

            <button className="btn btn-success text-white w-full sm:w-auto">
              View The List
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;