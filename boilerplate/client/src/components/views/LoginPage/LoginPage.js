import { useDispatch } from 'react-redux';
import React, {useState} from 'react'
import { loginUser} from '../../../_actions/user_action'
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    let navigate = useNavigate();

    const dispatch = useDispatch();
    //state (react hook)
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
        //setEmail로 state를 바꿈
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 이거 없으면 버튼 누를 때마다 페이지가 리프레시 됨...
        //console.log('Email',Email)
        //console.log('Password',Password)

        let body = {
            email: Email,
            password: Password
        }
        // 서버에 보내고자 하는 값들을 state이 갖고 있음
        // 원래 서버에 보낼 때 Axios.post('/api/user')로 보내면 됐음 
        // Axios.post('/spi/users/login', body)
        // .then(response => {})
        //loginUser는 action. user_action.js
        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    navigate('/')
                    console.log("잘들어옴1")
                } else {
                    alert('Error')
                    console.log("잘들어옴2")
                }
            })
            console.log("잘들어옴")


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
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage
