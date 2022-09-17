# 36기 2차 프로젝트 wenb

## Project

- 세계 최대 숙방 공유 서비스 에어비엔비 [Airbnb](https://www.airbnb.co.kr/)를 모티브로한 팀 프로젝트
- 선정이유
  - 반응형 사이트, 케럿셀, 아코디언, 리뷰 평점 분포 그래프, 평점 표현 시 소수 한 자리 반올림, 쿼리파라미터,Calendar 라이브러리 사용, 페이지네이션, 오더링, 다중 필터 기능,네이버 맵 API 사용, 파일 첨부 구현

---

### 개발 인원 및 기간

- 팀명: 위엔비(wenb)
- 개발기간 : 2022년 08월 29일 ~ 2022년 09월 08일 (11일)
- 개발인원 : 프론트엔드 4명, 백엔드 3명
  - FE : 김진혁, 이빛나, 임승민, 정원호
  - BE : 박근우, 이상우, 이석원

---

### 기술스택

- 프론트엔드 : <img src="https://img.shields.io/badge/JavaScript-FFCA28?style=flat-square&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React.js-58c3cc?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/CRA-58c3cc?style=flat-square&logo=Create-React-App&logoColor=white"/>
  <img src="https://img.shields.io/badge/React Router Dom-gray?style=flat-square&logo=React-Router&logoColor=F6BB43"/>
  <img src="https://img.shields.io/badge/styled components-F6BB43?style=flat-square&logo=styledcomponents&logoColor=white"/>
  <img src="https://img.shields.io/badge/eslint-000066?style=flat-square&logo=eslint&logoColor=white"/>
  <img src="https://img.shields.io/badge/prettier-00CC00?style=flat-square&logo=eslint&logoColor=white"/>

- 백엔드 : <img src="https://img.shields.io/badge/JavaScript-FFCA28?style=flat-square&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-008000?style=flat-square&logo=Node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000080?style=flat-square&logo=Express&logoColor=white"/>
  <img src="https://img.shields.io/badge/ MySQL8.0-6441a5?style=flat-square&logo=MySQL&logoColor=white"/>
  <img src="https://img.shields.io/badge/Postman-F6BB43?style=flat-square&logo=Postman&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-F6BB43?style=flat-square&logo=JWT&logoColor=white"/>
  <img src="https://img.shields.io/badge/jest-F6BB43?style=flat-square&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/aws(EC2)-F6BB43?style=flat-square&logo=amazonaws&logoColor=white"/>
  <img src="https://img.shields.io/badge/aws(vpc)-F6BB43?style=flat-square&logo=amazonaws&logoColor=white"/>
  <img src="https://img.shields.io/badge/aws(rds)-F6BB43?style=flat-square&logo=amazonaws&logoColor=white"/>
  <img src="https://img.shields.io/badge/docker-F6BB43?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/nginx-F6BB43?style=flat-square&logo=nginx&logoColor=white"/>
  <img src="https://img.shields.io/badge/CI/CD-F6BB43?style=flat-square&logo=CI/CD&logoColor=white"/>

- 협업 툴 : <img src="https://img.shields.io/badge/Notion-1c1c1c?style=flat-square&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Slack-553830?style=flat-square&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/Trello-6441a5?style=flat-square&logo=Trello&logoColor=white"/>

---

### 구현 영상

## <a href="https://youtu.be/DWaKFjUI7Ew">😎👍 구현영상</a>

---

### FE 구현 기능

|              Page               |    담당    | 구현 사항                                                                                                                                                                                                              | 구현이미지 |
| :-----------------------------: | :--------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------: |
| Kakao Social Login & Nav Filter | **임승민** | <ul><li>Kakao 소셜 로그인 구현 <li>JWT 토큰 받아서 localStorage 저장 <li> 공통 Nav bar 구현<li>숙소 정보 다중 Filter 기능 구현</ul>                                                                                    |            |
|          Main & Footer          | **이빛나** | <ul><li>Main 페이지 slick 라이브러리 사용 캐러셀 구현<li>Main Page 무한 스크롤 구현 <li>Footer 아코디언 구현</ul>                                                                                                      |            |
|              Host               | **김진혁** | <ul><li>JWT 토큰 정보 활용 User 정보 PETCH 호스트 등록<li>숙소 편의시설 정보 등록<li>Naver Map API 활용 숙소 위치 정보 마커 표시<li>React-day-picker 활용 숙소 대여 날짜 등록<li>FormData 활용 다중 이미지 업로드</ul> |            |
|             Detail              | **정원호** | <ul><li>동적 라우팅으로 Detail 페이지 구현 <li>React-Day-Picker 라이브러리 활용 숙소 예약기능 구현 <li>Naver Map API 활용 숙소 위치 마커 표시 <li> 호스트 정보 아코디언</ul>                                           |            |

---

### Host 페이지 구현 과정

- Flow
  <img src="https://user-images.githubusercontent.com/85611408/189060474-e2a718ee-7279-4280-a2ad-be96a63a2d98.JPG"/>

- Page
  - 기존 에어비앤비 디자인을 모티브로 하여 유사하게 구현하였습니다.
  - 에어비앤비
    <img src="https://user-images.githubusercontent.com/85611408/189060435-5a419736-06bf-4c0e-bbef-956adeb94f5f.JPG"/>
  - WeNB
    <img src="https://user-images.githubusercontent.com/85611408/189060380-b1bb888b-5a5b-4f3a-8a4b-642ac540656f.JPG"/>
- 다중 Image 업로드, 삭제
  <img src="https://user-images.githubusercontent.com/85611408/189060409-2aecc952-1c74-495a-99bc-f43b26073ffd.gif"/>

---

## Reference

---

- 이 프로젝트는 에어비엔비 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
