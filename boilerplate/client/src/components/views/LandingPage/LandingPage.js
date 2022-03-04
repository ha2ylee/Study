import React, {useEffect} from 'react'
import axios from 'axios'

function LandingPage() {
    //랜딩페이지에 들어오자마자 실행 get request
    useEffect(() => {
        axios.get('/api/hello') //서버에 보냄
        .then(response => console.log(response)) //서버에서 돌아오면 콘솔창에 받은것을 보여줌


    }, [])
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>

            <button>
                로그아웃
            </button>

        </div>
    )
}

export default LandingPage
