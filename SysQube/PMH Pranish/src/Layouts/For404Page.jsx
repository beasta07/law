// import React from 'react'

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const For404Error = ({children}) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // console.log('this is location', location);
    if (location.pathname == '/*') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    <div>
      {showNavbar && children}
    </div>
  );
};

export default For404Error;