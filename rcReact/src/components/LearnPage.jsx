import LearnPageExp from "./LearnPageExp"
import LearnPagePerson from "./LearnPagePerson"
import '../assets/css/LearnPage.css'
import CircularProgress from "./CircularProgress"

function LearnPage() {
    return (
        <>
            <div className="LEP-bk-big">
                <div className="LEP-bk-1">
                    <LearnPagePerson />
                    <LearnPageExp />
                </div>
                <div className="LEP-bk-2">
                    <CircularProgress />
                </div>
            </div>

        </>
    )
}
export default LearnPage