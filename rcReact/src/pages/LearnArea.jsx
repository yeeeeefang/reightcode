import '../assets/scss/LearnArea.scss';
import LearnArea1 from "../components/LearnArea1";
import LearnArea2 from '../components/LearnArea2';
import LearnArea3 from '../components/LearnArea3';
import LearnArea4 from '../components/LearnArea4';
import NavbarBack from '../components/NavbarBack';
import Footer from '../components/Footer';

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
                <div>
                    <LearnArea4/>
                </div>
<Footer/>
            </div>

        </>
    )
}
export default LearnArea