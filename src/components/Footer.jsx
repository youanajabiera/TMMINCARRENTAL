import Assets from "../assets";
import assets from '../assets'

export default function Footer() {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-3">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>tmmincarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-12 col-md-3">
            <ul>
              <li>
                <a href="#service">Our Service</a>
              </li>
              <li>
                <a href="#why-us">Why Us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <p>Connect with us</p>
            <div className="d-flex gap-3 align-items-center">
              <a href="#">
                <img src={assets.iconFacebook} alt="social-media" />
              </a>
              <a href="#">
                <img src={assets.iconInstagram} alt="social-media" />
              </a>
              <a href="#">
                <img src={assets.iconTwitch} alt="social-media" />
              </a>
              <a href="#">
                <img src={assets.iconMail} alt="social-media" />
              </a>
              <a href="#">
                <img src={assets.iconTwitch} alt="social-media" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <p>Copyright TMMIN 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}