export function Footer()
{
    return(
        <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5>Información de Contacto</h5>
              <p>Dirección: 123 Calle Principal, Mérida, Yucatán</p>
              <p>Teléfono: +123 456 789</p>
              <p>Correo electrónico: lart.gardenots7@gmail.com</p>
            </div>
            <div className="col-lg-6">
              <h5>Síguenos en las redes sociales</h5>
              <ul className="list-unstyled">
                <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}