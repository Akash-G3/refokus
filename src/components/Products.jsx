import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "With a continous 3D animation , we showcase arqitel approach and show how migration data translates into real estate",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We have created an interactive site using generative AI to allow users to engage with our thinking with AI industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "arqitel product description si now meplaun teo hsoid a ashdks shdksjdhfk shfkajshfdkjsd haskdjhfeiuw ebybiv bae odiu owieowiewfihdciu ihd i ",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "arqitel product description si now meplaun teo hsoid a ashdks shdksjdhfk shfkajshfdkjsd haskdjhfeiuw ebybiv bae odiu owieowiewfihdciu ihd i ",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 21);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute w-[25rem] h-[21rem] left-[45%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
            className="w-full h-full bg-[url('./assets/image1.webp')] bg-cover rounded-md"
          >
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
            className="w-full h-full bg-[url('./assets/image2.webp')] bg-cover rounded-md"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
            className="w-full h-full bg-[url('./assets/image3.webp')] bg-cover rounded-md"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
            className="w-full h-full bg-[url('./assets/image4.webp')] bg-cover rounded-md"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
