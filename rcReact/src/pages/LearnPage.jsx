import CircularProgress from "../components/CircularProgress"
import LearnCard from "../components/LearnCard"
import LearnPageExp from "../components/LearnPageExp"
import LearnTitle from "../components/LearnTitle"
import "../assets/css/LearnPage.css"
import LearnPagePerson from "../components/LearnPagePerson"
import NavbarBack from "../components/NavbarBack"


function LearnPage() {
    return (
        <>
            <section id="LEP-Home">
            <NavbarBack/>

                <div id="LEP-bk-big">
                    <div className="LEP-title">
                        <LearnTitle />
                    </div>
                    <div className="LEP-PersonCard">
                        <div className="LEP-personAll">
                            <div className="LEP-PersonEXP">
                                <div className="LEP-PE">
                                    <div className="LEP-Person"><LearnPagePerson /></div>
                                    <div><LearnPageExp /></div>
                                </div>
                                <div><CircularProgress /></div>
                            </div>
                        </div>
                        <div className="LEP-card">
                            <LearnCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LearnPage