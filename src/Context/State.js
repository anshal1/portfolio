import React from 'react'
import { useState } from 'react';
import Context from "./Context.js";
const State = (props) => {
    const [Hover, setHover] = useState("hide")
    const [Scrolled, setScrolled] = useState("main_navbar_container");
  return (
    <>
    <Context.Provider value={{Hover, setHover, Scrolled, setScrolled}}>
    {props.children}
    </Context.Provider>
    </>
  )
}

export default State
