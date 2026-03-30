# 🛣️ 여행 플랫폼 프로젝트

> 사용자 커뮤니티와 숙박 예약 시스템이 결합된 통합 여행 플랫폼<br/>
> Next.js App Router 기반의 웹 애플리케이션<br/>
> TypeScript와 Zod를 활용한 데이터 무결성 확보<br/>
> 효율적인 데이터 통신을 위한 Apollo Client(GraphQL) 및 성능 최적화 적용

## 📷 프로젝트 소개

### 🗂️ 트립토크

<img width="600" alt="트립토크" src="https://github.com/user-attachments/assets/4c7ef449-14cc-47fa-bf31-0853c0d9810d" />

- **Next.js App Router**를 활용하여 서버/클라이언트 컴포넌트를 분리하고 렌더링 성능 최적화
- **디바운싱(Debouncing)** 기반 검색 기능을 통해 불필요한 네트워크 비용을 90% 이상 절감
- 여행 정보 공유를 위한 인터랙티브 커뮤니티 구현

---

### 📋 트립토크 - 게시물 등록/수정

<img width="600" alt="게시물등록" src="https://github.com/user-attachments/assets/b8a4fcc3-7580-4c61-99cd-8124bd4a822b" />

- **React Hook Form**을 활용해 리렌더링 성능 최적화
- 이미지 업로드 시 즉각적인 Preview 기능을 제공하여 사용자 경험(UX) 개선

---

### 💬 트립토크 - 게시물 상세/댓글

<img width="600" alt="게시물상세" src="https://github.com/user-attachments/assets/09bff985-ab5b-45f9-9199-a2163f8d5841" />

- **Apollo Client**를 통해 상세 데이터 및 댓글 리스트를 선별적으로 호출
- 비정형 API 응답 데이터를 프론트엔드 규격에 맞게 정제하여 안정적인 UI 렌더링
- 캐시 활용으로 데이터 로딩 최소화 및 실시간 상태 업데이트 반영

---

### 🏷️ 숙박권 구매 - 등록

<img width="600" alt="숙박권구매" src="https://github.com/user-attachments/assets/bbc6315d-b6a5-466e-b402-e60b66d27c93" />
<img width="600" alt="숙박권등록" src="https://github.com/user-attachments/assets/c850b5ca-6805-4182-974f-7222e3eca43c" />

- 다양한 숙박 상품 정보를 카드 형태의 UI로 시각화 및 필터링 기능 제공
- 주소 검색 및 위치 데이터 연동을 통해 판매자 등록 상품 정보의 정확도 향상

---

### 💳 숙박권 구매 - 숙박권 상세/결제

<img width="600" alt="숙박권상세" src="https://github.com/user-attachments/assets/de31df87-038e-4980-84c7-d0c4f3387ed8" />

- 숙박 시설 상세 정보 및 이용 수칙 안내
- 결제 API 연동을 통한 실시간 상품 구매 프로세스 구축

---

### 📄 마이페이지

<img width="600" alt="마이페이지" src="https://github.com/user-attachments/assets/a8ecc306-eae1-484c-9d6c-e0771e513285" />

- 거래 내역, 포인트 현황 등을 한눈에 확인 가능한 대시보드
- 비밀번호 변경 기능 제공

---

### 🪧 로그인/회원가입

<img width="600" alt="회원가입" src="https://github.com/user-attachments/assets/0cf75800-5e82-47fb-8ce9-b07459e0e1fa" />

- JWT 기반의 보안 로그인 및 회원가입 로직 구현
- **Zod & React Hook Form**을 결합한 데이터 입력 검증 체계 구축

---

### 🛠️ 기술 스택

- **Next.js (App Router)**: SSR/CSR 최적화 및 고성능 라우팅
- **TypeScript**: 타입 지정을 통한 코드 품질 관리
- **Apollo Client (GraphQL)**: 선언적 데이터 요청 및 캐싱
- **React Hook Form & Zod**: 스키마 기반 데이터 검증

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Apollo GraphQL](https://img.shields.io/badge/Apollo%20GraphQL-311C87?style=for-the-badge&logo=apollographql&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)

</div>

---

### 💡 배운점

- **프레임워크 학습**: Next.js App Router의 RSC/RCC 구조를 이해하고 TTI 단축 등 실제 성능 개선에 적용
- **데이터 관리**: Zod와 TypeScript를 결합해 프론트엔드 측면에서 데이터 무결성 확보
- **네트워크 최적화**: 디바운싱 및 GraphQL 최적화 호출을 통해 불필요한 리소스 낭비를 줄이는 설계
