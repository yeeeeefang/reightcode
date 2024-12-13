import { useRef } from 'react'
import '../assets/css/Home.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Home() {

    const startRef = useRef(null)
    const startMouseUp = () => {
        startRef.current.src = '../public/images/btn.png'
        startRef.current.style.margin = '0 0 30px 0'
        startRef.current.style.padding = '0'
    }
    const startMouseDown = () => {
        startRef.current.src = '../public/images/btn_hover.png'
        startRef.current.style.margin = '0'
        startRef.current.style.padding = '10px 0 0 5px'
    }
    return (
        <>

            <div id='Home-page-1'>
                <Navbar />
            </div>
            <div id="Home-page-all">
                <section id="Home-page-2">{/* 第二分頁 */}
                    <div className="Home-content-bk-1">
                        <div className="Home-content-1">
                            <p className="Home-text-1">用<span>程式</span>創造未來</p>
                            <p className="Home-eng-text-1">Create the Future with Programming</p>
                        </div>
                        <div className="Home-content-2">
                            <p className="Home-text-1">用<span>英語</span>世界接軌</p>
                            <p className="Home-eng-text-2">Connect the World in English</p>
                        </div>
                    </div>
                    <div className="Home-content-bk-2">
                        <div className="Home-content-3">
                            <div className="Home-text-block-1">
                                <p className="Home-text-2">程式語言納入108課綱</p>
                                <br />
                                <p className="Home-eng-text-2">Programming included in 108 syllabus</p>
                                <p className="Home-sml-text-2">為了因應科技時代的需求，<br />
                                    108課綱將「程式設計」正式納入中小學的資訊教育。<br />
                                    通過基礎程式學習來鍛鍊孩子的邏輯思考、創意思維和問題解決能力，<br />
                                    並且學會技術應用，強化數位素養。</p>
                            </div>
                            <div className="Home-content-3-img">
                                <img src="../public/images/blueA.svg" alt="" />
                            </div>
                        </div>
                        <div className="Home-content-4">
                            <div className="Home-text-block-2">
                                <p className="Home-text-2">2030雙語政策</p>
                                <br />
                                <p className="Home-eng-text-2">Bilingual 2030</p>
                                <p className="Home-sml-text-2">教育部正在推動「2030雙語政策」。
                                    <br />目標是到2030年在國民教育中達成雙語環境，
                                    <br />
                                    希望孩子不僅能在課堂上學習語法與詞彙，
                                    <br />更能在日常生活和學習中靈活運用英語，
                                    <br />讓孩子未來更具國際競爭力！</p>
                            </div>
                            <div className="Home-content-4-img">
                                <img src="../public/images/red.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <figure id="Home-blueA"></figure>
                    {/*<figure id="homeDecoB"><img src="../public/images/homeDecoB.png" alt="" /></figure> */}
                    {/* <figure id="homePathA"><img src="../public/images/homePathA.png" alt="" /></figure> */}
                </section>

                <section id="Home-page-3">
                    <div className="Home-content-bk">
                        <div className="Home-content-bk-3">
                            <p>會</p><p>擔</p><p>心</p><p>這</p><p>些</p><p>情</p><p>況</p><p>嗎</p><p>？</p>
                        </div>
                        <div className="Home-content-bk-4">
                            <div className="Home-content-5">
                                <p className="Home-text-3">課程 <span>枯燥乏味</span></p>
                                <p className="Home-sml-text-3">傳統程式設計課程往往過於理論化，
                                    <br />缺乏趣味性，
                                    缺少互動和遊戲化的學習方式，<br />
                                    使得學習變得單調、難以引起學生的持續動力。</p>
                            </div>
                            <div className="Home-content-6">
                                <p className="Home-text-3">額外補習課程 <span>費用昂貴</span></p>
                                <p className="Home-sml-text-3">
                                    市面上的程式補習班通常價格高昂，<br />
                                    對許多家庭來說是額外的經濟負擔，<br />
                                    導致家長對於讓孩子接觸這類課程望而卻步。
                                </p>
                            </div>
                            <div className="Home-content-7">
                                <p className="Home-text-3"><span>時間及距離</span> 無法配合</p>
                                <p className="Home-sml-text-3">許多補習班的上課時間與學校課程衝突，<br />
                                    加上需要通勤，對於家長與孩子而言  都很不方便。<br />
                                    特別是偏遠地區的家庭，能夠選擇的課程資源更有限。</p>
                            </div>
                        </div>
                        <div >
                            <img className="Home-ladder" src="../public/images/pinkB.svg" alt="梯子" />
                        </div>
                    </div>

                </section>
                <section id="Home-page-4">
                    <div className="Home-content-6">
                        <p>不只是學習<br />
                            更是一場充滿樂趣的探索之旅</p>
                    </div>
                    <div className="Home-content-bk-all">
                        <div className="Home-content-bk-1">
                            <div className="Home-content-7">
                                <p>
                                    \ 讓學程式成為習慣 /
                                </p>
                            </div>
                            <div className="Home-content-8">
                                <p>\ 好玩又好學 /</p>
                            </div>
                            <img className="Home-content-img" src="../public/images/pinkA.svg" alt="" />
                        </div>
                        <div className="Home-content-bk-2">
                                <img className='Home-content-bk-2-img' src="../public/images/homeIntroA.jpg" alt="" />
                            <p className="Home-content-9">程式結合單字學習</p>
                            <p className="Home-content-10">寓教於樂的學習樂園
                                <br />
                                讓知識充滿溫度</p>

                        </div>


                        <div className="Home-content-bk-3">
                            <img className='Home-content-bk-3-img' src="../public/images/homeIntroB.jpg" alt="" />
                            <p className="Home-content-11">情緒覺察</p>
                            <p className="Home-content-12">學習後選擇心情，一起分享成就感
                                <br />
                                加入程式探索的行列</p>
                        </div>
                    </div>

                </section>
                <section id="Home-page-5">


                    <div className="Home-content-bk-4">
                        <div className="Home-content-15">
                            <p className="Home-content-13">還在猶豫什麼？
                                <br /> 程式世界等著你去探索 ！</p>
                        </div>
                        <div className="Home-content-bk-5">
                            <Link to='/LearnSelect'>
                                <img className="Home-btn" src="../public/images/btn.png" alt=""
                                    ref={startRef}
                                    onMouseUp={startMouseUp}
                                    onMouseDown={startMouseDown}
                                />
                            </Link>
                            <img className="Home-greenIp" src="../public/images/greenB.svg" alt="" />
                        </div>
                    </div>
                </section>

            </div>
        </>

    )

}
export default Home