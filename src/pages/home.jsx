import Assets from '../assets';
import assets from '../assets';
import React from 'react';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Testimonial from "../components/Testimonial";
import { Accordion } from "react-bootstrap";
import Footer from "../components/Footer";

export default function home() {
    return (
        <>
            {/* start section navbar: yaitu section header diatas halaman web */}
            <Navigation />
            {/* end section navbar: yaitu section header diatas halaman web */}

            {/* start section banner: yaitu section profile di halaman web */}
            <Banner />
            {/* end section banner: yaitu section profile di halaman web */}

            {/* start section our services */}
            <section id="service">
                <div className="container py-5 my-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 mb-5 mb-md-0">
                            <div>
                                <img src={Assets.Service} className="img-fluid" alt="service" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>Best Car Rental for any kind of trip in Jekardah!</h2>
                            <p>Sewa mobil di Jakarta bersama TMMIN Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
                                mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                            <ul>
                                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                                <li>Layanan Airport Transfer / Drop In Out</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- end middle --> */}
            </section>
            {/* end section our services */}

            {/* start section why us */}
            <section id="why-us">
                <div className="container py-5 my-5">
                    {/* <!-- container digunakan di setiap section agar tampilan rapi dan konsisten --> */}
                    <h2 className="mb-3">Why Us?</h2>
                    <p className="mb-4">Mengapa harus pilih TMMIN Car Rental?</p>
                    {/* <!-- cara cepat membuat row col -> ketik : div.row>div.col*4 , kemudian ctrl + space  --> */}
                    <div className="row">
                        {/* <!-- perilaku col di bawah sama dengan yang di terapkan di hero -->
        <!-- tetapi yang berbeda disini kita menggunakan 3 ukuran berbeda  -->
        <!-- col-12 (full) di ukuran layar terkecil sampai 767px -->
        <!-- col-md-6 (50:50 / setengah ukuran) di ukuran layar 768px keatas sampai 991px -->
        <!-- col-lg-3 (dibagi menjadi 4 kolom (12/4)) akan di terapkan di ukuran layar mulai 992px keatas --> */}
                        <div className="col-12 col-md-6 col-lg-3 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <img src={assets.ICComplete} className="mb-4" alt="TMMIN Car Rental - Mobil Lengkap" />
                                    <h3 className="mb-4">Mobil Lengkap</h3>
                                    <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <img src={assets.Price} className="mb-4" alt="TMMIN Car Rental - Harga Murah" />
                                    <h3 className="mb-4">Harga Murah</h3>
                                    <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <img src={assets.Hrs} className="mb-4" alt="TMMIN Car Rental - Layanan 24 Jam" />
                                    <h3 className="mb-4">Layanan 24 Jam</h3>
                                    <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <img src={assets.Professional} className="mb-4" alt="TMMIN Car Rental - Sopir Profesional" />
                                    <h3 className="mb-4">Sopir Profesional</h3>
                                    <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end section why us */}

            <Testimonial />

            {/* start section booking */}
            <section id="booking">
                <div className="container py-5 my-5">
                    <div className="container p-5 my-5 d-flex justify-content-center bg-body-red text-light rounded-4">
                        <div className="text-center p-4">
                            <h1>Sewa Mobil di Jakarta sekarang!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.</p>
                            <a href="#" className="btn btn-success">Mulai Sewa Mobil</a>

                        </div>
                    </div>
                </div>
            </section>
            {/* end section booking */}

            {/* start section FAQ */}
            <section id="faq">
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <h2>Frequently Asked Question</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="col-12 col-md-7">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        Apa saja syarat yang dibutuhkan?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        Berapa hari minimal sewa mobil lepas kunci?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        Apakah Ada biaya antar-jemput?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        Bagaimana jika terjadi kecelakaan?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
            {/* end section FAQ */}

            <Footer />

        </>
    )
}
