import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../pages/Main';
import Search from '../pages/component/Search';
import LoadingIndicator from '../pages/component/LoadingIndicator';
import '@testing-library/jest-dom';  // 🔄 jest-dom 확장 불러오기

// 🔄 테스트 시작
describe('Main 컴포넌트 테스트', () => {
  // ✅ 간단한 테스트: 제목이 렌더링되어야 합니다
  test('여행가고 싶을 땐, Airline 제목이 렌더링되어야 합니다', async () => {  // 🔄 `async` 추가!
    render(<Main />);
    const titleElement = await screen.findByRole('heading', { name: /여행가고 싶을 땐, Airline/i, level: 1 });  // 🔄 `h1` 찾기
    expect(titleElement).toBeInTheDocument();                                                               // 🔄 통과 조건
  });

  // ✅ 간단한 테스트: 검색 컴포넌트가 렌더링되어야 합니다
  test('Search 컴포넌트가 렌더링되어야 합니다', () => {
    render(<Main />);
    const inputElement = screen.getByText('출발지');  // 🔄 `getByText`로 변경
    expect(inputElement).toBeInTheDocument();         // 🔄 통과 조건
  });

  // ✅ 간단한 테스트: 로딩 인디케이터가 렌더링되어야 합니다
  test('로딩 상태에서 LoadingIndicator가 렌더링되어야 합니다', () => {
    render(<LoadingIndicator />);
    const loadingElement = screen.getByAltText('now loading...');
    expect(loadingElement).toBeInTheDocument();  // 🔄 로딩 이미지가 있어야 통과
  });
});
