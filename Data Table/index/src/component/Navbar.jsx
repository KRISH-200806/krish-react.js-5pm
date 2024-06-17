import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Nav className={`navbar ${isFixed ? "fixed" : ""}`}>
            <Nav.Link href="/">ProductList</Nav.Link>
            <Nav.Link href="#">EditProduct</Nav.Link>
            <Nav.Link href="#">DeleteProduct</Nav.Link>
            <Nav.Link href="#">AddProduct</Nav.Link>
            <Nav.Link href="#">ProductDetails</Nav.Link>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
