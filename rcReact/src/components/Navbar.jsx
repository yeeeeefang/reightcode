import '../../src/assets/css/Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div>
                <div className="navBarBk">
                    <div className="navlogo">

                        {/* <Link to=''>1234</Link> Link 打了之後出不來 */}
                        <a href="./"></a>
                        <img src="../public/images/logo.png" alt="" />
                    </div>
                    <div className="navBarBk-1">
                        <div className="navlearningBtn">
                            <img src="../public/images/navBtn.png" alt="" />
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
export default Navbar