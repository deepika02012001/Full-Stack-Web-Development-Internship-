import React, { useState } from "react";

const MenuCollection = (props) => {

  return (
    <>
        <div className="w-full h-full overflow-hidden  rounded-lg">
          <img
            src={props.image}
            alt="menu"
            className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
          />
        </div>
        <div>
          <strong>{props.menuTitle}</strong>
          <p>{props.pages} Pages</p>
        </div>
    </>
  );
};

export default MenuCollection;