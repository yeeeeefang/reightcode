import { useState } from 'react';
import '../../src/assets/scss/Footer.scss';


function Footer() {
    const[foomodal,setFoomodal] = useState(false);
    const foomodalOpen =()=> {setFoomodal(true);}
    const foomodalClose =()=> {setFoomodal(false);}

    return (
        <div>
            <nav className="nav1">
                <div id="nav1-1">
                    <ul className="item1">
                        <p className='pp1'>首頁</p>
                        <li className="item2"><a href="/Home"><p>關於我們</p></a></li>

                    </ul>
                    <ul className="item1">
                        <p className='pp1'>學習專區</p>
                        <li className="item2"><a href="/LearnHome"><p>學習區</p></a></li>
                        <li className="item2"><a href="/Game"><p>小試身手</p></a></li>
                        <li className="item2"><a href="/Trend"><p>探索學習趨勢</p></a></li>

                    </ul>
                    <ul className="item1">
                        <p className='pp1'>會員專區</p>
                        <li className="item2 lm"><a href="/Login">登入</a>/<a href="/Register">註冊</a></li>
                        <li className="item2"><a href="/Member"><p>我的帳號</p></a></li>

                    </ul>
                </div>
                <div className="donimg" onClick={foomodalOpen}>
                    <svg className='donimg-1' width="101" height="87" viewBox="0 0 101 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="testt" d="M65.7075 1.96708C68.3254 -0.655694 72.5698 -0.655694 75.1877 1.96708C77.8056 4.58986 77.8056 8.84222 75.1877 11.465L65.3928 21.2782C64.5015 22.1712 63.0571 22.1712 62.1658 21.2782L52.3709 11.465C49.753 8.84222 49.753 4.58986 52.3709 1.96708C54.9888 -0.655694 59.2332 -0.655694 61.8511 1.96708L62.1658 2.28236C63.0571 3.17541 64.5015 3.17541 65.3928 2.28236L65.7075 1.96708Z" fill="#EC2B2B" />
                        <path className="testt1" d="M38.964 16.3581C41.5818 13.7353 45.8262 13.7353 48.4441 16.3581C51.062 18.9808 51.062 23.2332 48.4441 25.856L38.6493 35.6692C37.7579 36.5622 36.3136 36.5622 35.4222 35.6692L25.6274 25.856C23.0095 23.2332 23.0095 18.9808 25.6274 16.3581C28.2452 13.7353 32.4896 13.7353 35.1075 16.3581L35.4222 16.6733C36.3136 17.5664 37.7579 17.5664 38.6493 16.6733L38.964 16.3581Z" fill="#EC2B2B" />
                        <path d="M7.35689 31.3985C7.35689 30.676 7.94096 30.0902 8.66146 30.0902H59.5395C60.26 30.0902 60.844 30.676 60.844 31.3985V87H13.8797C10.2773 87 7.35689 84.0713 7.35689 80.4586V31.3985Z" fill="#5F4A3A" />
                        <path d="M55.7267 45.2681C54.8307 47.9256 52.3448 49.7143 49.5475 49.7143L3.2988 49.7143C1.1028 49.7143 -0.465613 47.5819 0.182814 45.4778L4.64087 31.0122C4.8098 30.464 5.31516 30.0902 5.88726 30.0902L59.0258 30.0902C59.9186 30.0902 60.5476 30.9694 60.2617 31.8175L55.7267 45.2681Z" fill="#FFEFEF" />
                        <path d="M92.1536 31.3985C92.1536 30.676 91.5695 30.0902 90.849 30.0902H60.844C60.1235 30.0902 59.5395 30.676 59.5395 31.3985V87H85.6308C89.2332 87 92.1536 84.0713 92.1536 80.4586V31.3985Z" fill="#7A614D" />
                        <path d="M64.2942 45.1477C65.1527 47.8666 67.6688 49.7143 70.5126 49.7143H96.7705C99.0842 49.7143 100.662 47.3653 99.793 45.2149L94.0097 30.907C93.8101 30.4133 93.3319 30.0902 92.8007 30.0902L61.321 30.0902C60.4388 30.0902 59.811 30.9501 60.0773 31.7935L64.2942 45.1477Z" fill="#FFEFEF" />
                        <path d="M14.6155 69.9925C14.1563 69.9925 13.9267 69.7622 13.9267 69.3017V63.3569C13.9267 62.8964 14.1563 62.6662 14.6155 62.6662H16.3375C17.0472 62.6662 17.6699 62.7952 18.2056 63.0534C18.7414 63.3116 19.1588 63.7093 19.458 64.2466C19.7572 64.7838 19.9068 65.4781 19.9068 66.3293C19.9068 67.1666 19.7572 67.8574 19.458 68.4016C19.1588 68.9389 18.7414 69.3401 18.2056 69.6052C17.6699 69.8634 17.0472 69.9925 16.3375 69.9925H14.6155ZM15.2834 68.7365H16.2331C16.915 68.7365 17.4612 68.5412 17.8717 68.1504C18.2822 67.7597 18.4874 67.1527 18.4874 66.3293C18.4874 65.499 18.2822 64.892 17.8717 64.5082C17.4612 64.1175 16.915 63.9221 16.2331 63.9221H15.2834V68.7365Z" fill="white" />
                        <path d="M23.8343 70.1704C23.1733 70.1704 22.5819 70.0134 22.0601 69.6994C21.5382 69.3854 21.1277 68.9424 20.8286 68.3702C20.5363 67.7911 20.3902 67.1108 20.3902 66.3293C20.3902 65.5409 20.5363 64.8606 20.8286 64.2884C21.1277 63.7093 21.5382 63.2627 22.0601 62.9488C22.5819 62.6278 23.1733 62.4673 23.8343 62.4673C24.4953 62.4673 25.0832 62.6278 25.598 62.9488C26.1199 63.2627 26.5269 63.7093 26.8191 64.2884C27.1183 64.8606 27.2679 65.5409 27.2679 66.3293C27.2679 67.1108 27.1183 67.7911 26.8191 68.3702C26.5269 68.9424 26.1199 69.3854 25.598 69.6994C25.0832 70.0134 24.4953 70.1704 23.8343 70.1704ZM23.8343 68.8517C24.2517 68.8517 24.6101 68.747 24.9092 68.5377C25.2154 68.3214 25.4485 68.0248 25.6085 67.6481C25.7755 67.2713 25.859 66.8317 25.859 66.3293C25.859 65.82 25.7755 65.3769 25.6085 65.0001C25.4485 64.6233 25.2154 64.3303 24.9092 64.121C24.6101 63.9047 24.2517 63.7965 23.8343 63.7965C23.4238 63.7965 23.0654 63.9047 22.7593 64.121C22.4601 64.3303 22.2271 64.6233 22.0601 65.0001C21.8931 65.3769 21.8096 65.82 21.8096 66.3293C21.8096 66.8317 21.8931 67.2713 22.0601 67.6481C22.2271 68.0248 22.4601 68.3214 22.7593 68.5377C23.0654 68.747 23.4238 68.8517 23.8343 68.8517Z" fill="white" />
                        <path d="M28.996 69.9925C28.5438 69.9925 28.3177 69.7622 28.3177 69.3017V63.3569C28.3177 62.8964 28.5438 62.6662 28.996 62.6662H29.1421C29.49 62.6662 29.7649 62.8162 29.9666 63.1162L32.941 67.6167V63.3569C32.941 62.8964 33.1706 62.6662 33.6298 62.6662C34.0821 62.6662 34.3082 62.8964 34.3082 63.3569V69.3017C34.3082 69.7622 34.0925 69.9925 33.6611 69.9925H33.5463C33.1845 69.9925 32.9097 69.8425 32.7219 69.5424L29.6744 64.8745V69.3017C29.6744 69.7622 29.4483 69.9925 28.996 69.9925Z" fill="white" />
                        <path d="M35.8323 69.9925C35.6096 69.9925 35.4531 69.9262 35.3626 69.7936C35.2791 69.6611 35.2791 69.4796 35.3626 69.2494L37.6378 63.179C37.763 62.8371 38.01 62.6662 38.3788 62.6662H38.4727C38.8415 62.6662 39.0885 62.8371 39.2137 63.179L41.4889 69.2494C41.5724 69.4796 41.5689 69.6611 41.4784 69.7936C41.3949 69.9262 41.2384 69.9925 41.0088 69.9925H40.7896C40.4209 69.9925 40.1773 69.8146 40.0591 69.4587L39.746 68.5377H37.0638L36.7507 69.4587C36.6394 69.8146 36.3958 69.9925 36.0201 69.9925H35.8323ZM37.5021 67.2817H39.3181L38.4205 64.6233L37.5021 67.2817Z" fill="white" />
                        <path d="M43.9166 69.9925C43.4574 69.9925 43.2278 69.7622 43.2278 69.3017V63.9221H41.7667C41.3074 63.9221 41.0778 63.7128 41.0778 63.2941C41.0778 62.8755 41.3074 62.6662 41.7667 62.6662H46.0456C46.5048 62.6662 46.7344 62.8755 46.7344 63.2941C46.7344 63.7128 46.5048 63.9221 46.0456 63.9221H44.5949V69.3017C44.5949 69.7622 44.3688 69.9925 43.9166 69.9925Z" fill="white" />
                        <path d="M48.3813 69.9925C47.9221 69.9925 47.6925 69.7622 47.6925 69.3017V63.3569C47.6925 62.8964 47.9221 62.6662 48.3813 62.6662H51.9819C52.4411 62.6662 52.6707 62.8755 52.6707 63.2941C52.6707 63.7128 52.4411 63.9221 51.9819 63.9221H49.0492V65.6281H51.6688C52.128 65.6281 52.3576 65.8374 52.3576 66.2561C52.3576 66.6747 52.128 66.884 51.6688 66.884H49.0492V68.7365H52.0967C52.5559 68.7365 52.7855 68.9459 52.7855 69.3645C52.7855 69.7832 52.5559 69.9925 52.0967 69.9925H48.3813Z" fill="white" />
                    </svg>
                </div>
                <div className="foo">
                    <div id="nav1-2">
                        <h1 className="logo"><a href="./index.html">
                            {/*  SVG預設自動寬度100%  */}
                            <img className='logoimg' src="./public/images/logo.png" alt="RightCodeLOGO" title="RightCodeLOGO" />
                        </a></h1>
                        <ul className="icon">
                            <li><a className="iconfb" href="">
                                <img src="./public/images/icon_fb.svg" alt="" />
                            </a></li>
                            <li><a className="iconig" href="">
                                <img src="./public/images/icon_ig.svg" alt="" />
                            </a></li>
                        </ul>

                    </div>
                    <small className='footersamll'>Copyright © 2024 RightCode </small>
                </div>
            </nav >
            {foomodal && (
                <div className="foomodal" onClick={foomodalClose}> 
                    <div className="foomodal-content">
                        <h3>謝謝支持</h3>
                        <p>幫助我們持續帶來樂趣、創新與挑戰！</p>
                        <div className="foomodal-wrapper">
                            <img className="foomodalimg" src="/images/qrCode.svg" alt="" />
                        </div>
                        <div className="foored">
                            <h4>讓我們一起打造更好的Right Code</h4>
                            <img src="/images/icon_red.svg" alt="" />
                        </div>
                        
                    </div>
                </div>
            )}
        </div >
    )
}
export default Footer