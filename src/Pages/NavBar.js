import React from "react";

import { Route, Routes } from "react-router-dom";
import { Collection } from "./Collection";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Page404 } from "./Page404";
import { Racing } from "./Racing";

import { Shoe } from "./Shoe";
export const NavBar = () => {
  return (
    <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/shoe" element={<Shoe/>} />
          <Route path="/racing" element={<Racing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
     
    </div>
  );
};
