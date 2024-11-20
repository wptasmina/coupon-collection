import slider1 from "../../assets/slider/banner.jpeg";
import slider2 from "../../assets/slider/banner2.jpg";
import slider3 from "../../assets/slider/banner3.jpeg";
import slider5 from "../../assets/slider/banner4.jpg";
import gift from "../../assets/slider/gift.png";

export default function Banner() {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slider1}
            className="w-full md:h-[500px] h-[200px] object-cover "
          />
          <div className="absolute md:left-5 md:right-5 left-10 right-10 gap-2 md:top-[50%] top-[100%] flex md:-translate-y-1/2 transform md:justify-between justify-center py-4">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slider2}
            className="w-full md:h-[500px] h-[200px]  object-cover"
          />
          <div className="absolute md:top-[35%] top-[20%] left-[10%] w-80">
            <h4 className="md:text-lg text-md font-bold text-gray-600">
              Winter Specil
            </h4>
            <h1 className="md:text-6xl text-3xl font-extrabold text-blue-950 md:pt-4 pt-1">
              BIG SALE
            </h1>
            <p className="md:text-xl font-bold text-gray-600 md:pt-4 pt-2 hidden md:block">
              Use this coupon code to receiv 50% discount off all product
            </p>
            <p className="pt-1 text-blue-400 md:hidden">Up To 50% oFF</p>
          </div>

          <div className="absolute md:left-5 md:right-5 left-10 right-10 gap-2 md:top-[50%] top-[100%] flex md:-translate-y-1/2 transform md:justify-between justify-center py-4">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slider3}
            className="w-full md:h-[500px] h-[200px] object-center "
          />
          <div className="absolute w-32 top-[10%] right-[6%]">
            <img src={gift} />
          </div>
          <div className="absolute md:left-5 md:right-5 left-10 right-10 gap-2  md:top-[50%] top-[100%] flex md:-translate-y-1/2 transform md:justify-between justify-center py-4">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={slider5}
            className="w-full md:h-[500px] h-[200px] object-center "
          />
          <div className="absolute md:top-[30%] md:left-[35%]  md:w-96 bg-white/30 p-10 md:px-2 md:py-6 ">
            <p className="md:text-lg text-md font-bold text-blue-900 text-center">
              Up To
            </p>
            <h4 className="md:text-2xl text-lg font-extrabold text-red-800 text-center">
              Up To 40% OFF
            </h4>
            <h1 className="md:text-4xl text-xl font-extrabold text-blue-900 md:pt-4 pt-1 text-center">
              WINTE COLLECTING EVERYTHING
            </h1>
          </div>

          <div className="absolute md:left-5 md:right-5 left-10 right-10 gap-2 md:top-[50%] top-[100%] flex md:-translate-y-1/2 transform md:justify-between justify-center py-4 ">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
