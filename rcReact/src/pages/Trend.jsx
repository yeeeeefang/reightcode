import TrendCard from "../components/TrendCard";
import TrendCard2 from "../components/TrendCard2";
import "../assets/scss/Trend.scss"
import Navbar from '../components/Navbar'
import Footer from "../components/footer";
import { useEffect } from "react";

export default function Trend() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const div2 = document.querySelector('#div2');
  //     const threshold = 20; // 滾動高度門檻

  //     if (div2) {
  //       const rect = div2.getBoundingClientRect(); // 獲取元素相對於視窗的位置
  //       if (rect.top < window.innerHeight && rect.bottom > 0) {
  //         div2.classList.add('scrolled'); // 滾動進入視窗範圍時，添加類名
  //       } else {
  //         div2.classList.remove('scrolled'); // 滾動離開視窗時，移除類名
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // 清除滾動事件監聽
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <section id="div1" >
        <Navbar />

        <div className="lightcontainer">

          <img className="light" src="/images/trendLight.png" alt="" />
          <h3 className="hottitle">熱門學習趨勢</h3>
          <div className="container">
            {/* 
            <img className="light1" src="./public/images/trendLightA.svg" alt="" /> 
             <img className="light2" src="./public/images/trendLightB.svg" alt="" />
             <img className="light3" src="./public/images/trendLightC.svg" alt="" /> */}
            <svg className="light1" width="1484" height="823" viewBox="0 0 1484 823" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 822.225L638.5 0H764L1483.5 814L0 822.225Z" fill="rgba(255, 233, 162, 0.8)" />
            </svg>

            <svg className="light2" width="997" height="823" viewBox="0 0 997 823" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 822.653L451.5 0H565L996.663 822.656L0 822.653Z" fill="rgb(252, 238, 194)" />
            </svg>
            <svg className="light3" width="657" height="823" viewBox="0 0 657 823" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 822.186L296 0H382.5L656.144 822.186H0Z" fill="#FEF5D3" />
            </svg>
          </div>
        </div>
        <TrendCard />
        <img className="deco-1" src="/images/trendDecoA.png" alt="" />
        <img className="deco-2" src="/images/trendDecoB.png" alt="" />
        <img className="deco-3" src="/images/trendDecoC.png" alt="" />
        <div id="item3">
          <div className="item4"><img className="char-1" src="/images/blueA.svg" alt="" /></div>
          <div className="item4"><img className="char-2" src="/images/redC.svg" alt="" /></div>
          <div className="item4"><img className="char-3" src="/images/pinkE.svg" alt="" /></div>
        </div>
        <div >
          <img className="path" src="/images/trendPath.svg" alt="" />
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

