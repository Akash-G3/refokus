import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-white text-[10rem] font-medium tracking-tight leading-none">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 text-white flex gap-8">
          <div className="basis-1/3">
            <h4 className="mb-8 text-zinc-300 capitalize">socials</h4>
            {["instagram", "twitter (X)?", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-400">{item}</a>
            ))}
          </div>

          <div className="basis-1/2 mt-4">
            <p className="text-xs text-zinc-200">
              Refokus is pioneering digital agency driven by design and
              empowered by technology
            </p>
            <img
              className="mt-4"
              src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
