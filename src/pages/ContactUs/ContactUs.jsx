import styles from "./contactUs.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function ContactUs() {
  return (
    <>
      <Navbar title="METAL GATES" />
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Left: Contact Info + Map */}
          <div className={styles.info}>
            <h2 className={styles.title}>Get in Touch</h2>
            <p className={styles.description}>
              We'd love to hear from you! Reach out with any questions or ideas.
            </p>
            <ul className={styles.list}>
              <li>
                <strong>📧 Email:</strong>
                <a href="metalgateleeds@gmail.com">
                  {" "}
                  metalgateleeds@gmail.com{" "}
                </a>
              </li>
              <li>
                <strong>📞 Phone:</strong>
                <a href="tel: +447710063815"> +44 7710063815 </a>
              </li>
              <li>
                <strong>📍 Address:</strong> THE OLD SCHOOL BIRELEY LANE
                BRADFORD BD4 6AA
              </li>
              <li>
                <strong>🕒 Hours:</strong> Mon–Fri, 9AM–6PM
              </li>
            </ul>

            {/* Map Section */}
            {/* Map Section */}
            <div className={styles.map}>
              <img
                src="/assets/img/map.png"
                alt="Our Location"
                className={styles.mapImage}
              />
            </div>
          </div>
          ّ{/* Right: Contact Form */}
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
