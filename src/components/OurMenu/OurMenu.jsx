/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardMenu from "./CardMenu/CardMenu";

import dataMenu from "./dataMenu";

import MenuBreakfast from "../../assets/images/thumbs/thumbs-menu-breakfast.png";
import MenuBircher from "../../assets/images/thumbs/thumbs-menu-bircher.png";
import MenuGranola from "../../assets/images/thumbs/thumbs-menu-granola.png";
import MenuPrufRock from "../../assets/images/thumbs/thumbs-menu-prufrock.png";
import MenuSoup from "../../assets/images/thumbs/thumbs-menu-soup.png";
import MenuMushrooms from "../../assets/images/thumbs/thumbs-menu-mushrooms.png";
import MenuTomatoes from "../../assets/images/thumbs/thumbs-menu-tomatoes.png";
import MenuFruit from "../../assets/images/thumbs/thumbs-menu-fruit.png";
import MenuEggs from "../../assets/images/thumbs/thumbs-menu-eggs.png";
import MenuToast from "../../assets/images/thumbs/thumbs-menu-toast.png";

import "./OurMenu.modules.css";
const OurMenu = () => {
  const [menu, setMenu] = useState(dataMenu);
  const [menuSelected, setMenuSelected] = useState(dataMenu[0]);

  return (
    <section className="ourMenu" id="ourMenu">
      <div className="container container__section h-100">
        <div className="ourMenu__content">
          <div className="section__header">
            <h3>Explore our menu</h3>
            <span></span>
            <p>
              Available all day! We can not guarantee our foods are
              allergen-free. Service charge not included.
            </p>
          </div>

          <ul className="nav__menu d-flex flex-row justify-content-center align-item-center gap-5 mt-5">
            {menu.map((item) => (
              <li
                key={item.id}
                className={item.menu === menuSelected.menu ? "nav__active" : ""}
                onClick={() => setMenuSelected(item)}
              >
                {item.menu}
                {item.menu === menuSelected.menu ? <motion.div /> : null}
              </li>
            ))}
          </ul>

          {/* content */}
          <div className="content row mt-5 gx-4">
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={menuSelected ? menuSelected.menu : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="col-12 col-lg-6 d-flex flex-column gap-4"
              >
                {menuSelected
                  ? menuSelected.data.map((item, index) => {
                      if (index <= 4) {
                        return (
                          <CardMenu
                            key={index}
                            menuImg={item.image}
                            menuName={item.name}
                            menuDescription={item.description}
                            price={item.price}
                          />
                        );
                      }
                    })
                  : "😋"}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={menuSelected ? menuSelected.menu : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="col-12 col-lg-6 d-flex flex-column gap-4 mt-4 mt-lg-0"
              >
                {menuSelected
                  ? menuSelected.data.map((item, index) => {
                      if (index > 4) {
                        return (
                          <CardMenu
                            key={index}
                            menuImg={item.image}
                            menuName={item.name}
                            menuDescription={item.description}
                            price={item.price}
                          />
                        );
                      }
                    })
                  : "😋"}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
