import '../assets/css/LearnGame.css'

function LearnGame() {


    return (
        <>
            <section id='LearnGame-page'>
                <div className='LearnGame-blackboard'>
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

            </section>
        </>
    )
}

export default LearnGame