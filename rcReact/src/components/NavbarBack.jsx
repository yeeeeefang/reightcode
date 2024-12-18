import '../../src/assets/css/Navbar.css'
import { Link } from "react-router-dom"
import Hamburger from './Hamburger'
import { useRef, useState } from 'react';

function NavbarBack() {

    const [isHamburgerVisible, setHamburgerVisible] = useState(false); // 控制 Hamburger 顯示/隱藏

    // 切換 Hamburger 顯示狀態
    const toggleHamburger = () => {
        setHamburgerVisible(!isHamburgerVisible);
    };

    // 隱藏 Hamburger（供 Hamburger 的 iconX 點擊使用）
    const hideHamburger = () => {
        setHamburgerVisible(false);
    };

    /* 切換 返回選單按鈕 */
    const changBtnRef = useRef(null)
    const changBtnMouseDown = () => {
        changBtnRef.current.src = '../public/images/navBtnB_hover.png'
        changBtnRef.current.style.width = '215px'
        changBtnRef.current.style.margin = '8px 0px 0px 8px'
    }
    const changBtnMounseUp = () => {
        changBtnRef.current.src = '../public/images/navBtnB.png'
        changBtnRef.current.style.width = '215px'
        changBtnRef.current.style.margin = '0px'
    }

    const humBtnRef = useRef(null)
    const humBtnMouseDown = () => {
        humBtnRef.current.src = '../public/images/hamBtn_hover.svg'
    }
    const humBtnMouseUp = () => {
        humBtnRef.current.src = '../public/images/hamBtn.svg'
    }

    return (
        <>
            <div>
                <div className="navBarBk">
                    <div className="navlogo">

                        {/* <Link to=''>1234</Link> Link 打了之後出不來 */}
                        <Link to='/'><img src="../public/images/logo.png" alt="" /></Link>
                    </div>
                    {/* 這邊back跟two的navbar尚未處理 剩下接完成 */}
                    <div className="navBarBk-1">
                        <div className="navlearningBtn">
                            <Link to='/LearnHome'>
                                <img src="../public/images/navBtnB.png" alt=""
                                    ref={changBtnRef}
                                    onMouseDown={changBtnMouseDown}
                                    onMouseUp={changBtnMounseUp}
                                />
                            </Link>
                        </div>
                        <div className="navhamBtn" onClick={toggleHamburger}>
                            <img src="../public/images/hamBtn.svg" alt=""
                                ref={humBtnRef}
                                onMouseDown={humBtnMouseDown}
                                onMouseUp={humBtnMouseUp}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`HumMenu ${isHamburgerVisible ? 'show' : ''} ${!isHamburgerVisible ? 'hide' : ''}`}>
                <Hamburger onClose={hideHamburger} />
            </div>
        </>
    )
}
export default NavbarBack