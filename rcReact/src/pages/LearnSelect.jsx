import "../../css/LearnSelect.css"

export default function LearnSelect() {
    return (
        <>
            <header id="topbar">
                <div className="logo">
                    <h1 class="logo"><a href="./index.html"><img src="/images/logo.png" alt="rightCode" title="rightCode" /></a></h1>
                </div>
                <div className="learnBtn">
                    <figure><img src="/images/hamBtn.svg" alt="" /></figure>
                </div>





            </header>
            <div id="codeCourse">
                <div id="codePic">
                    <figure><img className="tier4" src="/images/selectCodeA.svg" alt="" /></figure>
                    <figure><img className="tier3" src="/images/red.svg" alt="" /></figure>
                    <figure><img className="tier2" src="/images/selectCodeB.svg" alt="" /></figure>
                    <figure><img className="tier1a" src="/images/pinkA.svg" alt="" /></figure>
                    <figure><img className="tier1b" src="/images/greenA.svg" alt="" /></figure>
                    <figure><img className="tier1c" src="/images/blueA.svg" alt="" /></figure>
                </div>

                <div id="course">
                    <div className="selectHTML">
                        <figure><img src="/images/learnSelectHTML.svg" alt="" /></figure>
                        <p>HTML</p>
                    </div>
                    <div className="selectCSS">
                        <figure><img src="/images/learnSelectCSS.svg" alt="" /></figure>
                        <p>CSS</p>
                    </div>
                </div>
            </div>

        </>
    )
}