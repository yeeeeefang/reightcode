import "../../css/LearnHome.css"

export default function LearnHome() {
    return (
        <>
            {/* topbar */}
            <header id="topbar">
                <div className="logo">
                    <h1 className="logo"><img src="/images/logo.png" alt="rightCode" title="rightCode" /></h1>
                </div>
                <div className="learnBtn">
                    <figure><img src="/images/hamBtn.svg" alt="" /></figure>
                </div>
            </header>

            {/* 最大的:要垂直排 */}
            <div className="learn-home">
                {/* 第一區 - 學習區 */}
                <div className="learning-section">
                    <img
                        src="/images/greenA.svg"
                        alt="Green Character"
                        className="greenA"
                    />
                    <h2>學習區</h2>
                </div>
                {/* 第二大的:水平 */}
                <div className="section">
                    {/* 第三大的:垂直排 */}
                    <div className="section3">
                        {/* 第二區 - 小試身手 */}
                        <div className="practice-section">
                            <h2>小試身手</h2>
                            <img
                                src="/images/blueA.svg"
                                alt="Blue Character"
                                className="blueA"
                            />
                            
                        </div>

                        {/* 第三區 - 探索學習趨勢 */}
                        <div className="explore-section">
                            <img
                                src="/images/pinkA.svg"
                                alt="Pink Character"
                                className="pinkA"
                            />
                            <h2>探索學習趨勢</h2>
                        </div>
                    </div>
                    {/* 第四區 - doit */}
                    <div className="doit-section">
                        <div className="speech-bubble">
                            <span>Do it!</span>
                        </div>
                        <img
                            src="/images/red.svg"
                            alt="Red Character"
                            className="redA"
                        />
                    </div>

                </div>
            </div>


        </>
    )
}