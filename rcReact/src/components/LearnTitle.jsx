import { useState } from 'react';
import '../assets/css/LearnTitle.css'

function LearnTitle() {
    const HtmlClassList = [
        {
            title: "HTML基礎知識",
            children: [
                { title: "｜定義文檔的標籤" },
                { title: "｜定義標題、描述與資源" },
                { title: "｜引用外部資源與連結" },
            ],
        },
        {
            title: "文本內容",
            children: [
                { title: "｜標題與段落" },
                { title: "｜文字樣式-1" },
                { title: "｜文字樣式-2" },
                { title: "｜短語和語義" },
                { title: "｜引用" },
                { title: "｜分隔、刪除與插入" },
                { title: "｜超連結和導覽列" },
            ],
        },
        {
            title: "多媒體內容",
            children: [
                { title: "｜圖像與圖例" },
                { title: "｜音檔與影片" },
                { title: "｜嵌入內容" },
            ],
        },
        {
            title: "表格與表單",
            children: [
                { title: "｜表格行列" },
                { title: "｜結構與標題" },
                { title: "｜表單元素-1" },
                { title: "｜表單元素-2" },
            ],
        },
        {
            title: "列表與頁面",
            children: [
                { title: "｜列表標籤" },
                { title: "｜節內容" },
            ],
        },
        {
            title: "內嵌、無語意標籤與模組化",
            children: [
                { title: "｜內嵌標籤" },
                { title: "｜無語意標籤" },
                { title: "｜程式和模組化" },
            ],
        },
        {
            title: "HTML5 新增標籤",
            children: [
                { title: "｜結構" },
                { title: "｜媒體" },
                { title: "｜表單擴展" },
            ],
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(null); // 用于追踪当前选中的 Html-H2

    const handleTitleClick = (index) => {
        setSelectedIndex(index); // 设置选中的标题索引
    };

    return (
        <>
            <section id='HtmlClassTitle-all'>
                <h1 className='Html-H1'>HTML</h1>
                <div className='Html-title-all'>
                    {HtmlClassList.map((Class, index) => (
                        <div key={index} className='Html-Class'>
                            <div >
                                <h2 className={`Html-H2 ${selectedIndex === index ? 'selected' : ''}`}
                                    onClick={() => handleTitleClick(index)}>{Class.title}</h2>
                            </div>
                            <div className='Html-Span'>
                                {Class.children.map((child, childIndex) => (
                                    <span key={childIndex}>{child.title} <br></br></span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}
export default LearnTitle