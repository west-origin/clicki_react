import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    // react-paginate는 0부터 시작하므로 currentPage가 1부터 들어온다면 -1 처리가 필요합니다.
    // 하지만 앞서 Main에서 currentPage를 0부터 관리하도록 수정했다면 그대로 전달하면 됩니다.

    return (
        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
            <ReactPaginate
            // 1. 기본 설정
            previousLabel={"«"}
            nextLabel={"»"}
            breakLabel={"..."}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}

            // 2. 페이지 변경 이벤트 (객체의 selected 값을 전달)
            onPageChange={(data) => onPageChange(data.selected)}
            forcePage={currentPage}

            // 3. 기존 CSS 클래스 매칭 (중요!)
            containerClassName={"pagination d-flex justify-content-center mt-5"} // 전체 감싸는 div
            pageClassName={"page-item"} // 각 숫자 버튼의 리스트 아이템
            pageLinkClassName={"rounded"} // 각 숫자 안의 a 태그 (기존 rounded 클래스)
            previousClassName={"page-item"}
            previousLinkClassName={"rounded"} // 이전 버튼 a 태그
            nextClassName={"page-item"}
            nextLinkClassName={"rounded"} // 다음 버튼 a 태그
            activeLinkClassName={"active"} // 활성화된 페이지 a 태그에 active 추가
            breakClassName={"page-item"}
            breakLinkClassName={"rounded"}

            // 추가: <a> 태그의 기본 동작(페이지 새로고침) 방지
            hrefBuilder={() => "#!"}
            />
        </div>
    );
};

export default Pagination;