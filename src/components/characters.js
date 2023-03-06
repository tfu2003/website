import React from "react";
import { motion } from "framer-motion";

const Characters = (props) => {
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const words = [props.text];

  return (
    <div>
      {words.map((element, index) => {
        return (
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
            }}
            key={index}
          >
            <motion.span style={{ display: "inline-block" }} variants={item}>
              {element}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};

export default Characters;
