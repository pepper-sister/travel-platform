const App = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onChangeEmail = (event) => {
        console.log(event.target); // 작동된 태그
        console.log(event.target.value); // 작동된 태그에 입력된 값
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setEmail(event.target.value);
    };

    const onClickSignup = (event) => {};

    return (
        <div className="철수의App">
            이메일: <input type="text" onChange={onChangeEmail} />
            비밀번호: <input type="password" onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    );
};
