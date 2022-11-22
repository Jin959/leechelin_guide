## lee든 램지's Lunch Generator

### Motivation  

- 마포에 나오면 어떤 점심을 먹을지 생각하는 것이 과업이다.  

- 이 과업으로 인한 손실을 막기 위해 기계에게 대신 맡겨보자.  

  * 아니 맡길 수 있도록 만들어보자.  

### Rules  

- 기본적으로 리액트를 이용한다.  

- 스타일링은 CSS-in-JS 인 styled-componenets를 파일 분할하여 다뤄본다.  

  * wanted clone 에서 styled-components와 css, sass를 혼용했는데 styled-components로 통일한다.  

  * 하나의 컴포넌트에 css도 쓰고 styled-components도 쓰고 했었는데 비효율적이었다.

- axios로 API를 이용해본다.  

  * fetch 함수는 CORS 에러에만 reject하는 Promise를 반환한다. 

  * 404 : Not Found, 500 : Internal Server Error와 같은 HTTP 에러가 발생해도 resolve하는 Promise를 반환하기 때문에 에러에 주의 해야한다. 

  * 반면, axios는 모든 HTTP 에러에 대해 reject 하는 Promise를 반환하기 때문에 catch를 사용할 수 있다. 따라서 axios를 사용해본다.

- 상태관리는 무엇으로 할지 아직 정하지 않는다.  

### Guide

- 네이버 검색 API 로 local 검색 입력 

- 원하는 음식이 있는지 먼저 묻기

- 없으면

  * 한식, 양식, 중식, 일식, 분식 을 누르면 다음 카테고리로 이 선택 

  * 키워드를 API 검색어에 추가

  * 점심, 저녁,  커피, 맥주, 술자리로 Tag filter

- 같은 음식 금지 3일 안에 먹은 것은 안띄운다.

- 지도에 길찾기로 띄운다. 안띄운다.?

버튼을 누르면 다시 검색 -> 에니메이션 적용

### Challenge

- [타입스크립트 적용 하기](https://react.vlpt.us/using-typescript/)

  * [TypeScript](https://typescript-kr.github.io/) - 번역