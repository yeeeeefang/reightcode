import { Link} from 'react-router-dom'
import '../assets/css/Hamburger.css'


function Hamburger({ onClose }) {
    return ( 
        <>
            <section id="Hamburger">
                <div className="Ham-Bk-1">
                    <Link to='/Login'>
                        <p>會員登入</p>
                    </Link>
                    <Link to='/Register'>
                        <p>註冊新會員</p>
                    </Link>
                    <div className="iconX" onClick={onClose}>
                            <span className="bar"> </span>
                            <span className="bar"> </span>
                    </div>
                </div>
                <div className="barLink">
                    <div className="bar-Content">
                        <img src="../public/images/icon_greenA.svg" alt="" />
                        <p>關於我們</p>
                        <img src="../public/images/icon_greenA.svg" alt="" />
                    </div>
                    <Link to='/Member'>
                        <div className="bar-Content">
                            <img src="../public/images/icon_greenA.svg" alt="" />
                            <p>會員中心</p>
                            <img src="../public/images/icon_greenA.svg" alt="" />
                        </div>
                    </Link>
                    <Link to='/LearnSelect'>
                        <div className="bar-Content">
                            <img src="../public/images/icon_greenA.svg" alt="" />
                            <p>學習區</p>
                            <img src="../public/images/icon_greenA.svg" alt="" />
                        </div>
                    </Link>
                    <Link to='/LearnGame'>
                        <div className="bar-Content">
                            <img src="../public/images/icon_greenA.svg" alt="" />
                            <p>小試身手</p>
                            <img src="../public/images/icon_greenA.svg" alt="" />
                        </div>
                    </Link>
                    <Link to='/Trend'>
                        <div className="bar-Content">
                            <img src="../public/images/icon_greenA.svg" alt="" />
                            <p>學習趨勢</p>
                            <img src="../public/images/icon_greenA.svg" alt="" />
                        </div>
                    </Link>
                </div>
                <div className="bar-bottom">
                    <p>登出</p>
                    <img src="../public/images/icon_donate.svg" alt="" />
                </div>

            </section>
        </>

    )
}
export default Hamburger