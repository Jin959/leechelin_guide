## Lee든 램지의 Lee슐랭 가이드

### Motivation

- 마포에 나오면 어떤 점심을 먹을지 생각하는 것이 과업이다.

- 이 과업으로 인한 시간 손실을 막기 위해 브라우저에게 대신 맡겨보자.

  - 아니 맡길 수 있도록 만들어보자.

### Rules

- 기본적으로 리액트를 이용한다.

- 스타일링은 CSS-in-JS 인 styled-componenets를 파일 분할하여 다뤄본다.

  - wanted clone 에서 styled-components와 css, sass를 혼용 했는데 styled-components로 통일한다.

  - 하나의 컴포넌트에 css도 쓰고 styled-components도 쓰고 했었는데 비효율적이었다.

- axios로 API를 이용해본다.

  - fetch 함수는 CORS 에러에만 reject하는 Promise를 반환한다. 디버깅 하기가 어려워진다.

  - 404 : Not Found, 500 : Internal Server Error와 같은 HTTP 에러가 발생해도 resolve하는 Promise를 반환하기 때문에 에러에 주의 해야한다.

  - 반면, axios는 모든 HTTP 에러에 대해 reject 하는 Promise를 반환하기 때문에 catch를 사용할 수 있다. 따라서 axios를 사용해본다.

- 상태관리는 무엇으로 할지 아직 정하지 않는다.

### UI/UX Flow 개요

- 3개의 페이지를 커다란 베이스로 잡고 라우팅한다.

1. 소개 페이지 Intro 컴포넌트

   - 소개 페이지를 메인으로 하고 start 버튼을 누르면 점심 추천을 시작한다.

   - 렌덤으로 API에서 이미지를 받아와 띄운다.

2. 질문 페이지 Question 컴포넌트

   - 원하는 음식이 있는지 먼저 묻기

   - 있으면

     - 바로 검색창 뷰를 띄운다.

   - 없으면

     - 한식, 양식, 중식, 일식, 분식 을 카테고리로 선택

       - 키워드를 API 검색어에 추가

     - 점심, 저녁, 커피로 카테고리 선택

       - 키워드를 API 검색어에 추가

3. 결과 페이지 Result 컴포넌트

   - 결과 페이지로이동

   - 검색을 실행하고 지도를 띄운다.


---

## 참고

- [jsconfkorea](https://2019.jsconfkorea.com/about)

- [drinktrade](https://www.drinktrade.com/customize-subscription-plan)

- [yelp](https://www.yelp.com/)