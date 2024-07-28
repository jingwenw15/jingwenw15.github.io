
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="line-left"></div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
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
            <div className="line-right"></div>
        </nav>
    );
}

export default Navbar;