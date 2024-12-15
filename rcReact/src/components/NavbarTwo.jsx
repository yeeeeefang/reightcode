import '../../src/assets/css/navbar.css'

function NavbarTwo() {
    return (
        <>
            <section id="NavbarTwo-page-1">
                <div className="navBarBk">
                    <div className="navlogo">
                        <Link to='/'><img src="../public/images/logo.png" alt="" /></Link>                    </div>
                    <div className="navBarBk-1">
                        {/* <div className="learningBtn">
                            <img src="../public/images/navBtn.png" alt="" />
                        </div> */}
                        <div className="navhamBtn">
                            <img src="../public/images/hamBtn.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NavbarTwo