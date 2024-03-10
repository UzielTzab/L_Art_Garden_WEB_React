import Carousel1 from '../assets/images/carouselImages/carousel1.jpg';
import Carousel2 from '../assets/images/carouselImages/carousel2.jpg';
import Carousel3 from '../assets/images/carouselImages/carousel3.jpg';

import flower1 from '../assets/images/flowers/flower1.jpg'
import flower2 from '../assets/images/flowers/flower2.jpg'
import flower3 from '../assets/images/flowers/flower3.jpg'
import flower4 from '../assets/images/flowers/flower4.jpg'
import flower5 from '../assets/images/flowers/flower5.jpg'
import flower6 from '../assets/images/flowers/flower6.jpg'

import { ProductCard } from './ProductCard';

export function ListProducts()
{
    return(
        <main>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={Carousel1} className="d-block w-100" alt="Una tienda de flores"></img>
                </div>
                <div className="carousel-item">
                <img src={Carousel2} className="d-block w-100" alt="Una tienda de flores"></img>
                </div>
                <div className="carousel-item">
                <img src={Carousel3} className="d-block w-100" alt="Una tienda de flores"></img>
                </div>
            </div>
            <button className="carousel-control-prev d-none d-lg-block" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next d-none d-lg-block" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            <div className="contenedor-principal">
                <div className="contenedor-secundario p-3">
                    <div className="row CA mx-auto">
                        <div className="col text-center CO">
                            <div className="row CE">
                                <div className="col-xl-12 text-center mx-auto">
                                    <h2 className="fw-bold" style={{color: '#ffb800'}}>Flores Recientes</h2>
                                </div>
                                <ProductCard description="Clásico Amor con 24 Rosas Rojas" price="$930.00 MXN" urlImage={flower1}/>
                                <ProductCard description="8 Rosas y Mini Rosas en Jarrón" price="$590.00 MXN" urlImage={flower2}/>
                                <ProductCard description="Ramo con Rosas Rosa Claro y Margaritas" price="$420.00 MXN" urlImage={flower3}/>
                                <ProductCard description="Ramo de 8 Rosas y Mini Rosas" price="$690.00 MXN" urlImage={flower4}/>
                                <ProductCard description="Arreglo de Stargazers y Rosas" price="$790.00 MXN" urlImage={flower5}/>
                                <ProductCard description="Kit Cumpleañero con Pastel y Globos" price="$1,119.00 MXN" urlImage={flower6}/>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
          
        </main>
    );
}


{/* 
<div className="col-md-6 col-lg-6 col-xl-3 mt-5 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/Carousel1.jpg" className="card-img-top" alt="24 Rosas Rojas"></img>
                        <div className="card-body">
                            <h5 className="card-title">Clásico Amor con 24 Rosas Rojas</h5>
                            <p className="card-text">$930.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mt-5 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/Carousel2.jpg" className="card-img-top" alt=" 8 Rosas y Mini Rosas"></img>
                        <div className="card-body">
                            <h5 className="card-title">8 Rosas y Mini Rosas en Jarrón</h5>
                            <p className="card-text">$590.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mt-5 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/Carousel3.jpg" className="card-img-top" alt="Rosas Rosa y Margaritas"></img>
                        <div className="card-body">
                            <h5 className="card-title">Ramo con Rosas Rosa Claro y Margaritas</h5>
                            <p className="card-text">$420.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mt-5 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower4.jpg" className="card-img-top" alt="8 Rosas y Mini Rosas"></img>
                        <div className="card-body">
                            <h5 className="card-title">Ramo de 8 Rosas y Mini Rosas</h5>
                            <p className="card-text">$690.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower5.jpg" className="card-img-top" alt="Stargazers y Rosas"></img>
                        <div className="card-body">
                            <h5 className="card-title">Arreglo de Stargazers y Rosas</h5>
                            <p className="card-text">$790.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower6.jpg" className="card-img-top" alt="Kit Cumpleañero"></img>
                        <div className="card-body">
                            <h5 className="card-title">Kit Cumpleañero con Pastel y Globos</h5>
                            <p className="card-text">$1,119.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower7.jpg" className="card-img-top" alt="Orquídea Blanca"></img>
                        <div className="card-body">
                            <h5 className="card-title">Orquídea Blanca en Maceta de Cristal</h5>
                            <p className="card-text">$1,110.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower8.jpg" className="card-img-top" alt="24 Rosas Rosa Claro"></img>
                        <div className="card-body">
                            <h5 className="card-title">24 Rosas Rosa Claro en Maceta</h5>
                            <p className="card-text">$930.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower9.jpg" className="card-img-top" alt="5 Tulipanes Rojos"></img>
                        <div className="card-body">
                            <h5 className="card-title">Ramo de 5 tulipanes rojos con campanita</h5>
                            <p className="card-text">$790.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower10.jpg" className="card-img-top" alt="6 Rosas y Lilys"></img>
                        <div className="card-body">
                            <h5 className="card-title">Ternura con 6 Rosas y Lilys en Jarrón</h5>
                            <p className="card-text">$600.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower11.jpg" className="card-img-top" alt="Rosas Rosas y Alstroemerias"></img>
                        <div className="card-body">
                            <h5 className="card-title">Rosas Rosas y Alstroemerias en Jarrón</h5>
                            <p className="card-text">$640.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower12.jpg" className="card-img-top" alt="Rosas y Lilys"></img>
                        <div className="card-body">
                            <h5 className="card-title">Ramo con Rosas, Lilys y Decoraciones</h5>
                            <p className="card-text">$389.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower13.jpg" className="card-img-top" alt="12 Rosas Rojas"></img>
                        <div className="card-body">
                            <h5 className="card-title">Clásico Amor con 12 Rosas Rojas</h5>
                            <p className="card-text">$720.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower14.jpg" className="card-img-top" alt="100 Rosas Rosa"></img>
                        <div className="card-body">
                            <h5 className="card-title">100 Rosas Rosa Intenso en Jarrón</h5>
                            <p className="card-text">$3,430.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower15.jpg" className="card-img-top" alt="12 Rosas Intenso"></img>
                        <div className="card-body">
                            <h5 className="card-title">Arreglo de 12 Rosas Intenso en Jarrón</h5>
                            <p className="card-text">$930.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
                        <div className="card mx-auto" style={{width: '18rem'}}>
                        <img src="flowers/flower16.jpg" className="card-img-top" alt="20 Tulipanes Rojos"></img>
                        <div className="card-body">
                            <h5 className="card-title">20 Tulipanes Rojos en Jarrón</h5>
                            <p className="card-text">$1,600.00 MXN</p>
                        </div>
                        </div>
                    </div>
                    </div> */}