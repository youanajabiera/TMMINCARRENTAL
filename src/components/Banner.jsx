import React from 'react'
import Assets from '../assets'
import { Link } from 'react-router-dom'

export default function banner() {
  return (
    <section id="banner" className="bg-body-red">
    {/* <!-- container adalah untuk ngebungkus semua element --> */}
    <div className="container">
      {/* <!-- row adalah untuk membagi dua bagian col--> */}
      <div className="row">
        <div className="col-6 d-flex align-items-center text-light">
          <div>
            <h1>Sewa & Rental Mobil Terbaik di kawasan Jekardah!</h1>
            <p>Selamat datang di TMMIN Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
              Selalu
              siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <Link to="/cari" className="btn btn-success">Mulai Sewa Mobil</Link>
          </div>
        </div>
        <div className="col-6">
          <img src={Assets.Zenix} className="img-fluid" alt="Zenix" />
        </div>
      </div>
    </div>
  </section>
//   {/* <!-- end banner -->
  )
}
