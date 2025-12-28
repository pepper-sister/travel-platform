import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

console.log("백엔드 프로그램을 실행합니다.");

console.log("여기서 API를 만들거예요");
// 1. API-DOCS 만들기
const 나의API독스 = `#graphql
  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    createBoard: String
  }
`;

// 2. API 만들기

// 3. API-DOCS와 API를 그룹핑한 아폴로서버 만들기

// 4. 최종 완성된 아폴로서버 실행시키기(리스닝하기 => 대기하기)

console.log("여기서 DB에 접속하고, 테이블을 만들거예요");
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.38.113",
  port: 5032,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다. 동기화 할게요!");
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다!!!");
    console.log("원인: ", error);
  });
