import '../../../styles/BoardsDetail.css';
import person from '../../../assets/person.png';
import link from '../../../assets/link.png';
import location from '../../../assets/location.png';
import play from '../../../assets/play.png';
import bad from '../../../assets/bad.png';
import good from '../../../assets/good.png';
import menu from '../../../assets/menu.png';
import edit from '../../../assets/edit.png';

import beach from '../../../assets/beach.jpg';
import houseplants from '../../../assets/houseplants.jpg';

const BoardsDetail = () => {
    return (
        <div className="column__sort gap__24">
            <header className="f__28 w__700 l__36">
                살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고 쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩
                얄라리 얄라
            </header>

            <main className="column__sort gap__24">
                <div className="column__sort gap__16">
                    <div className="row__sort row__between column__center">
                        <div className="row__sort gap__4 column__center">
                            <img className="person__img" src={person} alt="person" />
                            <p className="f__14 w__300 l__20 c_5F5F5F">홍길동</p>
                        </div>
                        <p className="f__14 w__300 l__20 c__818181">2024.11.11</p>
                    </div>
                    <div className="div"></div>
                    <div className="row__sort row__end gap__8">
                        <img src={link} alt="link" />
                        <img src={location} alt="location" />
                    </div>
                </div>

                <img src={beach} width="400px" alt="beach" />

                <p className="w__400">
                    살겠노라 살겠노라. 청산에 살겠노라. <br />
                    머루랑 다래를 먹고 청산에 살겠노라. <br />
                    얄리얄리 얄랑셩 얄라리 얄라 <br />
                    <br />
                    우는구나 우는구나 새야. 자고 일어나 우는구나 새야. <br />
                    너보다 시름 많은 나도 자고 일어나 우노라. <br />
                    얄리얄리 얄라셩 얄라리 얄라 <br />
                    <br />
                    갈던 밭(사래) 갈던 밭 보았느냐. 물 아래(근처) 갈던 밭 보았느냐 <br />
                    이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐. <br />
                    얄리얄리 얄라셩 얄라리 얄라 <br />
                    <br />
                    이럭저럭 하여 낮일랑 지내 왔건만 <br />
                    올 이도 갈 이도 없는 밤일랑 또 어찌 할 것인가. <br />
                    얄리얄리 얄라셩 얄라리 얄라 <br />
                    <br />
                    어디다 던지는 돌인가 누구를 맞히려던 돌인가. <br />
                    미워할 이도 사랑할 이도 없이 맞아서 우노라. <br />
                    얄리얄리 얄라셩 얄라리 얄라 <br />
                    <br />
                    살겠노라 살겠노라. 바다에 살겠노라. <br />
                    나문재, 굴, 조개를 먹고 바다에 살겠노라. <br />
                    얄리얄리 얄라셩 얄라리 얄라 <br />
                    <br />
                    가다가 가다가 듣노라. 에정지(미상) 가다가 듣노라. <br />
                    사슴(탈 쓴 광대)이 솟대에 올라서 해금을 켜는 것을 듣노라. <br />
                    얄리얄리 얄라셩 얄라리 얄라 <br />
                    <br />
                    가다 보니 배불룩한 술독에 독한 술을 빚는구나. <br />
                    조롱박꽃 모양 누룩이 매워 (나를) 붙잡으니 내 어찌 하리이까.[1] <br />
                    얄리얄리 얄라셩 얄라리 얄라
                </p>

                <div className="houseplants row__sort row__center">
                    <img className="houseplants__img" src={houseplants} alt="houseplants" />
                    <img className="play" src={play} alt="play" />
                </div>

                <div className="row__sort row__center gap__24">
                    <div className="column__sort column__center gap__4">
                        <img src={bad} alt="bad" />
                        <p className="f__14 w__400 l__20 c_5F5F5F">24</p>
                    </div>
                    <div className="column__sort column__center gap__4">
                        <img src={good} alt="good" />
                        <p className="f__14 w__400 l__20 c__f66a6a">12</p>
                    </div>
                </div>
            </main>

            <footer className="row__sort row__center gap__24">
                <button className="white__btn row__sort column__center gap__8">
                    <img src={menu} alt="menu" />
                    <p className="f__14 w__600 l__20">목록으로</p>
                </button>
                <button className="white__btn row__sort column__center gap__8">
                    <img src={edit} alt="edit" />
                    <p className="f__14 w__600 l__20">수정하기</p>
                </button>
            </footer>
        </div>
    );
};

export default BoardsDetail;
