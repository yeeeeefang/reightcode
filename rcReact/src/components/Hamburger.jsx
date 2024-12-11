import '../assets/css/Hamburger.css'

function Hamburger() {
    return (
        <>
            <section id="Hamburger">
                <div className="Ham-Bk-1">
                    <p>會員登入</p>
                    <p>註冊新會員</p>
                    <div className="iconX">
                        <span class="bar"> </span>
                        <span class="bar"> </span>
                    </div>
                </div>
                <div className="barLink">
                    <div className="bar-Content">

                        <img src="../public/images/icon_greenA.svg" alt="" />
                        <p>關於我們</p>
                        <img src="../public/images/icon_greenA.svg" alt="" />
                    </div>
                    <div className="bar-Content">
                        <img src="../public/images/icon_greenA.svg" alt="" />
                        <p>會員中心</p>
                        <img src="../public/images/icon_greenA.svg" alt="" />
                    </div>
                    <div className="bar-Content">
                        <img src="../public/images/icon_greenA.svg" alt="" />
                        <p>學習區</p>
                        <img src="../public/images/icon_greenA.svg" alt="" />
                    </div>
                    <div className="bar-Content">
                        <img src="../public/images/icon_greenA.svg" alt="" />
                        <p>小試身手</p>
                        <img src="../public/images/icon_greenA.svg" alt="" />
                    </div>
                    <div className="bar-Content">
                        <img src="../public/images/icon_greenA.svg" alt="" />
                        <p>學習趨勢</p>
                        <img src="../public/images/icon_greenA.svg" alt="" />
                    </div>
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