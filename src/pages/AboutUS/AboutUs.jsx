import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styled from "./aboutUs.module.css";

function AboutUs() {
  return (
    <>
      <Navbar title="METAL GATES" />
      <div className={styled.container}>
        <div className={styled.aboutpage}>
          <div className={styled.content}>
            <h2>About Us</h2>
            <p>
              Metalgate Leeds Ltd is a trusted provider of high-quality metal
              fabrication and engineering solutions, proudly serving clients
              across Leeds and the West Yorkshire. With years of industry
              experience, we specialise in custom metalwork, gates, railings,
              fences, and structural steel projects delivering precision,
              durability, and excellent customer service every step of the way.
            </p>
            <img src="/assets/img/aboutUs.jpg" alt="metal" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
