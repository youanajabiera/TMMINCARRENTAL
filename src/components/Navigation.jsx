import React from 'react'
import Assets from '../assets'

export default function Navigation() {
  return (
    // {/* <!--start navbar
    //     ref navbar: https://getbootstrap.com/docs/5.3/components/navbar/--> */}
        <nav className="navbar navbar-expand-lg bg-body-red">
          <div className="container">
            {/* <!--start logo tmmin--> */}
            <a className="navbar-brand" href="#">
              <img src={Assets.Logo} alt="Logo TMMIN"/>
            </a>
            {/* <!--end logo tmmin--> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <!--start ganti bar
              ms: margin ganti kanan
              ref margin: https://getbootstrap.com/docs/5.3/utilities/spacing/
              ref button: https://getbootstrap.com/docs/5.3/components/buttons/
              href: menunjukan link itu akan kemana atau navigasi
              aria-current="page": menunujukan kita lagi ada di Home Page
              end ganti bar--> */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Our Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Why Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Testimonial</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FAQ</a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-success" href="#">Register</a>
                </li>
                {/* <!--start disabled section
                aria-disabled: bisa support disabled dengan voice 'the link has disabled' */}
                {/* <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li> */}
                  {/* end disabled section--> */}
              </ul>
              {/* <!--end bar--> */}
      
            </div>
          </div>
        </nav>
        // {/* <!--end navbar--> */}
      
        // {/* <!-- start banner --> */}
  )
}
