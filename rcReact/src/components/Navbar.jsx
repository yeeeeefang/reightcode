import '../../src/assets/css/Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <section id="Navebar-page-1">
                <div className="navBarBk">
                    <div className="logo">
                        
                        {/* <Link to=''>1234</Link> Link 打了之後出不來 */}
                        <a href="./"></a>
                        <img src="../public/images/logo.png" alt="" />
                    </div>
                    <div className="navBarBk-1">
                        <div className="learningBtn">
                            <img src="../public/images/navBtn.png" alt="" />
                        </div>
                        <div className="hamBtn">
                            <img src="../public/images/hamBtn.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Navbar