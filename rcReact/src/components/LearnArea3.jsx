import '../assets/scss/LearnArea3.scss'

function LearnArea3() {
    return (
        <>
            <section id="LearnAreaall3">
                <div className="wordclass">
                    <div className='learnbigtitle'>
                        <img className='bigtitleimg' src="./public/images/learnAreaVocab.png" alt="" />
                    </div>
                    <div className='learnwordall'>
                        {/* 第一條 */}
                        <div className="learnword">
                            <div className="wordall">
                                <h4 className="wwword wordtitle1">{"<s>"}
                                </h4>
                                <div className="wordcontent">
                                    <p className="contentch">指定不再正確、準確或相關的文字。文字將顯示為帶有一條線。</p>
                                    <p className="contenten">The {"<s>"} tag specifies text that is no longer correct, accurate or relevant. The text will be displayed with a line through it.</p>
                                </div>
                            </div>
                            <div className="wordEnglish1"></div>
                        </div>
                        {/* 第二條 */}
                        <div className="learnword">
                            <div className="wordall">
                                <h4 className="wwword wordtitle2">{"<i>"}
                                </h4>
                                <div className="wordcontent">
                                    <p className="contentch">替代語氣或語氣定義文字的一部分。裡面的內容通常以斜體顯示。</p>
                                    <p className="contenten">The{"<i>"}tag defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.</p>
                                </div>
                            </div>
                            <div className="wordEnglish2"></div>
                        </div>
                        {/* 第三條 */}
                        <div className="learnword">
                            <div className="wordall">
                                <h4 className="wwword wordtitle3">{"<u>"}
                                </h4>
                                <div className="wordcontent">
                                    <p className="contentch">表示一些未明確表達且樣式與普通文本不同的文本，例如中文文本中拼寫錯誤的單字或專有名稱。</p>
                                    <p className="contenten">The{"<u>"}tag represents some text that is unarticulated and styled differently from normal text.</p>
                                </div>
                            </div>
                            <div className="wordEnglish3"></div>
                        </div>
                    </div>
                </div>
                {/* 講點雲飄飄 */}
                <div id='LearnAreaall3-1'>
                    <div className="learnimportant">
                        <div className="impbox"></div>
                        <div className="charblue">
                        <img className='charblueimg' src="./public/images/blueC.svg" alt="" />
                        </div>
                        <div className="cloud1">
                            <img src="./public/images/LearnAreacloud1.svg" alt="" />
                        </div>
                        <div className="charred"></div>
                        <div className="cloud2"></div>
                    </div>
                    <div className="happy">
                        <div className="practice"></div>
                        <div className="practicebox"></div>
                    </div>

                </div>
            </section>

        </>
    )
}
export default LearnArea3