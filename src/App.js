import React, { useState } from "react";

function App() {
  const [keyword, setKeyword] = useState(""); // 검색어 상태
  const [products, setProducts] = useState([]); // 결과 리스트

  const handleSearch = () => {
    if (!keyword.trim()) {
      alert("검색어를 입력하세요!");
      return;
    }

    fetch(`http://localhost:8080/api/products?keyword=${keyword}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("API 호출 실패:", err));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🔍 상품 검색</h1>

      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />
      <button
        onClick={handleSearch}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        검색
      </button>

      <div style={{ marginTop: "30px" }}>
        {products.length === 0 ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {products.map((p) => (
              <li key={p.id} style={{ marginBottom: "10px" }}>
                <strong>{p.name}</strong> - {p.price}원
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
