import "../assets/scss/register.scss"
import Navbar from "../components/Navbar"


export default function Register() {
    return (
        <>

            <div id="register-page">
                <Navbar />
                {/* topbar  */}
                {/* <header className="topbar">
                    <div className="logo">
                        <h1 className="logo"><img src="/images/logo.png" alt="rightCode" title="rightCode" /></h1>
                    </div>
                    <div className="learnBtn">
                        <figure><img src="/images/hamBtn.svg" alt="" /></figure>
                    </div>
                </header> */}
                <div className="register-main">
                    <div className="amoeba-blobs2">
                        <img src="/images/register.png" alt="" />
                    </div>

                    <div className="characters">
                        <img src="/images/greenA.svg" alt="" className="green-char" />
                        <img src="/images/red.svg" alt="" className="red-char" />
                        <img src="/images/blueA.svg" alt="" className="blue-char" />
                        <img src="/images/pinkA.svg" alt="" className="pink-char" />
                    </div>

                    <div className="register-form">
                        <h2>會員註冊</h2>
                        <form>
                            <label  htmlFor="email">*Email：</label>
                            <input type="email" name="email" id="email" title="Email" placeholder="請輸入Email" required />

                            <label  htmlFor="password">請輸入密碼：</label>
                            <input type="password" name="password" id="password" title="密碼" placeholder="請輸入6~8英數混合字元" />
                            <label  htmlFor="password-1">再次確認密碼</label>
                            <input type="password" name="password" id="password-1" title="再次確認密碼" placeholder="請輸入6~8英數混合字元" />

                            <a href="/" className="forgot-password">記住這個帳號密碼</a>

                            <button type="submit" className="register-button">登入</button>
                        </form>
                        <div className="register-divider">
                            <hr />
                            <span>OR</span>
                            <hr />
                        </div>
                        <div className="social-register">
                            <button className="facebook"><img src="/images/icon_fb.svg" alt="" /></button>
                            <button className="apple"><img src="/images/icon_apple.svg" alt="" /></button>
                            <button className="google"><img src="/images/icon_google.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}