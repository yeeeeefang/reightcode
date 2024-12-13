import "../assets/css/Member.css"
import Navbar from "../components/Navbar"
import NavbarTwo from "../components/NavbarTwo"

export default function Member() {
    return (
        <>

            <div id="nav">
            <Navbar/>
            </div>
                <div id="memberPage">
                    {/* 會員總資料 */}
                    <div id="member">
                        {/* 會員圖片 */}
                        <div className="memberPic"><img src="./images/greenE.svg" alt="會員圖片" />
                        </div>
                        <div id="memberAll">
                            {/* 會員資料 */}
                            <div className="memberInfo">
                                <h2>個人資料</h2>
                                <div className="name">
                                    <p>姓名：</p>
                                    <p>王曉明</p>
                                </div>
                                <div className="sexal">
                                    <p>性別：</p>
                                    <p>男</p>
                                </div>
                                <div className="age">
                                    <p>年齡：</p>
                                    <p>13歲</p>
                                </div>
                                <div className="school">
                                    <p>學校：</p>
                                    <p>快樂國中</p>
                                </div>
                                <div className="time">
                                    <p>加入時間：</p>
                                    <p>2024/12/03</p>
                                </div>
                            </div>
                            {/* 會員獎盃 */}
                            <div className="memberAward">
                                <h2>獎盃挑戰</h2>
                                <div className="award">
                                    <img src="./images/award.svg" alt="" />
                                    <img src="./images/award.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="memberRight">
                        <div id="rightUp">
                            {/* 課程進度 */}
                            <div id="progress">
                                <div className="progressTitle">
                                    <img src="./images/icon_blue.svg" alt="" />
                                    <h2>課程進度</h2>
                                </div>

                                <div className="course1">
                                    <img src="./images/memberHTML.png" alt="" className="html" />
                                    <div className="course1Info">
                                        <h2>HTML 第<span>5</span>堂</h2>
                                        <div className="progress">
                                            <progress value={50} max={100} /> <p>50%</p>
                                        </div>
                                        <h3>最後學習時間：<span>2024年12月25日</span></h3>
                                    </div>
                                </div>
                                <div className="course2">
                                    <img src="./images/memberCSS.png" alt="" className="CSS" />
                                    <div className="course2Info">
                                        <h2>CSS 第<span>5</span>堂</h2>
                                        <div className="progress">
                                            <progress value={20} max={100} /> <p>20%</p>
                                        </div>
                                        <h3>最後學習時間：<span>2024年12月25日</span></h3>
                                    </div>
                                </div>

                            </div>

                            {/* 收藏課程 */}
                            <div id="collectionAll">
                                <div className="collectionTitle">
                                    <img src="./images/icon_pink.svg" alt="" />
                                    <h2>收藏課程</h2>
                                </div>

                                <a href="" className="collect1">
                                    <p className="title">HTML</p>
                                    <p>HTML的各種標籤</p>
                                </a>
                                <a href=""  className="collect">
                                    <p className="title">HTML</p>
                                    <p>HTML的各種標籤</p>
                                </a>
                                <a href=""  className="collect">
                                    <p className="title">HTML</p>
                                    <p>HTML的各種標籤</p>
                                </a>
                                <a href=""  className="collect">
                                    <p className="title">HTML</p>
                                    <p>HTML的各種標籤</p>
                                </a>

                            </div>
                        </div>
                        {/* 獎盃總表 */}
                        <div id="award">
                            <div className="awardContent">
                                <h2><img src="./images/iconGreenA.png" alt="" />總堂數</h2>
                                <div className="awardPic">
                                    <div className="apic">
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                    </div>
                                    <div className="apic">
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="awardContent">
                                <h2><img src="./images/iconRed.png" alt="" />挑戰次數</h2>
                                <div className="awardPic">
                                    <div className="apic">
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                    </div>
                                    <div className="apic">
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="awardContent">
                                <h2><img src="./images/iconBlue.png" alt="" />HTML</h2>
                                <div className="awardPic">
                                    <div className="apic">
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                    </div>
                                    <div className="apic">
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="awardContent">
                                <h2><img src="./images/iconPink.png" alt="" />CSS</h2>
                                <div className="awardPic">
                                    <div className="apic">
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                    </div>
                                    <div className="apic">
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                        <img src="./images/award.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            
        </>
    )
}