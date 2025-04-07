
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navHeader">
                <div className="navButton">
                    <a className="navLink" href="#/">HOME</a>
                </div>
                <div className="navButton">
                    <a className="navLink" href="#/music">MUSIC</a>
                </div>
                <div className="navButton">
                    <a className="navLink" href="#/thoughts">THOUGHTS</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;