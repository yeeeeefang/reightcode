import '../../src/assets/css/Navbar.css'
import { Link } from "react-router-dom"

function NavbarBack() {
    return (
        <>
            <div>
                <div className="navBarBk">
                    <div className="navlogo">

                        {/* <Link to=''>1234</Link> Link 打了之後出不來 */}
                        <Link to='/'><img src="../public/images/logo.png" alt="" /></Link>
                    </div>
                    <div className="navBarBk-1">
                        <div className="navlearningBtn">
                            <img src="../public/images/navBtnB.png" alt="" />
                        </div>
                        <div className="navhamBtn">
                            <img src="../public/images/hamBtn.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavbarBack