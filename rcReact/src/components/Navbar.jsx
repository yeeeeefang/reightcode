import '../../src/assets/css/Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div>
                <div className="navBarBk">
                    <div className="navlogo">

                        {/* <Link to=''>1234</Link> Link 打了之後出不來 */}
                        <Link to='/'><img src="../public/images/logo.png" alt="" /></Link>
                    </div>
                    <div className="navBarBk-1">
                        <Link to='LearnSelect'>
                            <div className="navlearningBtn">
                                <img src="../public/images/navBtn.png" alt="" />
                            </div>
                        </Link>
                        <Link to='Hamburger'>
                            <div className="navhamBtn">
                                <img src="../public/images/hamBtn.svg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar