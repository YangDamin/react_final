import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark pt-5 mt-lg-5 text-white">
            <div class="container" id="footer_container">
                <div class="row">
                    <div class=" me-auto py-1"> <a href="#" class="d-inline-block fw-bold h2 link-light mb-4 text-decoration-none text-uppercase" target="_pg_blank">VIARY</a>
                        <p>(주)VIARY</p>
                        <p>서울시 금천구 가산디지털1로 168, 우림라이온스밸리 A동 한가람IT전문교육센터</p>
                        <div class="mb-4"> <a href="#" class="link-light text-decoration-none">+1 1544-0000</a> <br /> <a href="#" class="link-light text-decoration-none">hello@VIARY.com</a>
                        </div>
                        {/* <div class="d-inline-flex flex-wrap"> 
                            <a href="https://github.com/YangDamin/react_final.git" class="link-light p-1" target="_blank">
                                <i class="bi bi-github" style={{ "fontSize": "1.5rem", "paddingRight":"5px"}}></i>
                            </a>
                        </div> */}
                        <div class="d-inline-flex flex-wrap"> 
                            <a href="#" class="link-light p-1">
                                <i class="bi bi-youtube" style={{ "fontSize": "1.5rem" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="pb-3 pt-3 text-center">
                    <hr class="border-light mt-0" />
                    <p class="mb-0">Copyright &copy; 2022 VIARY</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
