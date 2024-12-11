import '../../src/assets/scss/TrendCard.scss'
function TrendCard() {

    return (
        <div className="cardcontent">
            <div className="card1">
                <h3 className="learn">CSS</h3>
                <img src="../public/images/trendCourse2.png" alt="" />
                <div class="item">
                    <h4 className="learn">什麼是CSS?</h4>
                    <p className="content">學習人數 2391人</p>
                    <p className="content">收藏人數 1022人</p>
                </div>
            </div>
            <div className="card2">
                <h3 className="learn">HTML</h3>
                <img src="../public/images/trendCourse1.png" alt="" />
                <div class="item">
                    <h4 className="learn">什麼是HTML?</h4>
                    <p className="content">學習人數 473人</p>
                    <p className="content">收藏人數 294人</p>
                </div>
            </div>
            <div className="card3">
                <h3 className="learn">JS</h3>
                <img src="../public/images/trendCourse3.png" alt="" />
                <div class="item">
                    <h4 className="learn">什麼是JS?</h4>
                    <p className="content">學習人數 930人</p>
                    <p className="content">收藏人數 467人</p>
                </div>
            </div>
        </div>
    )
}
export default TrendCard;