import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/images/hero.png";
import "../../styles/hero-section.css";
const Hero = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h5>Easy way to make an order</h5>
              <h1 className="mb-4 hero__title">
                <span>Hungry?</span> Just wait{" "}
                <h1 className="mb-4 hero__title">
                  food at <span>your door</span>
                </h1>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                pariatur similique quaerat, ducimus perspiciatis sint.
              </p>

              <div className="hero__btns d-flex align-items-center gap-5 ">
                <button className="order__btn d-flex align-items-center justify-content-between">
                  Order now <i className="ri-arrow-right-s-line"></i>
                </button>
                <button className="all__foods-btn">
                  <Link to="/foods">See all foods</Link>
                </button>
              </div>
              <div className="hero__service d-flex align-items-center gap-5 mt-5">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i className="ri-car-line"></i>
                  </span>{" "}
                  No shipping charge
                </p>
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i className="ri-shield-check-line"></i>
                  </span>{" "}
                  100% secure checkout
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={HeroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
