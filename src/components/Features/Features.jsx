import React from "react";
import { Container, Row, Col } from "reactstrap";
import FeatureImg01 from "../../assets/images/service-01.png";
import FeatureImg02 from "../../assets/images/service-02.png";
import FeatureImg03 from "../../assets/images/service-03.png";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: FeatureImg01,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, in!",
  },
  {
    title: "Super Dine In",
    imgUrl: FeatureImg02,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, in!",
  },
  {
    title: "Easy Pick Up",
    imgUrl: FeatureImg03,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, in!",
  },
];
const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h5 className="feature__subtitle mb-4">What we serve</h5>
            <h2 className="feature__title">Just sit back at home</h2>
            <h2 className="feature__title">
              we will <span>take care</span>
            </h2>
            <p className="mb-1 mt-4 feature__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, distinctio?
            </p>
            <p className="feature__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, distinctio?
            </p>
          </Col>
          {featureData.map((item, index) => {
            return (
              <Col lg="4" md="4" className="mt-5" key={index}>
                <div className="feature__item text-center px-5 py-3">
                  <img src={item.imgUrl} alt="" className="w-25 mb-3" />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
