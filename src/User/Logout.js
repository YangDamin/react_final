import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const Logout = () => {

  console.log("로그아웃");

  useEffect(() => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("user_id");

    Swal.fire(
      '',
      '로그아웃',
      'success'
    )
    setTimeout(function () {
      window.location = '/';
    }, 2000)

  }, []);

  return (
    <></>
  )
}

export default Logout;

