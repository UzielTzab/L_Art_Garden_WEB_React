import '../styles/Header.css';

export function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg custom-navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white fs-5"
                            href="/Home">L-Art<br></br> Garden</a>
                        <div className="d-flex align-items-center">
                            <button className="navbar-toggler me-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav2"
                                aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="d-lg-none">
                                <a href="/Cart">
                                    <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: '#59431fff' }}></i>
                                </a>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse nav-menu-list justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-white fs-5 active" aria-current="page"
                                        href="/MyAccount">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white fs-5 active" aria-current="page" href="/CatalogueFlowerShops">Catálogo de Florerias</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white fs-5 active" aria-current="page" href="/Contact">Contacto</a>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end">
                            <a href="#" className="nav-circle">
                                <i className="fa-solid fa-magnifying-glass fa-xl" style={{ color: '#ffb800' }}></i>
                            </a>
                            <div className="p-2">
                                <div className="nav-line"></div>
                            </div>
                            <div className="dropdown-container">
                                <button className="nav-circle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fa-solid fa-user fa-xl" style={{ color: '#ffb800' }}></i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item"
                                        href="/AccountSelection">Cuenta</a>
                                    </li>
                                    <li><a className="dropdown-item"
                                        href="#">Mis pedidos</a>
                                    </li>
                                    <li><a className="dropdown-item"
                                        href="#">Notificaciones</a>
                                    </li>
                                    <div className="dorowpdown-division"></div>
                                    <li><a className="dropdown-item"
                                        href="#">Cerrar Sesión</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-2">
                                <div className="nav-line"></div>
                            </div>
                            <a href="/Cart" className="nav-circle">
                                <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: '#ffb800' }}></i>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="offcanvas offcanvas-start" id="navbarNav2">
                    <div className="offcanvas-header d-flex justify-content-end">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white fs-6 active" aria-current="page"
                            href="/Account">
                            <i className="fa-solid fa-circle-user fa-lg"></i>
                            <span>Cuenta</span>
                            </a>
                        </li>
                        </ul>
                        <ul className="navbar-nav navbar-nav-mobile">
                        <li className="nav-item">
                            <form className="nav-search flex-grow-1 d-lg-none" role="search">
                            <i className="fa-solid icon-search fa-magnifying-glass fa-lg" style={{color: '#abababff'}}></i>
                            <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search"
                                style={{paddingLeft: '40px'}}></input>
                            </form>
                            <a className="nav-link text-white fs-6 active" aria-current="page" href="#">
                            <i className="fa-solid fa-house fa-lg"></i>
                            <span>Inicio</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fs-6 active" aria-current="page" href="#">
                            <i className="fa-solid fa-shop fa-lg"></i>
                            <span>Catálogo de Florerias</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fs-6 active" aria-current="page" href="#">
                            <i className="fa-solid fa-phone fa-lg"></i>
                            <span>Contacto</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
            </header>
           
        </>
    );
}
