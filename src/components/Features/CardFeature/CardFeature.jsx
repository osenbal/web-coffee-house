import React from "react";
import { motion } from "framer-motion";
import AnimationBouncing from "../../../utils/Animations/AnimationBounce";

import "./CardFeature.modules.css";

const CardFeature = ({ icon, title, description, isLeft }) => {
  return (
    <motion.div {...AnimationBouncing}>
      <div className="feature__card d-flex gap-3 align-items-center justify-content-center">
        <img
          className={`${isLeft ? "order-1 order-lg-2" : ""}`}
          src={icon}
          alt="icon feature product"
        />
        <div
          className={`description text-start ${
            isLeft ? "order-2 order-lg-1" : ""
          }`}
        >
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CardFeature;
