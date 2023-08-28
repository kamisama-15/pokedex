import React from "react";
import "../Components/NavCSS.css";
const NavComponent = () => {
  return (
    <div>
      <div>
        <nav classNameName="navbar navbar-expand-lg navbar-light bg-dark py-3">
          <div classNameName="container d-flex justify-content-center">
            <div className="glitch-wrapper">
              <div className="glitch" data-glitch="Pokedex">
                Pokedex
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavComponent;



