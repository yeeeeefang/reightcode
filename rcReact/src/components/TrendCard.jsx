import '../../css/TrendCard.css'
function TrendCard() {

    return (
        <div className="card">
            <h3 className="learn">HTML</h3>
            <img src="../public/images/trendCourse1.png" alt="" />
            <div class="item">
                <h4 className="learn">什麼是HTML?</h4>
                <p className="content">學習人數 473人</p>
                <p className="content">收藏人數 294人</p>
            </div>
        </div>
    )
}
export default TrendCard;