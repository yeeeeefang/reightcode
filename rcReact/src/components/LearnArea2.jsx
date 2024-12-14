import '../assets/scss/LearnArea2.scss'
function LearnArea2() {
    return (
        <>
            <section id='LearnAreaal2'>
                <div className="areaTitle">
                    <div className="areaBlue">
                        <img src="./public/images/blueB.svg" alt="" />
                    </div>
                    <img className='areaimportant' src="./public/images/LearnArea-important.svg" alt="" />
                    <h2 className='areah2'>你能想像字體能做甚麼變化嗎?</h2>

                </div>
                <div className="areaContent">
                    <div >
                        <p className='areap1'>在生活當中會看到許多字體，小朋友們可以舉例看看嗎？</p>
                    </div>
                    {/* <img src="./public/images/LearnArea-dialogbox1.svg" alt="" /> */}
                    <div className='areatwo'>
                        <div className='areap2'>
                            <p className='areap2-1'>這些字體有些大大的像太陽</p>
                            <p className='areap2-2'>有些小小的像星星</p>
                        </div>
                        {/* <img src="./public/images/LearnArea-dialogbox2.svg" alt="" /> */}
                        <div className='areaimg1'>
                            <img className='areaimg1-1' src="./public/images/redBack.svg" alt="" />
                        </div>
                    </div>
                    <div className='areathree'>
                        <div className='areap3'>
                            <p>甚至還有斜斜的像溜滑梯！</p>
                        </div>
                        {/* <img src="./public/images/LearnArea-dialogbox3.svg" alt="" /> */}
                        <div>
                            <img src="./public/images/pinkBack.svg" alt="" />
                        </div>
                    </div>
                    <div className='areafour'>
                        <div className='areap4'>
                            <p className='areap4-1'>有些粗粗的像電線杆，</p>
                            <p className='areap4-2'>也有些細細的像電線</p>
                        </div>
                        {/* <img src="./public/images/LearnArea-dialogbox4.svg" alt="" /> */}
                        <div>
                            <img src="./public/images/greenBack.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LearnArea2