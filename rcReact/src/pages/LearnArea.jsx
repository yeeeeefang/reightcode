import '../assets/scss/LearnArea.scss';
import LearnArea1 from "../components/LearnArea1";
import LearnArea2 from '../components/LearnArea2';
import LearnArea3 from '../components/LearnArea3';
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
                    <LearnArea2/>
                    <LearnArea3/>
                </div>

            </div>

        </>
    )
}
export default LearnArea