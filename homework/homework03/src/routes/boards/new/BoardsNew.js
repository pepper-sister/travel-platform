import { useState } from 'react';
import '../../../styles/BoardsNew.css';

const BoardsNew = () => {
    const [writer, setWriter] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [writerError, setWriterError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [contentError, setContentError] = useState('');

    const [isActive, setIsActive] = useState(true);

    const onChangeWriter = (event) => {
        setWriter(event.target.value);

        if (event.target.value && password && title && content) return setIsActive(false);
        setIsActive(true);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);

        if (writer && event.target.value && title && content) return setIsActive(false);
        setIsActive(true);
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);

        if (writer && password && event.target.value && content) return setIsActive(false);
        setIsActive(true);
    };

    const onChangeContent = (event) => {
        setContent(event.target.value);

        if (writer && password && title && event.target.value) return setIsActive(false);
        setIsActive(true);
    };

    const onClickSubmit = () => {
        if (!writer) setWriterError('필수입력 사항입니다.');
        else setWriterError('');
        if (!password) setPasswordError('필수입력 사항입니다.');
        else setPasswordError('');
        if (!title) setTitleError('필수입력 사항입니다.');
        else setTitleError('');
        if (!content) setContentError('필수입력 사항입니다.');
        else setContentError('');
        if (writer && password && title && content) alert('게시글 등록이 가능한 상태입니다!');
    };

    return (
        <div className="root">
            <header className="title">게시물 등록</header>

            <main>
                <div className="row__sort__40">
                    {/* 작성자 */}
                    <div className="column__sort">
                        <div className="row__sort__4">
                            <p className="sub__title">작성자</p>
                            <p className="necessary__point">*</p>
                        </div>
                        <input
                            className="input__text"
                            type="text"
                            placeholder="작성자 명을 입력해 주세요."
                            onChange={onChangeWriter}
                        />
                        <div className="error">{writerError}</div>
                    </div>
                    {/* 비밀번호 */}
                    <div className="column__sort">
                        <div className="row__sort__4">
                            <p className="sub__title">비밀번호</p>
                            <p className="necessary__point">*</p>
                        </div>
                        <input
                            className="input__text"
                            type="password"
                            placeholder="비밀번호를 입력해 주세요."
                            onChange={onChangePassword}
                        />
                        <div className="error">{passwordError}</div>
                    </div>
                </div>
                <div className="div"></div>

                {/* 제목 */}
                <div className="column__sort">
                    <div className="row__sort__4">
                        <p className="sub__title">제목</p>
                        <p className="necessary__point">*</p>
                    </div>
                    <input
                        className="input__text"
                        type="text"
                        placeholder="제목을 입력해 주세요."
                        onChange={onChangeTitle}
                    />
                    <div className="error">{titleError}</div>
                </div>
                <div className="div"></div>

                {/* 내용 */}
                <div className="column__sort">
                    <div className="row__sort__4">
                        <p className="sub__title">내용</p>
                        <p className="necessary__point">*</p>
                    </div>
                    <textarea
                        className="textarea__text"
                        placeholder="내용을 입력해 주세요."
                        onChange={onChangeContent}
                    />
                    <div className="error">{contentError}</div>
                </div>

                {/* 주소 */}
                <div className="column__sort">
                    <p className="sub__title">주소</p>
                    <div className="row__sort__8">
                        <input className="input__number" type="text" placeholder="01234" maxLength={5} />
                        <button className="white__btn">우편번호 검색</button>
                    </div>
                    <input className="input__text" type="text" placeholder="주소를 입력해 주세요." />
                    <input className="input__text" type="text" placeholder="상세주소" />
                </div>
                <div className="div"></div>

                {/* 유튜브 링크 */}
                <div className="column__sort">
                    <p className="sub__title">유튜브 링크</p>
                    <input className="input__text" type="text" placeholder="링크를 입력해 주세요." />
                </div>
                <div className="div"></div>

                {/* 사진 첨부 */}
                <div className="column__sort">
                    <p className="sub__title">사진 첨부</p>
                    <div className="row__sort__16">
                        <div className="img__section">
                            <div className="img"></div>
                            <div className="img__upload">
                                <img className="img__plus" src="./plus.png" />
                                <p className="img__text">클릭해서 사진 업로드</p>
                            </div>
                        </div>
                        <div className="img__section">
                            <div className="img"></div>
                            <div className="img__upload">
                                <img className="img__plus" src="./plus.png" />
                                <p className="img__text">클릭해서 사진 업로드</p>
                            </div>
                        </div>
                        <div className="img__section">
                            <div className="img"></div>
                            <div className="img__upload">
                                <img className="img__plus" src="./plus.png" />
                                <p className="img__text">클릭해서 사진 업로드</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className="row__sort__16">
                    <button className="white__btn">취소</button>
                    <button className="blue__btn" disabled={isActive} onClick={onClickSubmit}>
                        등록하기
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default BoardsNew;
