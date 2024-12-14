import '../assets/css/LearnGame.css'

function LearnGame() {


    return (
        <>
            <section id='LearnGame-page'>
                <div className='LearnGame-blackboard'>
                    <div className='LearnGame-content-1'>
                        <p>遊戲玩法介紹規則介紹，遊戲玩法介紹規則介紹遊戲玩法介紹規則介紹遊戲玩法介紹規則介紹！</p>
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