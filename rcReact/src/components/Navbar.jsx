import { useRef, useState } from 'react';
import '../../src/assets/css/Navbar.css'
import { Link } from "react-router-dom"
import Hamburger from './Hamburger';

function Navbar() {

    const [isHamburgerVisible, setHamburgerVisible] = useState(false); // 控制 Hamburger 顯示/隱藏

    // 切換 Hamburger 顯示狀態
    const toggleHamburger = () => {
        setHamburgerVisible(!isHamburgerVisible);
    };

    // 隱藏 Hamburger（供 Hamburger 的 iconX 點擊使用）
    const hideHamburger = () => {
        setHamburgerVisible(false);
    };


    const starLearnBtnRef = useRef(null)
    /* 按下切換圖片 */
    const navbtnMouseDown = () => {
        starLearnBtnRef.current.src = '../public/images/navBtn_hover.png';
        starLearnBtnRef.current.style.width = '215px'
        starLearnBtnRef.current.style.padding = '8px 0px 0px 8px'
    }
    /* 放開換回圖片 */
    const navbtnMouseUp = () => {
        starLearnBtnRef.current.src = '../public/images/navBtn.png';
        starLearnBtnRef.current.style.width = '220px'
        starLearnBtnRef.current.style.padding = '0px'
    }
    /* 同上 */
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
                    <div className="navBarBk-1">
                        <Link to='/LearnSelect'>
                            <div className="navlearningBtn">
                                <img src="../public/images/navBtn.png" alt=""
                                    ref={starLearnBtnRef}
                                    onMouseDown={navbtnMouseDown}
                                    onMouseUp={navbtnMouseUp}
                                />
                            </div>
                        </Link>
                        <div className="navhamBtn"  /* onClick={toggleMenu} */ onClick={toggleHamburger}>
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
export default Navbar