import '../assets/css/LearnGame.css'
import Navbar from '../components/Navbar'

function LearnGame() {


    return (
        <>
            <section id='LearnGame-page-all'>
                <Navbar></Navbar>

                <div id='LearnGame-page'>
                    <div className='LearnGame-img-position'>
                        <img className='LearnGame-img-position-1' src="../public/images/GameDecoA.svg" alt="" />
                        <img className='LearnGame-img-position-2' src="../public/images/GameDecoB.svg" alt="" />
                        <img className='LearnGame-img-position-3' src="../public/images/GameDecoC.svg" alt="" />
                        <img className='LearnGame-img-position-4' src="../public/images/GameDecoD.svg" alt="" />
                        <img className='LearnGame-img-position-green' src="../public/images/greenBackB.svg" alt="" />
                        <img className='LearnGame-img-position-red' src="../public/images/redBackB.svg" alt="" />
                        <img className='LearnGame-img-position-pink' src="../public/images/pinkBackC.svg" alt="" />
                        <img className='LearnGame-img-position-blue' src="../public/images/blueA.svg" alt="" />

                    </div>
                    <div className='LearnGame-blackboard'>
                        <img className='LearnGame-img-position-5' src="../public/images/GameEraser.svg" alt="" />
                        <div className='LearnGame-content-1'>
                            <p>不間斷地提供題目，給予問答提供四個選項給你選擇，達成一定的數量將會有成就獎勵!</p>
                        </div>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LearnGame