import TrendCard from "../components/TrendCard";
import TrendCard2 from "../components/TrendCard2";
import "../assets/scss/Trend.scss"
import Navbar from '../components/Navbar'
import Footer from "../components/footer";
import { useEffect } from "react";

export default function Trend() {
    useEffect(() => {
      const handleScroll = () => {
        const div2 = document.querySelector('#div2');
        const threshold = 100; // 滾動高度門檻

        if (div2) {
          const rect = div2.getBoundingClientRect(); // 獲取元素相對於視窗的位置
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            div2.classList.add('scrolled'); // 滾動進入視窗範圍時，添加類名
          } else {
            div2.classList.remove('scrolled'); // 滾動離開視窗時，移除類名
          }
        }
      };

      window.addEventListener('scroll', handleScroll);

      // 清除滾動事件監聽
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <>
        <section id="div1" >
          <Navbar />

          <div className="lightcontainer">

            <img className="light" src="./public/images/trendLight.png" alt="" />
            <h3 className="hottitle">熱門學習趨勢</h3>
            <div className="container">
              <img className="light1" src="./public/images/trendLightA.svg" alt="" />
              <img className="light2" src="./public/images/trendLightB.svg" alt="" />
              <img className="light3" src="./public/images/trendLightC.svg" alt="" />
            </div>
          </div>
          <TrendCard />
          <img className="deco-1" src="./public/images/trendDecoA.png" alt="" />
          <img className="deco-2" src="./public/images/trendDecoB.png" alt="" />
          <img className="deco-3" src="./public/images/trendDecoC.png" alt="" />
          <div id="item3">
            <div className="item4"><img className="char-1" src="./public/images/blueA.svg" alt="" /></div>
            <div className="item4"><img className="char-2" src="./public/images/redC.svg" alt="" /></div>
            <div className="item4"><img className="char-3" src="./public/images/pinkE.svg" alt="" /></div>
          </div>
          <div >
            <img className="path" src="./public/images/trendPath.svg" alt="" />
          </div>
        </section>
        <section id="div2">
          <TrendCard2 />
        </section>
        <section>
          <Footer />
        </section>
      </>
    )
  }

