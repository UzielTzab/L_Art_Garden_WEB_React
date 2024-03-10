import { Header } from "../components/Header";
import { CardFromCart } from "../components/CardFromCart";
import flower1 from '../assets/images/flowers/flower1.jpg'
import { Footer } from "../components/Footer";
export function Cart() {
  return (
    <>
      <Header />
      <div className="offcanvas offcanvas-start" id="navbarNav2">
        <div className="offcanvas-header d-flex justify-content-end">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white fs-6 active" aria-current="page" href="#">
                <i className="fa-solid fa-circle-user fa-lg"></i>
                <span>Cuenta</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-mobile">
            <li className="nav-item">
              <form className="nav-search flex-grow-1 d-lg-none" role="search">
                <i className="fa-solid icon-search fa-magnifying-glass fa-lg" style={{ color: '#abababff' }}></i>
                <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search"
                  style={{ paddingLeft: '40px' }} />
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
      <div className="container-fluid d-flex header-bottom-container align-items-center justify-content-center">
        <div className="text-white fs-1 fw-bold">
          CARRITO DE COMPRA
        </div>
      </div>

      <main>
        <div className="container py-5">
          <h2 className="mb-4">Carrito de Compra</h2>
          <div className="row">
            <div className="col-md-8">

                <CardFromCart description="Rosas y Alstroemerias en jarrón" price="50.00" quantity="2" total="100.00" fileImage={flower1}/>
                <CardFromCart description="Rosas y Alstroemerias en jarrón" price="50.00" quantity="2" total="100.00" fileImage={flower1}/>
                <CardFromCart description="Rosas y Alstroemerias en jarrón" price="50.00" quantity="2" total="100.00" fileImage={flower1}/>
                <CardFromCart description="Rosas y Alstroemerias en jarrón" price="50.00" quantity="2" total="100.00" fileImage={flower1}/>
                <CardFromCart description="Rosas y Alstroemerias en jarrón" price="50.00" quantity="2" total="100.00" fileImage={flower1}/>
                <CardFromCart description="Rosas y Alstroemerias en jarrón" price="50.00" quantity="2" total="100.00" fileImage={flower1}/>
                <CardFromCart description="Rosas y Alstroemerias en jarrón" price="50.00" quantity="2" total="100.00" fileImage={flower1}/>

             
                
              
              {/* Additional card items go here */}
            </div>
            <div className="col-md-4">
              <div className="sticky">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Resumen del Pedido</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Subtotal:
                        <span>$200.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Envío:
                        <span>$10.00</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Total:s
                        <span>$210.00</span>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-primary mt-3">Proceder al Pago</button>
                    <button type="button" className="btn btn-primary mt-3">Seguir comprando</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>

      
    </>
  );
}
