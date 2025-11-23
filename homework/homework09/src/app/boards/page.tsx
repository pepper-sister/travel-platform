import styles from "./styles.module.css";

export default function BoardsList() {
  return (
    <div className={styles.list__section}>
      <div className="column__sort gap__8">
        <div className={`${styles.list__title} row__sort row__between`}>
          <div className="row__sort gap__8">
            <p className={`${styles.list__subtitle__64} l__20 c__1C1C1C`}>번호</p>
            <p className="l__20 c__1C1C1C">제목</p>
          </div>

          <div className="row__sort gap__8">
            <p className={`${styles.list__subtitle__100} l__20 c__1C1C1C`}>작성자</p>
            <p className={`${styles.list__subtitle__100} l__20 c__1C1C1C`}>날짜</p>
          </div>
        </div>
      </div>
    </div>
  );
}
