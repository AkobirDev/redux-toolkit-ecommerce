import React, { useState, useEffect } from "react";
import products from "../../assets/fake-data/products";
import foodCategoryImg01 from "../../assets/images/hamburger.png";
import foodCategoryImg02 from "../../assets/images/pizza.png";
import foodCategoryImg03 from "../../assets/images/bread.png";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../UI/product-card/ProductCard";

const MainFood = () => {
  const [category, setCategory] = useState("All");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "All") {
      setAllProducts(products);
    }
    if (category === "Burger") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Pizza") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Bread") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h5>Popular Foods</h5>
          </Col>
          <Col lg="12">
            <div className="food__category d-flex align-items-center justify-content-center gap-5">
              <button
                onClick={() => setCategory("All")}
                className={`all__btn ${
                  category === "All" ? "foodBtnActive" : ""
                }`}
              >
                All
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "Burger" ? "foodBtnActive" : ""
                }`}
                onClick={() => setCategory("Burger")}
              >
                <img src={foodCategoryImg01} alt="" />
                Burger
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "Pizza" ? "foodBtnActive" : ""
                }`}
                onClick={() => setCategory("Pizza")}
              >
                <img src={foodCategoryImg02} alt="" />
                Pizza
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "Bread" ? "foodBtnActive" : ""
                }`}
                onClick={() => setCategory("Bread")}
              >
                <img src={foodCategoryImg03} alt="" />
                Bread
              </button>
            </div>
          </Col>

          {allProducts.map((item, index) => {
            return (
              <Col lg="3" md="4" className="mt-5" key={index}>
                <ProductCard item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default MainFood;
