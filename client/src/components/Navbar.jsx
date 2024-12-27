
const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg mb-4 navbar-dark bg-dark shadow">
            <div className="container-fluid mx-3">
                <a className="navbar-brand" href="#">Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-1">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link" href="#">Add Product</a>
                        </li>
                    </ul>

                    <button className="btn btn-outline-info">Logout</button>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;