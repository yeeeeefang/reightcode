import '../assets/css/LearnPageExp.css'

function LearnPageExp() {
    return (
        <>
            <section id='LearnPageExp'>
                <div className='LearnPageExp-bk-big'>
                    <div className='LearnPageExp-content-1'>
                        <p>目前獲得的能力:</p>
                    </div>
                    <div className='LearnPageExp-bk-1'>
                        <div className='LearnPageExp-img-1'>
                            <img src="../public/images/icon_greenB.svg" alt="" />
                        </div>
                        <div className='LearnPageExp-content-2'>
                            <p>邏輯思考</p>
                            <progress value={50} max={100} className='LearnPageExp-progress' />
                        </div>
                        <div className='LearnPageExp-img-1'>
                            <img src="../public/images/icon_greenB.svg" alt="" />
                        </div>
                        <div className='LearnPageExp-content-2'>
                            <p>問題解決</p>
                            <progress value={30} max={100} className='LearnPageExp-progress' />
                        </div>
                        <div className='LearnPageExp-img-1'>
                            <img src="../public/images/icon_greenB.svg" alt="" />
                        </div>
                        <div className='LearnPageExp-content-2'>
                            <p>決策能力</p>
                            <progress value={70} max={100} className='LearnPageExp-progress' />
                        </div>
                        <div className='LearnPageExp-img-1'>
                            <img src="../public/images/icon_greenB.svg" alt="" />
                        </div>
                        <div className='LearnPageExp-content-2'>
                            <p>創意思維</p>
                            <progress value={20} max={100} className='LearnPageExp-progress' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LearnPageExp
