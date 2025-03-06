import fetch from 'node-fetch';

// 🔄 API 요청 함수 (REST API 호출로 대체)
export async function getFlight(filterBy = {}) {
  try {
    // 🔄 쿼리 파라미터 생성
    const query = new URLSearchParams(filterBy).toString();

    // 🔄 REST API 호출 (GET 요청)
    const response = await fetch(`http://localhost:4999/flight?${query}`);

    if (!response.ok) {
      throw new Error("API 요청 실패!");
    }

    // 🔄 JSON 형식으로 변환
    const data = await response.json();
    return data;  // 🔄 받은 데이터 반환
  } catch (error) {
    console.error("API 요청 에러:", error);
    return [];  // 🔄 에러 시 빈 배열 반환
  }
}
