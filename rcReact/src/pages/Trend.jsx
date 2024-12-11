import TrendCard from "../components/TrendCard";
import TrendCard2 from "../components/TrendCard2";
import "../assets/scss/Trend.scss"
import Navbar from '../components/Navbar'

function Trend(){

    return (
      <>
      <Navbar/>
        <section id="div1" >
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
          <img className="deco-1" src="./public/images/trendDecoA.png" alt="" />
          <img className="deco-2" src="./public/images/trendDecoB.png" alt="" />
          <img className="deco-3" src="./public/images/trendDecoC.png" alt="" />
          <div id="item3">
          <div className="item4"><img className="char-1" src="./public/images/blueA.svg" alt="" /></div>
          <div className="item4"><img className="char-2" src="./public/images/redC.svg" alt="" /></div>
          <div className="item4"><img className="char-3" src="./public/images/pinkE.svg" alt="" /></div>
          </div>
          <div>
            <img className="path" src="./public/images/trendPath.svg" alt="" />
          </div>
        </section>
        <section id="div2">
          <TrendCard2/>
          
        </section>
        </>
      )
}
export default Trend