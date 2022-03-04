
import { useDispatch } from 'react-redux';
import React, {useState} from 'react'
import { registerUser} from '../../../_actions/user_action'


function RegisterPage(props) {

    
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
        //setEmail로 state를 바꿈
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 이거 없으면 버튼 누를 때마다 페이지가 리프레시 됨...

        if(Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }
        let body = {
            email: Email,
            password: Password,
            name : Name
        }
        // 서버에 보내고자 하는 값들을 state이 갖고 있음
        // 원래 서버에 보낼 때 Axios.post('/api/user')로 보내면 됐음 
        // Axios.post('/spi/users/login', body)
        // .then(response => {})
        //loginUser는 action. user_action.js
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push('/login')
                } else {
                    alert('Failed to sign up')
                }
            })


    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br />
                <button type="submit">
                    회원가입
                </button>
            </form>
        </div>

    )
}

export default RegisterPage;
