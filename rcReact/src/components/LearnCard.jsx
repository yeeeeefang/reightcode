import { useEffect, useRef, useState } from 'react';
import '../assets/css/LearnCard.css'
function LearnCard({ selectedSection }) {
    
    const CardTitle = [
        {
            id: "section-0",
            title: "HTML基礎知識",
            children: [
                {
                    title: "定義文檔的標籤",
                    imgSrc: "../public/images/learnPage8.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "定義標題、描述與資源",
                    imgSrc: "../public/images/learnPage9.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "引用外部資源與連結",
                    imgSrc: "../public/images/learnPage10.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
            ],
        },
        {
            id: "section-1",
            title: "文本內容",
            children: [
                {
                    title: "標題與段落",
                    imgSrc: "../public/images/learnPage1.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "文字樣式-1",
                    imgSrc: "../public/images/learnPage2.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "文字樣式-2",
                    imgSrc: "../public/images/learnPage3.svg",
                    tags: ["#問題解決", "#決策能力"],
                },
                {
                    title: "短語和語義",
                    imgSrc: "../public/images/learnPage4.svg",
                    tags: ["#問題解決", "#創意思維"],
                },
                {
                    title: "引用",
                    imgSrc: "../public/images/learnPage5.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "分隔、刪除與插入",
                    imgSrc: "../public/images/learnPage6.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "超連結和導覽列",
                    imgSrc: "../public/images/learnPage7.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
            ],
        },
        {
            id: "section-2",
            title: "多媒體內容",
            children: [
                {
                    title: "圖像與圖例",
                    imgSrc: "../public/images/learnPage11.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "音檔與影片",
                    imgSrc: "../public/images/learnPage12.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "嵌入內容",
                    imgSrc: "../public/images/learnPage13.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
            ],
        },
        {
            id: "section-3",
            title: "表格與表單",
            children: [
                {
                    title: "表格行列",
                    imgSrc: "../public/images/learnPage14.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "結構與標題",
                    imgSrc: "../public/images/learnPage15.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "表單元素-1",
                    imgSrc: "../public/images/learnPage16.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "表單元素-2",
                    imgSrc: "../public/images/learnPage17.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
            ],
        },
        {
            id: "section-4",
            title: "列表與頁面",
            children: [
                {
                    title: "列表標籤",
                    imgSrc: "../public/images/learnPage18.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "節內容",
                    imgSrc: "../public/images/learnPage19.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
            ],
        },
        {
            id: "section-5",
            title: "內嵌、無語意標籤與模組化",
            children: [
                {
                    title: "內嵌標籤",
                    imgSrc: "../public/images/learnPage20.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "無語意標籤",
                    imgSrc: "../public/images/learnPage21.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "程式和模組化",
                    imgSrc: "../public/images/learnPage22.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
            ],
        },
        {
            id: "section-6",
            title: "HTML5 新增標籤",
            children: [
                {
                    title: "結構",
                    imgSrc: "../public/images/learnPage23.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "媒體",
                    imgSrc: "../public/images/learnPage24.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
                {
                    title: "表單擴展",
                    imgSrc: "../public/images/learnPage25.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                },
            ],
        },
    ];


    const LeftRef = useRef(null)
    const LeftImgMouseDown = () => {
        LeftRef.current.src = '../public/images/learnPageLeft_hover.svg'
    }
    const LeftImgMouseUp = () => {
        LeftRef.current.src = '../public/images/learnPageLeft.svg'
    }

    const RightRef = useRef(null)
    const RightImgMouseDown = () => {
        RightRef.current.src = '../public/images/learnPageRight_hover.svg'
    }
    const RightImgMouseUp = () => {
        RightRef.current.src = '../public/images/learnPageRight.svg'
    }

    const [CardItem, setCardItem] = useState(0);
    const cardsToShow = 3;

    const changLeft = () => {
        setCardItem(prev => Math.max(prev - 1, 0));
    };

    const chalgRight = () => {
        setCardItem(prev => Math.min(prev + 1, chooseCard.length - cardsToShow));
    };

    const chooseCard = CardTitle[selectedSection]?.children || [];
    const visibleCards = chooseCard.slice(CardItem, CardItem + cardsToShow);


    useEffect(() => {
        setCardItem(0);
    }, [selectedSection]);

    return (
        <>
            <section id='LearnPageAll'>
                <div className='LearnPageLeft-1' onClick={changLeft} >
                    <img src="../public/images/learnPageLeft.svg" alt="Previous"
                        ref={LeftRef}
                        onMouseDown={LeftImgMouseDown}
                        onMouseUp={LeftImgMouseUp}
                    />
                </div>
                <div className='Learn-Card-all'>
                    {visibleCards.map((child, index) => (
                        <div className="Learn-Card-1" key={index}>
                            <div className="Learn-Card-bk-1">
                                <div className="Learn-Card-icon-1">
                                    <img src="../public/images/learnPageLeftHeart.svg" alt="icon" />
                                </div>
                                <div className="Learn-Card-img-1">
                                    <img src={child.imgSrc} alt={child.title} />
                                </div>
                                <div className="Learn-Card-Content-1">
                                    <p>{child.title}</p>
                                </div>
                                <div className="Learn-Card-Content-2">
                                    {child.tags.map((tag, tagIndex) => (
                                        <p key={tagIndex}>{tag}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='LearnPageLeft-2' onClick={chalgRight}>
                    <img src="../public/images/learnPageRight.svg" alt="Next"
                        ref={RightRef}
                        onMouseDown={RightImgMouseDown}
                        onMouseUp={RightImgMouseUp}
                    />
                </div>
            </section>
        </>
    )


}
export default LearnCard