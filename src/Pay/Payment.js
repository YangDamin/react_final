import React, { useEffect } from 'react';
import Swal from 'sweetalert2';



const Payment = (effect, deps) => {

    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);

        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }
    }, []);

    function onClickPayment(){

        const { IMP } = window; 
        IMP.init('imp40002811'); //가맹점 식별코드

        const data = {
            pg: 'html5_kakaopay', //PG 사
            pay_method: 'card', //결제수단
            merchant_uid: `mid_${new Date().getTime()}`, //결제금액
            name: 'VIARY', //주문명
            amount: '100', //금액
            custom_data: { name: '부가정보', desc: '세부 부가정보' },
            buyer_name: '정의수', //구매자 이름
            buyer_tel: '01091289319',
            buyer_email: 'glglwhgdk123@gmail.com', //구매자 이메일
            buyer_addr: '가산디지털1로 168',
            buyer_postalcode: '08507'
        };
        IMP.request_pay(data, callback); //결제창 호출
    }

    
   const callback = (response) =>{
        const { 
            success, 
            error_msg, 
            imp_uid, 
            merchant_uid, 
            pay_method, 
            paid_amount, 
            status } = response;

        if (success) {
          // alert('결제 성공');
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'middle-',
                    showConfirmButton: false,
                    timer:2000,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                  Toast.fire({
                    icon: 'success',
                    title: '결제가 완료되었습니다.'
                    })
                  setTimeout(function () {
                    window.location = '/buy';
                  }, 1000)
        
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'middle-',
                showConfirmButton: false,
                timer:1000,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
              Toast.fire({
                icon: 'error',
                title: '결제가 취소되었습니다.'
                })
              setTimeout(function () {
                window.location = '/buy';
              }, 1000)
        }
    }

    return (
        <>
            <button style={{
                'width': '100px',
                'height': '40px',
                'font-size': '20px',
                'padding': 'auto',
                'border': 'none',
                'background': 'rgba(49, 141, 251, 1)',
                'border-radius': '5px',
                'margin-top': '10px',
                'vertical-align': 'middle',
                'font-family': 'Pretendard-Medium',
                'margin-bottom': '40px'

            }} onClick={onClickPayment}>결제하기</button>
        </>
    );
        }


export default Payment;