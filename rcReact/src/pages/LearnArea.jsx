import '../assets/scss/LearnArea.scss';
import LearnArea1 from "../components/LearnArea1";
import LearnArea2 from '../components/learnArea2';
import NavbarBack from '../components/NavbarBack';

function LearnArea() {
    return (
        <>
            <div id="learnArea-a">
                <div className='lanav'>
                    <NavbarBack />
                </div>
                <div>
                    <LearnArea1 />
                    <LearnArea2 />
                </div>

            </div>

        </>
    )
}
export default LearnArea