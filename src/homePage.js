import React, { useState } from "react";
import { Product } from "./helper/product";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import "./home.css";

function HomePage() {
  const [triger, setTriger] = useState(false);
  // const [stop, setStop] = useState(true);

  setInterval(() => {
    setTriger(!triger);
  }, 5000);

  return (
    <div className="flex w-[100vw] h-[80vh] ">
      <div className=" flex flex-col lg:flex-row bg-[white] w-screen lg:w-[90vw] h-[100%] m-auto shadow-2xl shadow-black/30">
        {shuffle(Product)
          .slice(0, 1)
          .map((data) => {
            return (
              <div
                className="flex flex-col-reverse lg:flex-row w-[100vw] h-[70vh]  items-center lg:pl-40"
                key={data.id}
              >
                <motion.div
                  className="lg:pl-8 animate lg:w-[50vw]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  exit={{ opacity: 0 }}
                >
                  <div className=" lg:text-5xl text-md font-semibold p-5 text-[#82237c]">
                    <p>{data.name}</p>
                  </div>
                  <div className=" p-5 text-md lg:text-2xl lg:w-[35vw] line leading-9">
                    {data.describe}
                  </div>
                  <div>
                    <button className="b-white shadow-xl h-[4vh] w-[24vw] lg:h-[5vh] lg:w-[9vw] ml-5 text-sm lg:text-2xl rounded-md font-semibold bg-[#82237c] text-[white] hover:scale-110 duration-1000 hover:rounded-full hover:pt-2 hover:pb-2">
                      Explore Now
                    </button>
                  </div>
                </motion.div>
                <motion.div
                  className=" m-auto w-screen lg:w-[35vw]  lg:pr-20 "
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  onHoverStart={() => console.log("starts")}
                  onHoverEnd={() => console.log("ends")}
                  transition={{
                    duration: 2,
                    type: "spring",
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  exit={{ opacity: 0, y: "-100vh" }}
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={data.img}
                      alt="not found"
                      className="lg:w-[30vw] w-[50%]"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HomePage;
