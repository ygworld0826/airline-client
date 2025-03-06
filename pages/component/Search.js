import { useState } from 'react';

function Search({ onSearch }) {
  const [textDestination, setTextDestination] = useState('');

  const handleChange = (e) => {
    setTextDestination(e.target.value.toUpperCase());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    if (!['CJU', 'BKK', 'PUS'].includes(textDestination)) {
      alert('CJU, BKK, PUS 중 하나를 입력하세요!');
      return;
    }

    console.log('검색 버튼을 누르거나, 엔터를 치면 search 함수가 실행됩니다');
    if (onSearch) {
      onSearch({
        departure: 'ICN',
        destination: textDestination,
      });
    }
  };

  return (
    <fieldset>
      <legend>공항 코드를 입력하고, 검색하세요</legend>
      <span>출발지</span>
      <input
        id="input-departure"
        type="text"
        disabled
        value="ICN"
        placeholder="출발지"   // 🔄 `placeholder` 추가!
      />
      <span>도착지</span>
      <input
        id="input-destination"
        type="text"
        value={textDestination}
        onChange={handleChange}
        placeholder="CJU, BKK, PUS 중 하나를 입력하세요"
        onKeyUp={handleKeyPress}
      />
      <button id="search-btn" onClick={handleSearchClick}>
        검색
      </button>
    </fieldset>
  );
}

export default Search;
