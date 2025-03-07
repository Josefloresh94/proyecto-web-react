import logoImage from "../../assets/images/logo.png";

export function Nav(){
    return (
        <nav>
            <div className="container nav-container">
                <div className="logo">
                    <img src={logoImage} alt="Logo Image"/>
                </div>
                <span className="btn-nav" id="btn-menu">Menu</span>
                <ul>
                    <li><a href="/">Demos</a></li>
                    <li><a href="/">Pages</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Blocks</a></li>
                    <li><a href="/">Documentation</a></li>
                    <span className="btn-nav" id="btn-close">Close</span>
                </ul>
            </div>
        </nav>
    )
}