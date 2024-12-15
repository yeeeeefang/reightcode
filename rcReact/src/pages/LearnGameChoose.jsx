import '../assets/css/LearnGameChoose.css'

function LearnGameChoose() {


    return (
        <>
            <section id='LearnGame-page'>
                <div className='LearnGame-img-position'>
                    <img className='LearnGame-img-position-1' src="../public/images/GameDecoA.svg" alt="" />
                    <img className='LearnGame-img-position-2' src="../public/images/GameDecoB.svg" alt="" />
                    <img className='LearnGame-img-position-3' src="../public/images/GameDecoC.svg" alt="" />
                    <img className='LearnGame-img-position-4' src="../public/images/GameDecoD.svg" alt="" />

                </div>
                <div className='LearnGame-blackboard'>
                    <img className='LearnGame-img-position-5' src="../public/images/GameEraser.svg" alt="" />
                    <div className='LearnGame-content-1'>
                        <p>我們可以在下列哪一個HTML 元素中放置 Javascript 程式碼？</p>
                    </div>
                    {/* 選擇挑戰後 */}
                    <div id='LearnGame-Choose'>
                        <div className="LearnGame-Choose-bk-G">
                            <p>&lt; script&gt;</p>
                            <img src="../public/images/iconGreenA.png" alt="" />
                        </div>
                        <div className="LearnGame-Choose-bk-B">
                            <p>&lt; scripting&gt;</p>
                            <img src="../public/images/iconBlue.png" alt="" />
                        </div>
                        <div className="LearnGame-Choose-bk-P">
                            <p>&lt; scripting&gt;</p>
                            <img src="../public/images/iconPink.png" alt="" />
                        </div>
                        <div className="LearnGame-Choose-bk-R">
                            <p>&lt; scripting&gt;</p>
                            <img src="../public/images/iconRed.png" alt="" />
                        </div>

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

            </section>
        </>
    )
}

export default LearnGameChoose