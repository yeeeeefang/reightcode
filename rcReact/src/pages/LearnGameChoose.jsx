import '../assets/css/LearnGameChoose.css'
import Navbar from '../components/Navbar'

function LearnGameChoose() {

    return (
        <>

            <section id='LearnGameChoose-page-all'>
                <Navbar />

                <div id='LearnGameChoose-page'>
                    <div className='LearnGame-img-position'>
                        <img className='LearnGameChoose-img-position-1' src="../public/images/GameDecoA.svg" alt="" />
                        <img className='LearnGameChoose-img-position-2' src="../public/images/GameDecoB.svg" alt="" />
                        <img className='LearnGameChoose-img-position-3' src="../public/images/GameDecoC.svg" alt="" />
                        <img className='LearnGameChoose-img-position-4' src="../public/images/GameDecoD.svg" alt="" />

                    </div>
                    <div className='LearnGameChoose-blackboard'>
                        <img className='LearnGameChoose-img-position-5' src="../public/images/GameEraser.svg" alt="" />
                        <div className='LearnGameChoose-content-1'>
                            <p>我們可以在下列哪一個HTML 元素中放置 Javascript 程式碼？</p>
                        </div>
                        {/* 選擇挑戰後出現題目 */}
                        <div id='LearnGameChoose-Choose'>
                            <div className="LearnGameChoose-Choose-bk-G">
                                <p>&lt; script&gt;</p>
                                <img src="../public/images/iconGreenA.png" alt="" />
                            </div>
                            <div className="LearnGameChoose-Choose-bk-B">
                                <p>&lt; scripting&gt;</p>
                                <img src="../public/images/iconBlue.png" alt="" />
                            </div>
                            <div className="LearnGameChoose-Choose-bk-P">
                                <p>&lt; scripting&gt;</p>
                                <img src="../public/images/iconPink.png" alt="" />
                            </div>
                            <div className="LearnGameChoose-Choose-bk-R">
                                <p>&lt; scripting&gt;</p>
                                <img src="../public/images/iconRed.png" alt="" />
                            </div>

                            {/* 選擇題答案 */}
                            {/* <div className="LearnGameChoose-Ans-bk-G">
                            <div className='LearnGameChoose-Ans-bk-content-G'>
                                <p className='LearnGameChoose-Ans-p1'>正確答案</p>
                                <p className='LearnGameChoose-Ans-p2'>在HTML中前後加入
                                    &lt; script&gt;程式&lt; /script&gt;</p>
                                <img src="../public/images/iconGreenA.png" alt="" />
                            </div>
                        </div>
                        <div className="LearnGameChoose-Ans-bk-B">
                            <div className='LearnGameChoose-Ans-bk-content-B'>
                                <p className='LearnGameChoose-Ans-p1'>答案錯誤</p>
                                <p className='LearnGameChoose-Ans-p2'>JavaScript 在HTML中
                                    是使用&lt; script&gt;</p>
                                <img src="../public/images/iconBlue.png" alt="" />

                            </div>
                        </div>
                        <div className="LearnGameChoose-Ans-bk-P">
                            <div className='LearnGameChoose-Ans-bk-content-P'>
                                <p className='LearnGameChoose-Ans-p1'>答案錯誤</p>
                                <p className='LearnGameChoose-Ans-p2'>JavaScript 在HTML中
                                    是使用&lt; script&gt;</p>
                                <img src="../public/images/iconPink.png" alt="" />

                            </div>
                        </div>
                        <div className="LearnGameChoose-Ans-bk-R">
                            <div className='LearnGameChoose-Ans-bk-content-R'>
                                <p className='LearnGameChoose-Ans-p1'>答案錯誤</p>
                                <p className='LearnGameChoose-Ans-p2'>JavaScript 在HTML中
                                    是使用&lt; script&gt;</p>
                                <img src="../public/images/iconRed.png" alt="" />
                            </div>
                        </div> */}
                        </div>

                        {/* 選擇挑戰前
                    <div className='LearnGame-content-2'>
                        <p>準備好挑戰了？</p>
                    </div>
                    <div className='LearnGame-ready-1'>
                        <div className='LearnGame-img-1'>
                            <img src="../public/images/GameChalk.svg" alt="" />
                        </div>
                        <div className='LearnGame-content-3'>
                            <p>需要再複習</p>
                        </div>
                        <div className='LearnGame-img-2'>
                            <img src="../public/images/GameChalk.svg" alt="" />
                        </div>
                        <div className='LearnGame-content-4'>
                            <p>準備好了</p>
                        </div>
                    </div> */}


                    </div>
                </div>
            </section>
        </>
    )
}

export default LearnGameChoose