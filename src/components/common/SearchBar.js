import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function SearchBar() {

    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("전체");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        navigate("/shop", {
            state: {
                keyword: keyword,
                category: category
            }
        });
    };
    return (
        <>
            <Helmet>
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </Helmet>

            <div className="col-md-4 col-lg-6 text-center">
                <div className="position-relative ps-4">
                    <form onSubmit={handleSearch} className="d-flex border rounded-pill">
                        <input
                            className="form-control border-0 rounded-pill w-100 py-3"
                            type="text"
                            /*data-bs-target="#dropdownToggle123"*/
                            placeholder="찾고 싶은 상품을 검색해 보세요!"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />

                        <select
                            className="form-select text-dark border-0 border-start rounded-0 p-3"
                            style={{width: 200}}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="All Category">전체</option>
                            <option value="Pest Control-2">패션의류/잡화</option>
                            <option value="Pest Control-3">뷰티</option>
                            <option value="Pest Control-4">출산/유아동</option>
                            <option value="Pest Control-5">식품</option>
                            <option value="Pest Control-6">주방용품</option>
                            <option value="Pest Control-7">생활용품</option>
                            <option value="Pest Control-8">홈인테리어</option>
                            <option value="Pest Control-9">가전디지털</option>
                            <option value="Pest Control-10">스포츠/레저</option>
                            <option value="Pest Control-5">자동차용품</option>
                            <option value="Pest Control-5">도서/음반/DVD</option>
                            <option value="Pest Control-5">완구/취미</option>
                            <option value="Pest Control-5">문구/오피스</option>
                            <option value="Pest Control-5">반려동물용품</option>
                            <option value="Pest Control-5">헬스/건강식품</option>
                        </select>
                        <button
                            type="submit"
                            onClick={handleSearch}
                            className="btn btn-primary rounded-pill py-3 px-5"
                            style={{border: 0}}
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
}
export default SearchBar;