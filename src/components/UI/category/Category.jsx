import React from "react";
import { Container, Row, Col } from "reactstrap";

import CategoryImg01 from "../../../assets/images/category-01.png";
import CategoryImg02 from "../../../assets/images/category-02.png";
import CategoryImg03 from "../../../assets/images/category-03.png";
import CategoryImg04 from "../../../assets/images/category-04.png";
import "../../../styles/category.css";
const categoryData = [
  {
    display: "Burger",
    imgUrl: CategoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: CategoryImg02,
  },
  {
    display: "Asian Food",
    imgUrl: CategoryImg03,
  },
  {
    display: "Row Meat",
    imgUrl: CategoryImg04,
  },
];
const Category = () => {
  return (
    <section>
      <Container>
        <Row>
          {categoryData.map((item, index) => {
            return (
              <Col lg="3" md="4" sm="6" xs="6" key={index}>
                <div className="category__item d-flex align-items-center gap-3">
                  <div className="category__img">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <h6>{item.display}</h6>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Category;
