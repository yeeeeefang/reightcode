import { useState } from "react"
import "../assets/scss/LearnHome.scss"
import Navbar from "../components/Navbar"
import NavbarTwo from "../components/NavbarTwo"
import { Link } from 'react-router-dom'

export default function LearnHome() {


    return (
        <>
            <div id="learnhome-page">
                <NavbarTwo />
                {/* topbar  */}
                {/* <header id="topbar">
                    <div className="logo">
                        <h1 className="logo"><img src="/images/logo.png" alt="rightCode" title="rightCode" /></h1>
                    </div>
                    <div className="learnBtn">
                        <figure><img src="/images/hamBtn.svg" alt="" /></figure>
                    </div>
                </header> */}

                {/* 最大的:要垂直排 */}
                <div className="learnhome-section1">
                    {/* 第一區 - 學習區 */}
                    {/*  className="lin" */}
                    <div className="link-learn">
                        <Link to='/LearnSelect'>
                            <div className="learning-section">
                                <img
                                    src="/images/greenA.svg"
                                    alt="Green Character"
                                    className="greenA"
                                />
                                <h2>學習區</h2>
                            </div>
                        </Link>
                    </div>
                    {/* 第二大的:水平 */}
                    <div className="learnhome-section2">
                        {/* 第三大的:垂直排 */}
                        <div className="learnhome-section3">
                            {/* 第二區 - 小試身手 */}

                            <Link to='/LearnGame'>
                                <div className="practice-section">
                                    <h2>小試身手</h2>
                                    <img
                                        src="/images/blueA.svg"
                                        alt="Blue Character"
                                        className="blueA"
                                    />
                                </div>
                            </Link>

                            {/* 第三區 - 探索學習趨勢 */}
                            <Link to='/Trend'>
                                <div className="explore-section">
                                    <img
                                        src="/images/pinkA.svg"
                                        alt="Pink Character"
                                        className="pinkA"
                                    />
                                    <h2>探索學習趨勢</h2>
                                </div>
                            </Link>
                        </div>

                        {/* 第四區 - doit */}
                        <div className="doit-section">
                            <div className="speech-bubble">
                                <p>Do it!</p>
                                {/* <img src="/images/speech-bobble.png" alt="" /> */}
                            </div>
                            <img
                                src="/images/redB.svg"
                                alt="Red Character"
                                className="redA"
                            />
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}