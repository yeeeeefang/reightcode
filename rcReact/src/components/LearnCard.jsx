import '../assets/css/LearnCard.css'
function LearnCard() {

    
    return (
        <> 
            <section id='LearnPageAll'>
                <div className='LearnPageLeft-1'>
                    <img src="../public/images/learnPageLeft.svg" alt="" />
                </div>
                <div className='Learn-Card-all'>
                    <div className="Learn-Card-1">
                        <div className="Learn-Card-bk-1">
                            <div className="Learn-Card-icon-1">
                                <img src="../public/images/learnPageLeftHeart.svg" alt="" />
                            </div>
                            <div className="Learn-Card-img-1">
                                <img src="../public/images/learnPage1.svg" alt="" />
                            </div>
                            <div className="Learn-Card-Content-1">
                                <p>標題與段落</p>
                            </div>
                            <div className="Learn-Card-Content-2">
                                <p>#問題解決</p>
                                <p>#邏輯思考</p>
                            </div>
                        </div>
                    </div>
                    <div className="Learn-Card-1">
                        <div className="Learn-Card-bk-1">
                            <div className="Learn-Card-icon-1">
                                <img src="../public/images/learnPageLeftHeart.svg" alt="" />
                            </div>
                            <div className="Learn-Card-img-1">
                                <img src="../public/images/learnPage3.svg" alt="" />
                            </div>
                            <div className="Learn-Card-Content-1">
                                <p>文字樣式-2</p>
                            </div>
                            <div className="Learn-Card-Content-2">
                                <p>#問題解決</p>
                                <p>#決策能力</p>
                            </div>
                        </div>
                    </div>
                    <div className="Learn-Card-1">
                        <div className="Learn-Card-bk-1">
                            <div className="Learn-Card-icon-1">
                                <img src="../public/images/learnPageLeftHeart.svg" alt="" />
                            </div>
                            <div className="Learn-Card-img-1">
                                <img src="../public/images/learnPage4.svg" alt="" />
                            </div>
                            <div className="Learn-Card-Content-1">
                                <p>短語與語意</p>
                            </div>
                            <div className="Learn-Card-Content-2">
                                <p>#問題解決</p>
                                <p>#創意思維</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='LearnPageLeft-2'>
                    <img src="../public/images/learnPageRight.svg" alt="" />
                </div>
            </section>
        </>
    )


}
export default LearnCard