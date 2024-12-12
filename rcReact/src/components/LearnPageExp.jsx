import '../assets/css/LearnPageExp.css'
import CircularProgress from './CircularProgress'

function LearnPageExp() {
    return (
        <>
            <section id='LearnPageExp'>
                <div>
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
                            <p>邏輯思考</p>
                            <progress value={50} max={100} className='LearnPageExp-progress' />
                        </div>
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
                            <p>邏輯思考</p>
                            <progress value={50} max={100} className='LearnPageExp-progress' />
                        </div>
                    </div>
                </div>
                <div>
                    <CircularProgress></CircularProgress>
                </div>
            </section>
        </>
    )
}
export default LearnPageExp
