import TrendCard from "../components/TrendCard";
import "../../css/Trend.css"

function Trend(){

    return (
        <div id="div1" >
          <div id="header"></div>
          <div className="lightcontainer">
            <img className="light" src="./public/images/trendLight.png" alt="" />
            <div className="container">
              <img className="light1" src="./public/images/trendLightA.svg" alt="" />
              <img className="light2" src="./public/images/trendLightB.svg" alt="" />
              <img className="light3" src="./public/images/trendLightC.svg" alt="" />
            </div>
          </div>
          <TrendCard/>
          <div id="item3">
          <div className="item4"><img className="char-1" src="./public/images/blueA.svg" alt="" /></div>
          <div className="item4"><img className="char-2" src="./public/images/redC.svg" alt="" /></div>
          <div className="item4"><img className="char-3" src="./public/images/pinkE.svg" alt="" /></div>
          </div>
          <div>
            <img className="path" src="./public/images/trendPath.svg" alt="" />
          </div>
        </div>
      )
}
export default Trend