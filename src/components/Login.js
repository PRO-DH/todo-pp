import React from "react";
import {Grid, Button, Container, Typography, TextField} from "@mui/material";
import { API_BASE_URL } from "../config/host-config";
import { DocumentScannerOutlined, PostAdd } from "@mui/icons-material";

const Login = () => {

    // 로그인 서브밋 이벤트 핸들러
    const submitHandler = e => {

        //html 태그가 가진 기본 기능 없애기
        e.preventDefault();     // 이 코드가 있으면 a태그의 링크이동, 화면전환등을 막는다.
                                // 리액트에서 이벤트를 걸 때 a태그와 form태그의 첫줄에 넣어준다고 생각.

        //1. 이메일 입력란, 패스워드 입력란에 있는 데이터를 얻어온다.

        // 이메일 입력값
        const $email = document.getElementById('email');
        //console.log($email.value);

        // 패스워드 입력값
        const $password = document.getElementById('password');
        //console.log($password.value);

        // 서버에 로그인 요청
        fetch(`${API_BASE_URL}/auth/signin`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email : $email.value,
                password: $password.value
            })
        
        })
        // then 은 성공했을 때 실행되는 것
        
        .then(res => {
            // console.log('res code', res.status);
            return res.json();
        })
        .then(loginUserData => {
            // console.log(loginUserData);
            if (loginUserData.message){
                console.log('로그인실패');
                alert(loginUserData.message);
            }else{
                // console.log('로그인성공');
                // 로그인 성공시 받은 토큰을 로컬 스토리지에 저장
                localStorage.setItem('ACCESS_TOKEN', loginUserData.token);
                localStorage.setItem('LOGIN_USERNAME', loginUserData.username);
                //로그인 성공 시 할일 목록 보여주기
                window.location.href = '/';
            }
        })

        // 서버가 200번이 아닌 오류코드를 보낼 경우 실행할 코드 = .catch()
        .catch(err => {
            console.log('err:', err);
        })

        

    };
    
    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={submitHandler}>
                {" "}
                {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="패스워드"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            로그인
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Login;