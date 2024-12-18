import "../assets/css/LearnSelect.css"
import NavbarTwo from "../components/NavbarTwo"

export default function LearnSelect() {
    return (
        <>
            <section id="LearnSelectAllpage">
                <header id="topbar">
                    <NavbarTwo/>
                </header>
                <div id="codeCourse">
                    <section id="codePic">
                        <img className="tier4" src="/images/selectCodeA.svg" alt="" />
                        <img className="tier3" src="/images/red.svg" alt="" />
                        <img className="tier2" src="/images/selectCodeB.svg" alt="" />
                        <img className="tier1a" src="/images/pinkA.svg" alt="" />
                        <img className="tier1b" src="/images/greenA.svg" alt="" />
                        <img className="tier1c" src="/images/blueA.svg" alt="" />
                    </section>

                    <section id="course">
                        <div className="select HTML">
                            <a href=""><h3>HTML</h3></a>
                        </div>
                        <div className="select CSS">
                            <a href=""><h3>CSS</h3></a>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}