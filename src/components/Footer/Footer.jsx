import styles from "./footer.module.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>About Us</h2>
          <p>
          Metalgate Leeds Ltd provides expert metal fabrication across the UK, specialising in custom metalwork, gates,
           railings, and structural steel—with a focus on quality, precision, and reliable service.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Contact</h2>
          <p>
            📞 <a href="tel:+447710063815 " className={styles.link}> +447710063815 </a>
          </p>
          <p>
            📧 <a href="metalgateleeds@gmail.com" className={styles.link}>metalgateleeds@gmail.com </a>
          </p>
           <p>
                📍 The Old School Bireley Lane Bradford BD4 6AA
              </p>
        </div>

        <div className={styles.section}>
          <h2>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/metal_gate_leeds?utm_source=ig_web
            _button_share_sheet&igsh=MWV0YW82MzF2eDhpeQ==" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/447710063815" aria-label="Whatsapp"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        &copy; {new Date().getFullYear()} MetalGate Website. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
