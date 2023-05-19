import React from "react";

const Banner = () => {
  return (
    <div className="mt-8">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[600px]">
          <img
            src="https://i.ibb.co/ncKKs53/photo-1577368089740-7bbf4e2d9b63-ixlib-rb-4-0.jpg"
            className="w-full"
          />
          <div className="absolute flex items-center h-full">
            <div className="ml-8 text-right">
                <h1 className="text-5xl font-bold max-w-lg text-white mb-7">Toy-Verse Creates Memories That Last!</h1>
                <p className="text-white text-lg max-w-lg mb-7">Bringing Imagination to Life, Toy-Verse: Where Magic Unfolds!</p>
                <div>
                    <button className="btn bg-[#EF7B84] hover:bg-[#68B5D2] duration-500 outline-none border-none">View Collection</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle bg-[#EF7B84] hover:bg-[#68B5D2] duration-500 outline-none border-none">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-[#EF7B84] hover:bg-[#68B5D2] duration-500 outline-none border-none ml-6">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[600px]">
          <img
            src="https://i.ibb.co/GkTnMQq/photo-1512839112604-a05d02098d9e-ixlib-rb-4-0.jpg"
            className="w-full"
          />
          <div className="absolute flex items-center h-full">
            <div className="ml-8 text-right">
                <h1 className="text-5xl font-bold max-w-lg text-white mb-7">Unlock the Portal to Imagination.</h1>
                <p className="text-white text-lg max-w-lg mb-7">Where Fantasy and Reality Collide in a Magical Symphony of Toys!</p>
                <div>
                    <button className="btn bg-[#EF7B84] hover:bg-[#68B5D2] duration-500 outline-none border-none">View Collection</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle bg-[#EF7B84] hover:bg-[#68B5D2] duration-500 outline-none border-none">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-[#EF7B84] ml-6 hover:bg-[#68B5D2] duration-500 outline-none border-none">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[600px]">
          <img
            src="https://i.ibb.co/v4K01Mw/photo-1580923368248-877f237696cd-ixlib-rb-4-0.jpg"
            className="w-full"
          />
        <div className="absolute flex items-center h-full">
            <div className="ml-8 text-right">
                <h1 className="text-5xl font-bold max-w-lg text-white mb-7">Color Your World with Toy-Verse</h1>
                <p className="text-white text-lg max-w-lg mb-7">Where Fantasy and Reality Collide in a Magical Symphony of Toys!</p>
                <div>
                    <button className="btn bg-[#EF7B84] hover:bg-[#68B5D2] duration-500 outline-none border-none">View Collection</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle bg-[#EF7B84] hover:bg-[#68B5D2] duration-500 outline-none border-none">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-[#EF7B84] ml-6 hover:bg-[#68B5D2] duration-500 outline-none border-none">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[600px]">
          <img
            src="https://i.ibb.co/Phzmt8B/photo-1602591936046-2c34cd379ab4-ixlib-rb-4-0.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex items-center h-full">
            <div className="ml-8 text-right">
                <h1 className="text-5xl font-bold max-w-lg text-white mb-7">Unlock the Portal to Imagination.</h1>
                <p className="text-white text-lg max-w-lg mb-7">Where Fantasy and Reality Collide in a Magical Symphony of Toys!</p>
                <div>
                    <button className="btn bg-[#EF7B84] hover:bg-[#68B5D2] duration-500 outline-none border-none">View Collection</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle bg-[#EF7B84] hover:bg-[#68B5D2] duration-500 outline-none border-none">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-[#EF7B84] ml-6 hover:bg-[#68B5D2] duration-500 outline-none border-none">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

