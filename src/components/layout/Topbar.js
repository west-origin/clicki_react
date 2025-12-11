import React from "react";
import SearchBar from "../common/SearchBar.js"

const Topbar = () => {
    return (
        <>
{/* Topbar Start */}
<div className="container-fluid px-5 d-none border-bottom d-lg-block">
    <div className="row gx-0 align-items-center">
        <div className="col-lg-4 text-center text-lg-start mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                <a href="#" className="text-muted me-2">{" "}Help</a>
                <small> / </small>
                <a href="#" className="text-muted mx-2">{" "}Support</a>
            </div>
        </div>
        <div className="col-lg-4 text-center d-flex align-items-center justify-content-center">
            <small className="text-dark">Contact Me: mrkiwonseo@gmail.com</small>
        </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div
          className="d-inline-flex align-items-center"
          style={{ height: 45 }}
        >
          <div className="dropdown">
            <a
              href="#"
              className="dropdown-toggle text-muted me-2"
              data-bs-toggle="dropdown"
            >
              <small>USD</small>
            </a>
            <div className="dropdown-menu rounded">
              <a href="#" className="dropdown-item">
                {" "}
                Euro
              </a>
              <a href="#" className="dropdown-item">
                {" "}
                Dolar
              </a>
            </div>
          </div>
          <div className="dropdown">
            <a
              href="#"
              className="dropdown-toggle text-muted mx-2"
              data-bs-toggle="dropdown"
            >
              <small>English</small>
            </a>
            <div className="dropdown-menu rounded">
              <a href="#" className="dropdown-item">
                {" "}
                English
              </a>
              <a href="#" className="dropdown-item">
                {" "}
                Turkish
              </a>
              <a href="#" className="dropdown-item">
                {" "}
                Spanol
              </a>
              <a href="#" className="dropdown-item">
                {" "}
                Italiano
              </a>
            </div>
          </div>
          <div className="dropdown">
            <a
              href="#"
              className="dropdown-toggle text-muted ms-2"
              data-bs-toggle="dropdown"
            >
              <small>
                <i className="fa fa-home me-2" />
                마이페이지
              </small>
            </a>
            <div className="dropdown-menu rounded">
              <a href="#" className="dropdown-item">
                {" "}
                로그인
              </a>
              <a href="#" className="dropdown-item">
                {" "}
                찜 목록
              </a>
              <a href="#" className="dropdown-item">
                {" "}
                장바구니
              </a>
              <a href="#" className="dropdown-item">
                {" "}
                계정 설정
              </a>
              <a href="#" className="dropdown-item">
                {" "}
                내 계정
              </a>
              <a href="#" className="dropdown-item">
                {" "}
                로그아웃
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
      <div className="container-fluid px-5 py-4 d-none d-lg-block">
        <div className="row gx-0 align-items-center text-center">
          <div className="col-md-4 col-lg-3 text-center text-lg-start">
            <div className="d-inline-flex align-items-center">
              <a href="" className="navbar-brand p-0">
                <h1 className="display-5 text-primary m-0">
                  <i className="fas fa-shopping-bag text-secondary me-2" />
                  Clicki
                </h1>
                {/* <img src="img/logo.png" alt="Logo"> */}
              </a>
            </div>
          </div>
          <SearchBar />
          <div className="col-md-4 col-lg-3 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <a
                href="#"
                className="text-muted d-flex align-items-center justify-content-center me-3"
              >
                <span className="rounded-circle btn-md-square border">
                  <i className="fas fa-random" />
                </span>
              </a>
              <a
                href="#"
                className="text-muted d-flex align-items-center justify-content-center me-3"
              >
                <span className="rounded-circle btn-md-square border">
                  <i className="fas fa-heart" />
                </span>
              </a>
              <a
                href="#"
                className="text-muted d-flex align-items-center justify-content-center"
              >
                <span className="rounded-circle btn-md-square border">
                  <i className="fas fa-shopping-cart" />
                </span>
                <span className="text-dark ms-2">$0.00</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
            <div className="container-fluid nav-bar p-0">
              <div className="row gx-0 bg-primary px-5 align-items-center">
                <div className="col-lg-3 d-none d-lg-block">
                  <nav
                    className="navbar navbar-light position-relative"
                    style={{ width: 250 }}
                  >
                    <button
                      className="navbar-toggler border-0 fs-4 w-100 px-0 text-start"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#allCat"
                    >
                      <h4 className="m-0">
                        <i className="fa fa-bars me-2" />
                        전체 카테고리
                      </h4>
                    </button>
                    <div className="collapse navbar-collapse rounded-bottom" id="allCat">
                      <div className="navbar-nav ms-auto py-0">
                        <ul className="list-unstyled categories-bars">
                          <li>
                            <div className="categories-bars-item">
                              <a href="#">Accessories</a>
                              <span>(3)</span>
                            </div>
                          </li>
                          <li>
                            <div className="categories-bars-item">
                              <a href="#">Electronics &amp; Computer</a>
                              <span>(5)</span>
                            </div>
                          </li>
                          <li>
                            <div className="categories-bars-item">
                              <a href="#">Laptops &amp; Desktops</a>
                              <span>(2)</span>
                            </div>
                          </li>
                          <li>
                            <div className="categories-bars-item">
                              <a href="#">Mobiles &amp; Tablets</a>
                              <span>(8)</span>
                            </div>
                          </li>
                          <li>
                            <div className="categories-bars-item">
                              <a href="#">SmartPhone &amp; Smart TV</a>
                              <span>(5)</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="col-12 col-lg-9">
                  <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
                    <a href="" className="navbar-brand d-block d-lg-none">
                      <h1 className="display-5 text-secondary m-0">
                        <i className="fas fa-shopping-bag text-white me-2" />
                        Electro
                      </h1>
                      {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button
                      className="navbar-toggler ms-auto"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarCollapse"
                    >
                      <span className="fa fa-bars fa-1x" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                      <div className="navbar-nav ms-auto py-0">
                        <a href="http://localhost:3000" className="nav-item nav-link active">
                          Home
                        </a>
                        <a href="http://localhost:3000/shop" className="nav-item nav-link">
                          Shop
                        </a>
                        <a href="single.html" className="nav-item nav-link">
                          Single Page
                        </a>
                        <div className="nav-item dropdown">
                          <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            Pages
                          </a>
                          <div className="dropdown-menu m-0">
                            <a href="bestseller.html" className="dropdown-item">
                              Bestseller
                            </a>
                            <a href="cart.html" className="dropdown-item">
                              Cart Page
                            </a>
                            <a href="cheackout.html" className="dropdown-item">
                              Cheackout
                            </a>
                            <a href="404.html" className="dropdown-item">
                              404 Page
                            </a>
                          </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link me-2">
                          Contact
                        </a>
                        <div className="nav-item dropdown d-block d-lg-none mb-3">
                          <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            All Category
                          </a>
                          <div className="dropdown-menu m-0">
                            <ul className="list-unstyled categories-bars">
                              <li>
                                <div className="categories-bars-item">
                                  <a href="#">Accessories</a>
                                  <span>(3)</span>
                                </div>
                              </li>
                              <li>
                                <div className="categories-bars-item">
                                  <a href="#">Electronics &amp; Computer</a>
                                  <span>(5)</span>
                                </div>
                              </li>
                              <li>
                                <div className="categories-bars-item">
                                  <a href="#">Laptops &amp; Desktops</a>
                                  <span>(2)</span>
                                </div>
                              </li>
                              <li>
                                <div className="categories-bars-item">
                                  <a href="#">Mobiles &amp; Tablets</a>
                                  <span>(8)</span>
                                </div>
                              </li>
                              <li>
                                <div className="categories-bars-item">
                                  <a href="#">SmartPhone &amp; Smart TV</a>
                                  <span>(5)</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <a
                        href=""
                        className="btn btn-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0"
                      >
                        <i className="fa fa-mobile-alt me-2" /> +0123 456 7890
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            {/* Navbar & Hero End */}
    </>
  );
};

export default Topbar;
