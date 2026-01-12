import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Topbar from "../components/layout/Topbar"
import { useLocation } from "react-router-dom";
import axios from "axios";
import Pagination from "react-js-pagination";
import "./Paging.css";

function Main() {
    const location = useLocation();

    // 1. SearchBar에서 전달받은 검색 조건 (없으면 기본값 사용)
    const { keyword, category } = location.state || { keyword: "", category: "전체" };

    // 2. 상태 관리
    const [products, setProducts] = useState([]);      // 데이터 리스트
    const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지
    const [totalElements, setTotalElements] = useState(0); // 전체 데이터 개수

    const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수
    const BASE_URL = "http://localhost:8080";

    // 3. 서버에서 데이터를 가져오는 함수 (useCallback으로 최적화)
    const fetchProducts = useCallback(async (pageNumber) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/search`, {
                params: {
                    keyword: keyword,
                    category: category,
                    page: pageNumber - 1, // 서버(Spring)가 0부터 시작한다면 -1
                    size: itemsPerPage
                }
            });

            // 서버 응답 구조가 Page 객체일 경우 (content, totalElements 포함)
            setProducts(response.data.content || []);
            setTotalElements(response.data.totalElements || 0);
        } catch (error) {
            console.error("데이터 로드 실패:", error);
        }
    }, [keyword, category]);

    // 4. 페이지가 로드되거나 검색 조건이 바뀔 때 실행
    useEffect(() => {
        setCurrentPage(1); // 검색 조건이 바뀌면 1페이지로 리셋
        fetchProducts(1);
    }, [keyword, category, fetchProducts]);

    // 5. 페이지 변경 핸들러
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        fetchProducts(pageNumber); // 변경된 페이지의 데이터 요청
        window.scrollTo(0, 0);      // 페이지 이동 시 상단으로 스크롤
    };

  return (
<>
    <Helmet>
        <meta charset="utf-8"/>
            <title>클리키가 추천하는 특가</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <meta content="" name="keywords"/>
            <meta content="" name="description"/>

            {/* Google Web Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
                rel="stylesheet"/>

            {/* Icon Font Stylesheet */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>

            {/* Libraries Stylesheet */}
            <link href="lib/animate/animate.min.css" rel="stylesheet"/>
            <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>


            {/* Customized Bootstrap Stylesheet */}
            <link href="css/bootstrap.min.css" rel="stylesheet"/>

            {/* Template Stylesheet */}
            <link href="css/style.css" rel="stylesheet"/>
    </Helmet>

    <Topbar/>
    {/* Single Page Header start */}
    <div className="container-fluid page-header py-5">
      <h1
        className="text-center text-white display-6 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        Shop Page
      </h1>
      <ol
        className="breadcrumb justify-content-center mb-0 wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-white">Shop</li>
      </ol>
    </div>
    {/* Single Page Header End */}
    {/* Searvices Start */}
    <div className="container-fluid px-0">
      <div className="row g-0">
        <div
          className="col-6 col-md-4 col-lg-2 border-start border-end wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="p-4">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-sync-alt fa-2x text-primary" />
              <div className="ms-4">
                <h6 className="text-uppercase mb-2">Free Return</h6>
                <p className="mb-0">30 days money back guarantee!</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="p-4">
            <div className="d-flex align-items-center">
              <i className="fab fa-telegram-plane fa-2x text-primary" />
              <div className="ms-4">
                <h6 className="text-uppercase mb-2">Free Shipping</h6>
                <p className="mb-0">Free shipping on all order</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="p-4">
            <div className="d-flex align-items-center">
              <i className="fas fa-life-ring fa-2x text-primary" />
              <div className="ms-4">
                <h6 className="text-uppercase mb-2">Support 24/7</h6>
                <p className="mb-0">We support online 24 hrs a day</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
          data-wow-delay="0.4s"
        >
          <div className="p-4">
            <div className="d-flex align-items-center">
              <i className="fas fa-credit-card fa-2x text-primary" />
              <div className="ms-4">
                <h6 className="text-uppercase mb-2">Receive Gift Card</h6>
                <p className="mb-0">Recieve gift all over oder $50</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="p-4">
            <div className="d-flex align-items-center">
              <i className="fas fa-lock fa-2x text-primary" />
              <div className="ms-4">
                <h6 className="text-uppercase mb-2">Secure Payment</h6>
                <p className="mb-0">We Value Your Security</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <div className="p-4">
            <div className="d-flex align-items-center">
              <i className="fas fa-blog fa-2x text-primary" />
              <div className="ms-4">
                <h6 className="text-uppercase mb-2">Online Service</h6>
                <p className="mb-0">Free return products in 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Searvices End */}
    {/* Products Offer Start */}
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <a
              href="#"
              className="d-flex align-items-center justify-content-between border bg-white rounded p-4"
            >
              <div>
                <p className="text-muted mb-3">Find The Best Camera for You!</p>
                <h3 className="text-primary">Smart Camera</h3>
                <h1 className="display-3 text-secondary mb-0">
                  40% <span className="text-primary fw-normal">Off</span>
                </h1>
              </div>
              <img src="img/product-1.png" className="img-fluid" alt="" />
            </a>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
            <a
              href="#"
              className="d-flex align-items-center justify-content-between border bg-white rounded p-4"
            >
              <div>
                <p className="text-muted mb-3">Find The Best Whatches for You!</p>
                <h3 className="text-primary">Smart Whatch</h3>
                <h1 className="display-3 text-secondary mb-0">
                  20% <span className="text-primary fw-normal">Off</span>
                </h1>
              </div>
              <img src="img/product-2.png" className="img-fluid" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Products Offer End */}
    {/* Shop Page Start */}
    <div className="container-fluid shop py-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="product-categories mb-4">
              <h4>Products Categories</h4>
              <ul className="list-unstyled">
                <li>
                  <div className="categories-item">
                    <a href="#" className="text-dark">
                      <i className="fas fa-apple-alt text-secondary me-2" />
                      Accessories
                    </a>
                    <span>(3)</span>
                  </div>
                </li>
                <li>
                  <div className="categories-item">
                    <a href="#" className="text-dark">
                      <i className="fas fa-apple-alt text-secondary me-2" />
                      Electronics &amp; Computer
                    </a>
                    <span>(5)</span>
                  </div>
                </li>
                <li>
                  <div className="categories-item">
                    <a href="#" className="text-dark">
                      <i className="fas fa-apple-alt text-secondary me-2" />
                      Laptops &amp; Desktops
                    </a>
                    <span>(2)</span>
                  </div>
                </li>
                <li>
                  <div className="categories-item">
                    <a href="#" className="text-dark">
                      <i className="fas fa-apple-alt text-secondary me-2" />
                      Mobiles &amp; Tablets
                    </a>
                    <span>(8)</span>
                  </div>
                </li>
                <li>
                  <div className="categories-item">
                    <a href="#" className="text-dark">
                      <i className="fas fa-apple-alt text-secondary me-2" />
                      SmartPhone &amp; Smart TV
                    </a>
                    <span>(5)</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="price mb-4">
              <h4 className="mb-2">Price</h4>
              <input
                type="range"
                className="form-range w-100"
                id="rangeInput"
                name="rangeInput"
                min={0}
                max={500}
                defaultValue={0}
                oninput="amount.value=rangeInput.value"
              />
              <output
                id="amount"
                name="amount"
                min-velue={0}
                max-value={500}
                htmlFor="rangeInput"
              >
                0
              </output>
              <div className="" />
            </div>
            <div className="product-color mb-3">
              <h4>Select By Color</h4>
              <ul className="list-unstyled">
                <li>
                  <div className="product-color-item">
                    <a href="#" className="text-dark">
                      <i className="fas fa-apple-alt text-secondary me-2" />
                      Gold
                    </a>
                    <span>(1)</span>
                  </div>
                </li>
                <li>
                  <div className="product-color-item">
                    <a href="#" className="text-dark">
                      <i className="fas fa-apple-alt text-secondary me-2" />
                      Green
                    </a>
                    <span>(1)</span>
                  </div>
                </li>
                <li>
                  <div className="product-color-item">
                    <a href="#" className="text-dark">
                      <i className="fas fa-apple-alt text-secondary me-2" />
                      White
                    </a>
                    <span>(1)</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="additional-product mb-4">
              <h4>Additional Products</h4>
              <div className="additional-product-item">
                <input
                  type="radio"
                  className="me-2"
                  id="Categories-1"
                  name="Categories-1"
                  defaultValue="Beverages"
                />
                <label htmlFor="Categories-1" className="text-dark">
                  {" "}
                  Accessories
                </label>
              </div>
              <div className="additional-product-item">
                <input
                  type="radio"
                  className="me-2"
                  id="Categories-2"
                  name="Categories-1"
                  defaultValue="Beverages"
                />
                <label htmlFor="Categories-2" className="text-dark">
                  {" "}
                  Electronics &amp; Computer
                </label>
              </div>
              <div className="additional-product-item">
                <input
                  type="radio"
                  className="me-2"
                  id="Categories-3"
                  name="Categories-1"
                  defaultValue="Beverages"
                />
                <label htmlFor="Categories-3" className="text-dark">
                  {" "}
                  Laptops &amp; Desktops
                </label>
              </div>
              <div className="additional-product-item">
                <input
                  type="radio"
                  className="me-2"
                  id="Categories-4"
                  name="Categories-1"
                  defaultValue="Beverages"
                />
                <label htmlFor="Categories-4" className="text-dark">
                  {" "}
                  Mobiles &amp; Tablets
                </label>
              </div>
              <div className="additional-product-item">
                <input
                  type="radio"
                  className="me-2"
                  id="Categories-5"
                  name="Categories-1"
                  defaultValue="Beverages"
                />
                <label htmlFor="Categories-5" className="text-dark">
                  {" "}
                  SmartPhone &amp; Smart TV
                </label>
              </div>
            </div>
            <div className="featured-product mb-4">
              <h4 className="mb-3">Featured products</h4>
              <div className="featured-product-item">
                <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                  <img
                    src="img/product-3.png"
                    className="img-fluid rounded"
                    alt="Image"
                  />
                </div>
                <div>
                  <h6 className="mb-2">SmartPhone</h6>
                  <div className="d-flex mb-2">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="d-flex mb-2">
                    <h5 className="fw-bold me-2">2.99 $</h5>
                    <h5 className="text-danger text-decoration-line-through">
                      4.11 $
                    </h5>
                  </div>
                </div>
              </div>
              <div className="featured-product-item">
                <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                  <img
                    src="img/product-4.png"
                    className="img-fluid rounded"
                    alt="Image"
                  />
                </div>
                <div>
                  <h6 className="mb-2">Smart Camera</h6>
                  <div className="d-flex mb-2">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="d-flex mb-2">
                    <h5 className="fw-bold me-2">2.99 $</h5>
                    <h5 className="text-danger text-decoration-line-through">
                      4.11 $
                    </h5>
                  </div>
                </div>
              </div>
              <div className="featured-product-item">
                <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                  <img
                    src="img/product-5.png"
                    className="img-fluid rounded"
                    alt="Image"
                  />
                </div>
                <div>
                  <h6 className="mb-2">Camera Leance</h6>
                  <div className="d-flex mb-2">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="d-flex mb-2">
                    <h5 className="fw-bold me-2">2.99 $</h5>
                    <h5 className="text-danger text-decoration-line-through">
                      4.11 $
                    </h5>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center my-4">
                <a
                  href="#"
                  className="btn btn-primary px-4 py-3 rounded-pill w-100"
                >
                  Vew More
                </a>
              </div>
            </div>
            <a href="#"></a>
            <div className="position-relative">
              <a href="#">
                <img
                  src="img/product-banner-2.jpg"
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
              </a>
              <div
                className="text-center position-absolute d-flex flex-column align-items-center justify-content-center rounded p-4"
                style={{
                  width: "100%",
                  height: "100%",
                  top: 0,
                  right: 0,
                  background: "rgba(242, 139, 0, 0.3)"
                }}
              >
                <a href="#">
                  <h5 className="display-6 text-primary">세일 중</h5>
                  <h4 className="text-secondary">최대 50% 할인</h4>
                </a>
                <a href="#" className="btn btn-primary rounded-pill px-4">
                  쇼핑하러 가기
                </a>
              </div>
            </div>
            <div className="product-tags py-4">
              <h4 className="mb-3">PRODUCT TAGS</h4>
              <div className="product-tags-items bg-light rounded p-3">
                <a href="#" className="border rounded py-1 px-2 mb-2">
                  New
                </a>
                <a href="#" className="border rounded py-1 px-2 mb-2">
                  brand
                </a>
                <a href="#" className="border rounded py-1 px-2 mb-2">
                  black
                </a>
                <a href="#" className="border rounded py-1 px-2 mb-2">
                  white
                </a>
                <a href="#" className="border rounded py-1 px-2 mb-2">
                  tablats
                </a>
                <a href="#" className="border rounded py-1 px-2 mb-2">
                  phone
                </a>
                <a href="#" className="border rounded py-1 px-2 mb-2">
                  camera
                </a>
                <a href="#" className="border rounded py-1 px-2 mb-2">
                  drone
                </a>
                <a href="#" className="border rounded py-1 px-2 mb-2">
                  talevision
                </a>
                <a href="#" className="border rounded py-1 px-2 mb-2">
                  slaes
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded mb-4 position-relative">
              <img
                src="img/product-banner-3.jpg"
                className="img-fluid rounded w-100"
                style={{ height: 250 }}
                alt="Image"
              />
              <div
                className="position-absolute rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{
                  width: "100%",
                  height: 250,
                  top: 0,
                  left: 0,
                  background: "rgba(242, 139, 0, 0.3)"
                }}
              >
                <h4 className="display-5 text-primary">세일 중</h4>
                <h3 className="display-4 text-white mb-4">최대 50% 할인</h3>
                <a href="#" className="btn btn-primary rounded-pill">
                  쇼핑하러 가기
                </a>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-xl-7">
                <div className="input-group w-100 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
              <div className="col-xl-3 text-end">
                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between">
                  <label htmlFor="electronics">Sort By:</label>
                  <select
                    id="electronics"
                    name="electronicslist"
                    className="border-0 form-select-sm bg-light me-3"
                    form="electronicsform"
                  >
                    <option value="volvo">Default Sorting</option>
                    <option value="volv">Nothing</option>
                    <option value="sab">Popularity</option>
                    <option value="saab">Newness</option>
                    <option value="opel">Average Rating</option>
                    <option value="audio">Low to high</option>
                    <option value="audi">High to low</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-xl-2">
                <ul className="nav nav-pills d-inline-flex text-center py-2 px-2 rounded bg-light mb-4">
                  <li className="nav-item me-4">
                    <a className="bg-light" data-bs-toggle="pill" href="#tab-5">
                      <i className="fas fa-th fa-3x text-primary" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="bg-light" data-bs-toggle="pill" href="#tab-6">
                      <i className="fas fa-bars fa-3x text-primary" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-5" className="tab-pane fade show p-0 active">
                <div className="row g-4 product">
                  {products.slice(0, 9).map((item, idx) => (
                      <div className="col-lg-4" key={idx}>
                        <div
                          className="product-item rounded wow fadeInUp"
                          data-wow-delay="0.1s"
                        >
                          <div className="product-item-inner border rounded">
                            <div className="product-item-inner-item">
                              <img
                                src= {`${BASE_URL}${item.imagePath}`}
                                className="img-fluid w-100 rounded-top"
                                alt={item.prdNm}
                              />
                              <div className="product-new">New</div>
                              <div className="product-details">
                                <a href="#">
                                  <i className="fa fa-eye fa-1x" />
                                </a>
                              </div>
                            </div>
                            <div className="text-center rounded-bottom p-4">
                              <a href="#" className="d-block mb-2">
                                {item.ctgrNm}
                              </a>
                              <a href="#" className="d-block h4">
                                {item.prdNm} <br />
                              </a>
                              <del className="me-2 fs-5">{item.prdPrc}원</del>
                              <span className="text-primary fs-5">{(item.prdPrc * (1 - item.prdSl / 100)).toLocaleString()}원</span>
                            </div>
                          </div>
                          <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                            <a
                              href="#"
                              className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"
                            >
                              <i className="fas fa-shopping-cart me-2" /> 장바구니 담기
                            </a>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex">
                                <i className="fas fa-star text-primary" />
                                <i className="fas fa-star text-primary" />
                                <i className="fas fa-star text-primary" />
                                <i className="fas fa-star text-primary" />
                                <i className="fas fa-star" />
                              </div>
                              <div className="d-flex">
                                <a
                                  href="#"
                                  className="text-primary d-flex align-items-center justify-content-center me-3"
                                >
                                  <span className="rounded-circle btn-sm-square border">
                                    <i className="fas fa-random" />
                                  </span>
                                </a>
                                <a
                                  href="#"
                                  className="text-primary d-flex align-items-center justify-content-center me-0"
                                >
                                  <span className="rounded-circle btn-sm-square border">
                                    <i className="fas fa-heart" />
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Pagination
                      totalPages={6}
                      currentPage={currentPage}
                      onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
              </div>
              <div id="tab-6" className="products tab-pane fade show p-0">
                <div className="row g-4 products-mini">
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-3.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-4.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-5.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-6.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-7.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-8.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-9.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-12.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-13.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-14.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-15.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="products-mini-item border">
                      <div className="row g-0">
                        <div className="col-5">
                          <div className="products-mini-img border-end h-100">
                            <img
                              src="img/product-16.png"
                              className="img-fluid w-100 h-100"
                              alt="Image"
                            />
                            <div className="products-mini-icon rounded-circle bg-primary">
                              <a href="#">
                                <i className="fa fa-eye fa-1x text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-7">
                          <div className="products-mini-content p-3">
                            <a href="#" className="d-block mb-2">
                              SmartPhone
                            </a>
                            <a href="#" className="d-block h4">
                              Apple iPad Mini <br /> G2356
                            </a>
                            <del className="me-2 fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="products-mini-add border p-3">
                        <a
                          href="#"
                          className="btn btn-primary border-secondary rounded-pill py-2 px-4"
                        >
                          <i className="fas fa-shopping-cart me-2" /> Add To Cart
                        </a>
                        <div className="d-flex">
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-3"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-random" />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="text-primary d-flex align-items-center justify-content-center me-0"
                          >
                            <span className="rounded-circle btn-sm-square border">
                              <i className="fas fa-heart" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Shop Page End */}
    {/* Product Banner Start */}
    <div className="container-fluid py-5">
      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <a href="#"></a>
            <div className="bg-primary rounded position-relative">
              <a href="#">
                <img
                  src="img/product-banner.jpg"
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </a>
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                style={{ background: "rgba(255, 255, 255, 0.5)" }}
              >
                <a href="#">
                  <h3 className="display-5 text-primary">
                    EOS Rebel <br /> <span>T7i Kit</span>
                  </h3>
                  <p className="fs-4 text-muted">$899.99</p>
                </a>
                <a
                  href="#"
                  className="btn btn-primary rounded-pill align-self-start py-2 px-4"
                >
                  쇼핑하러 가기
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
            <a href="#"></a>
            <div className="text-center bg-primary rounded position-relative">
              <a href="#">
                <img
                  src="img/product-banner-2.jpg"
                  className="img-fluid w-100"
                  alt=""
                />
              </a>
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                style={{ background: "rgba(242, 139, 0, 0.5)" }}
              >
                <a href="#">
                  <h2 className="display-2 text-secondary">세일 중</h2>
                  <h4 className="display-5 text-white mb-4">최대 50% 할인</h4>
                </a>
                <a
                  href="#"
                  className="btn btn-secondary rounded-pill align-self-center py-2 px-4"
                >
                  쇼핑하러 가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product Banner End */}
    {/* Footer Start */}
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div
          className="row g-4 rounded mb-5"
          style={{ background: "rgba(255, 255, 255, .03)" }}
        >
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="rounded p-4">
              <div
                className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                style={{ width: 70, height: 70 }}
              >
                <i className="fas fa-map-marker-alt fa-2x text-primary" />
              </div>
              <div>
                <h4 className="text-white">Address</h4>
                <p className="mb-2">123 Street New York.USA</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="rounded p-4">
              <div
                className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                style={{ width: 70, height: 70 }}
              >
                <i className="fas fa-envelope fa-2x text-primary" />
              </div>
              <div>
                <h4 className="text-white">Mail Us</h4>
                <p className="mb-2">info@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="rounded p-4">
              <div
                className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                style={{ width: 70, height: 70 }}
              >
                <i className="fa fa-phone-alt fa-2x text-primary" />
              </div>
              <div>
                <h4 className="text-white">Telephone</h4>
                <p className="mb-2">(+012) 3456 7890</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="rounded p-4">
              <div
                className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                style={{ width: 70, height: 70 }}
              >
                <i className="fab fa-firefox-browser fa-2x text-primary" />
              </div>
              <div>
                <h4 className="text-white">Yoursite@ex.com</h4>
                <p className="mb-2">(+012) 3456 7890</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <div className="footer-item">
                <h4 className="text-primary mb-4">Newsletter</h4>
                <p className="text-white mb-3">
                  Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit consectetur
                  adipiscing elit.
                </p>
                <div className="position-relative mx-auto rounded-pill">
                  <input
                    className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Customer Service</h4>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Contact Us
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Returns
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Order History
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Site Map
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Testimonials
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> My Account
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Unsubscribe Notification
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Information</h4>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> About Us
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Delivery infomation
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Privacy Policy
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Terms &amp; Conditions
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Warranty
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> FAQ
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Seller Login
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Extras</h4>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Brands
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Gift Vouchers
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Affiliates
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Wishlist
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Order History
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Track Your Order
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2" /> Track Your Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
    {/* Copyright Start */}
    <div className="container-fluid copyright py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-start mb-md-0">
            <span className="text-white">
              <a href="#" className="border-bottom text-white">
                <i className="fas fa-copyright text-light me-2" />
                Your Site Name
              </a>
              , All right reserved.
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end text-white">
            {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
            {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
            {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
            Designed By{" "}
            <a className="border-bottom text-white" href="https://htmlcodex.com">
              HTML Codex
            </a>
            . Distributed By{" "}
            <a className="border-bottom text-white" href="https://themewagon.com">
              ThemeWagon
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Copyright End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-primary btn-lg-square back-to-top">
      <i className="fa fa-arrow-up" />
    </a>
    {/* JavaScript Libraries */}
    {/* Template Javascript */}
</>
);
}

export default Main;