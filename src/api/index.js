import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/index");
    return response.data;
  } catch (error) {
    console.error("API 호출 실패:", error);
    return [];
  }
};
