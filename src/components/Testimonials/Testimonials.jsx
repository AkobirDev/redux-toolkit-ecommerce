import React from "react";
import { Container, Row, Col } from "reactstrap";
import TestimonialSlider from "../../components/UI/slider/TestimonialSlider";
import networkImg from "../../assets/images/network.png";
const Testimonials = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="testimonial">
              <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
              <h2 className="testimonial__title">
                What our <span>Customers</span> are saying?{" "}
              </h2>
              <p className="testimonial__desc mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci sunt magnam iste incidunt! Voluptas voluptatem nostrum
                adipisci labore iusto sint!
              </p>
              <TestimonialSlider />
            </div>
          </Col>
          <Col lg="6" md="6">
            <img src={networkImg} className="w-100" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
