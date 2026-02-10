import Image from "next/image";
import { usePurchaseDetail } from "./hook";
import styles from "./styles.module.css";

export default function PurchaseDetailUI() {
  const { onClickDeleteProduct, active, setActive, data, productImages } = usePurchaseDetail();

  return (
    <div className="body__sort">
      <div className="body column__sort gap__40">
        <div className="column__sort gap__24">
          <div className="column__sort gap__8">
            <div className="row__sort row__between column__center">
              <h1 className="f__28 w__700 l__36">{data?.fetchTravelproduct.name}</h1>
              <div className="row__sort column__center gap__16">
                <Image
                  style={{ filter: "invert(1)" }}
                  alt="delete"
                  className="click"
                  src="/images/purchase-detail/delete.png"
                  width={24}
                  height={24}
                  onClick={onClickDeleteProduct}
                />
                <Image alt="link" src="/images/purchase-detail/link.png" width={24} height={24} />
                <Image alt="location" src="/images/purchase-detail/location.png" width={24} height={24} />
                <div className={`${styles.bookmark__icon} row__sort column__center`}>
                  <Image
                    style={{ filter: "invert(1)" }}
                    alt="bookmark"
                    src="/images/purchase-detail/bookmark.png"
                    width={24}
                    height={24}
                  />
                  <p className="f__14 l__20 c__ffffff">{data?.fetchTravelproduct.pickedCount}</p>
                </div>
              </div>
            </div>
            <h2 className="c__777777">{data?.fetchTravelproduct.remarks}</h2>
            <h3 className="l__20 c__2974E5">
              {data?.fetchTravelproduct.tags?.length
                ? data?.fetchTravelproduct.tags?.map((el) => `#${el}`).join(" ")
                : "\u00A0"}
            </h3>
          </div>
          <div className="row__sort gap__24">
            <Image
              src={
                productImages[active] && productImages[active].trim() !== ""
                  ? `https://storage.googleapis.com/${productImages[active]}`
                  : `/images/purchase-detail/image${active + 1}.jpg`
              }
              alt="사진"
              width={640}
              height={480}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
            <div className={`${styles.product__img__section} column__sort gap__16`}>
              {productImages.map((el, index) => {
                return (
                  <div key={el} className={`${styles.product__detail__img} click`} onClick={() => setActive(index)}>
                    <Image
                      src={
                        el && el.trim() !== ""
                          ? `https://storage.googleapis.com/${el}`
                          : `/images/purchase-detail/image${index + 1}.jpg`
                      }
                      alt="숙소상세사진"
                      width={180}
                      height={136}
                      style={{ opacity: active === index ? 1 : 0.5, objectFit: "cover", borderRadius: "8px" }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex column__sort gap__24">
              <div className={`${styles.price__section} column__sort gap__20`}>
                <div className="column__sort gap__8">
                  <h4 className="f__24 w__700 l__32">{data?.fetchTravelproduct.price?.toLocaleString()}원</h4>
                  <ul className="column__sort gap__4">
                    <li className={`${styles.price__txt} f__14 w__400 l__20 c__5F5F5F`}>
                      숙박권은 트립트립에서 포인트 충전 후 구매하실 수 있습니다.
                    </li>
                    <li className={`${styles.price__txt} f__14 w__300 l__20 c__5F5F5F`}>
                      상세 설명에 숙박권 사용기한을 꼭 확인해 주세요.
                    </li>
                  </ul>
                </div>
                <button className="blue__btn c__ffffff">구매하기</button>
              </div>
              <div className={`${styles.seller__section} column__sort gap__12`}>
                <h4 className="f__20 w__700 l__28">판매자</h4>
                <div className="row__sort column__center gap__4">
                  <Image
                    className={styles.purchase__profile}
                    src="/images/purchase-detail/profile.jpg"
                    alt="profile"
                    width={40}
                    height={40}
                  />
                  <p className="l__20 c__333333">김상훈</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div"></div>
        <div className="column__sort gap__16">
          <h3 className="f__20 w__700 l__28 c__333333">상세 설명</h3>
          <p className="w__400 c__333333">{data?.fetchTravelproduct.contents}</p>
        </div>
        <div className="div"></div>
        <div className="column__sort gap__16">
          <h3 className="f__20 w__700 l__28 c__333333">상세 위치</h3>
          <div className={styles.product__location}></div>
        </div>
        <div className="column__sort gap__24">
          <div className="row__sort gap__8">
            <Image src="/images/purchase-detail/chat.png" alt="chat" width={24} height={24} />
            <p className="w__600">문의하기</p>
          </div>
          <div className="column__sort column__right gap__16">
            <div className={`${styles.textarea__section} width__100 column__sort`}>
              <textarea className={styles.textarea} placeholder="문의사항을 입력해 주세요." maxLength={100} />
              <p className={`${styles.textarea__count} c__ABABAB`}>/100</p>
            </div>
            <button className={`${styles.qna__btn} black__btn c__ffffff`}>문의 하기</button>
          </div>
        </div>
        <div className="row__sort row__center">
          <p className="f__14 w__400 l__20 c__777777">등록된 문의사항이 없습니다.</p>
        </div>
      </div>
    </div>
  );
}
