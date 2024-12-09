import '../../src/assets/css/Footer.css';


function Footer() {
    return (
        <div>
            <nav className="nav1">
                <div id="nav1-1">
                    <ul className="item1"><p>首頁</p>
                        <li className="item2"><a href=""><p>關於我們</p></a></li>

                    </ul>
                    <ul className="item1"><p>學習專區</p>
                        <li className="item2"><a href=""><p>學習區</p></a></li>
                        <li className="item2"><a href=""><p>小試身手</p></a></li>
                        <li className="item2"><a href=""><p>探索學習趨勢</p></a></li>

                    </ul>
                    <ul className="item1"><p>會員專區</p>
                        <li className="item2"><a href=""><p>登入/註冊</p></a></li>
                        <li className="item2"><a href=""><p>我的帳號</p></a></li>

                    </ul>
                </div>
                <div id="nav1-2">
                    <h1 class="logo"><a href="./index.html">
                        {/*  SVG預設自動寬度100%  */}
                        <img src="./public/images/logo.png" alt="RightCodeLOGO" title="RightCodeLOGO" />
                    </a></h1>
                    <ul className="icon">
                        <li><a className="iconBlue" href="">
                            <img src="./public/images/iconBlue.png" alt="" />
                        </a></li>
                        <li><a className="iconPink" href="">
                            <img src="./public/images/iconPink.png" alt="" />
                        </a></li>

                    </ul>
                </div>
            </nav >
        </div >
    )
}
export default Footer