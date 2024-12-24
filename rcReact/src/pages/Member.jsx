import "../assets/css/Member.css"
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom'

export default function Member() {
    return (
        <>

            <div id="nav">
                <Navbar />
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
                                <div className="aPic1"><img src="./images/award.svg" alt="" /></div>
                                <div className="aPic1"><img src="./images/award.svg" alt="" /></div>
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

                            <Link to="/LearnPage" className="course">
                                <img src="./images/memberHTML.png" alt="" className="html" />
                                <div className="courseInfo">
                                    <h2>HTML 第<span>5</span>堂</h2>
                                    <div className="progress">
                                        <progress value={70} max={100} /> <p>70%</p>
                                    </div>
                                    <h3>最後學習時間：<span>2024年12月25日</span></h3>
                                </div>
                            </Link>

                            

                                <Link to="/LearnPage" className="course">
                                    <img src="./images/memberCSS.png" alt="" className="CSS" />
                                    <div className="courseInfo">
                                        <h2>CSS 第<span>5</span>堂</h2>
                                        <div className="progress">
                                            <progress value={20} max={100} /> <p>20%</p>
                                        </div>
                                        <h3>最後學習時間：<span>2024年12月25日</span></h3>
                                    </div>
                                </Link>

                            

                        </div>

                        {/* 收藏課程 */}
                        <div id="collectionAll">
                            <div className="collectionTitle">
                                <img src="./images/icon_pink.svg" alt="" />
                                <h2>收藏課程</h2>
                            </div>
                            <Link to="/LearnArea" className="collect1">
                                <p className="title">HTML</p>
                                <p>HTML的各種標籤</p>
                            </Link>

                            <Link to="/LearnArea" className="collect">
                                <p className="title">HTML</p>
                                <p>HTML的各種標籤</p>
                            </Link>

                            <Link to="/LearnArea" className="collect">
                                <p className="title">HTML</p>
                                <p>HTML的各種標籤</p>
                            </Link>

                            <Link to="/LearnArea" className="collect">
                                <p className="title">HTML</p>
                                <p>HTML的各種標籤</p>
                            </Link>

                        </div>
                    </div>

                    {/* 獎盃總表 */}
                    <div id="award">
                        <div className="awardContent">
                            <h2><img src="./images/iconGreenA.png" alt="" />總堂數</h2>
                            <div className="awardPic">
                                <div className="aPic">
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                </div>
                                <div className="aPic">
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="awardContent">
                            <h2><img src="./images/iconRed.png" alt="" />挑戰次數</h2>
                            <div className="awardPic">
                                <div className="aPic">
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                </div>
                                <div className="aPic">
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="awardContent">
                            <h2><img src="./images/iconBlue.png" alt="" />HTML</h2>
                            <div className="awardPic">
                                <div className="aPic">
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                </div>
                                <div className="aPic">
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="awardContent">
                            <h2><img src="./images/iconPink.png" alt="" />CSS</h2>
                            <div className="awardPic">
                                <div className="aPic">
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                </div>
                                <div className="aPic">
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                    <div className="aPic1"><img src="./images/award.svg" alt="獎盃" /></div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}