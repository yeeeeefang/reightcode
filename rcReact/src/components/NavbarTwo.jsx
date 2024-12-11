import '../../src/assets/css/navbar.css'

function NavbarTwo() {
    return (
        <>
            <section id="NavbarTwo-page-1">
                <div className="navBarBk">
                    <div className="logo">
                        <img src="../public/images/logo.png" alt="" />
                        {/* <Link to=''>1234</Link> Link 打了之後出不來 */}

                    </div>
                    <div className="navBarBk-1">
                        {/* <div className="learningBtn">
                            <img src="../public/images/navBtn.png" alt="" />
                        </div> */}
                        <div className="hamBtn">
                            <img src="../public/images/hamBtn.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NavbarTwo