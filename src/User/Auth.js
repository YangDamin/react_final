import React from 'react';
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";



const Auth = () => {

const REST_API_KEY = "04c9a760d057d6ccbc3cdb399201c2a3";
const REDIRECT_URI = "http://localhost:8080/oauth/kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


const code = new URL(window.location.href).searchParams.get("code");
const history = useNavigate();
const getToken = async () => {
  const payload = qs.stringify({
    grant_type: "authorization_code",
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: code,
  });
  try {
    // access token 가져오기
    const res = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      payload
    );
    
    // Kakao Javascript SDK 초기화
    window.Kakao.init(REST_API_KEY);
    // access token 설정
    window.Kakao.Auth.setAccessToken(res.data.access_token);
    history.replace("/profile");
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  getToken();
}, []);
return null;
};


export default Auth;