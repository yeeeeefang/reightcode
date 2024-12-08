import "../../css/Member.css"

export default function Member() {
    return (
        <>
            <header id="topbar">
                <div className="logo">
                    <h1 className="logo"><a href="./index.html"><img src="/images/logo.png" alt="rightCode" title="rightCode" /></a></h1>
                </div>
                <div className="nav">
                    <img className="hamBtn" src="/images/hamBtn.svg" alt="" />
                </div>
            </header>

            <body>

                <div id="memberPage">
                    {/* 會員總資料 */}
                    <div id="member">
                        {/* 會員圖片 */}
                        <div className="memberPic"><img src="./images/greenE.svg" alt="會員圖片" /></div>
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
                    <div id="collection">
                        <div className="collectionTitle">
                            <img src="./images/icon_pink.svg" alt="" />
                            <h2>收藏課程</h2>
                        </div>
                        <div className="collect1">
                            <p className="title">HTML</p>
                            <p>HTML的各種標籤</p>
                        </div>
                        <div className="collect2">
                            <p className="title">HTML</p>
                            <p>HTML的各種標籤</p>
                        </div>
                        <div className="collect3">
                            <p className="title">HTML</p>
                            <p>HTML的各種標籤</p>
                        </div>
                        <div className="collect4">
                            <p className="title">HTML</p>
                            <p>HTML的各種標籤</p>
                        </div>

                    </div>

                    {/* 獎盃總表 */}

                </div>
            </body>

        </>
    )
}