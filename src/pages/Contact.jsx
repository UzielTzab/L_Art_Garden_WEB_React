import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export function Contact() {
  return (
    <>
      <Header/>
      <main>
        <div className="login-container d-flex justify-content-center p-3">
          <div className="row d-flex justify-content-center">
            <div className="login-main col-sm-6 col-md-6 col-10 p-3">
              <div className="container text-center">
                <label htmlFor="validationEmail" className="form-label fw-bold fs-4">¡Háblanos! ¡Estamos aquí para ti!</label>
              </div>
              <div className="row">
                <form className="row needs-validation mx-auto" noValidate>
                  <div className="col-xl-8 mb-2 mx-auto">
                    <div className="login-line"></div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 mb-3 mx-auto">
                        <label htmlFor="validationName" className="form-label fs-5 text-left">Nombre</label>
                        <input type="text" className="form-control" id="validationName" placeholder="Ingresa tu nombre" required />
                        <div className="invalid-feedback ps-1">
                          Este campo es obligatorio.
                        </div>
                      </div>
                      <div className="col-xl-6 mb-3 mx-auto">
                        <label htmlFor="validationNumber" className="form-label fs-5 text-left">Teléfono</label>
                        <input type="password" className="form-control" id="validationNumber" placeholder="Ingresa tu teléfono" required />
                        <div className="invalid-feedback ps-1">
                          Este campo es obligatorio.
                        </div>
                      </div>
                      <div className="col-xl-6 mb-3 mx-auto">
                        <label htmlFor="validationEmail" className="form-label fs-5 text-left">Email</label>
                        <input type="text" className="form-control" id="validationEmail" placeholder="Ingresa tu correo" required />
                        <div className="invalid-feedback ps-1">
                          Este campo es obligatorio.
                        </div>
                      </div>
                      <div className="col-xl-6 mb-3 mx-auto">
                        <label htmlFor="validationAffair" className="form-label fs-5 text-left">Asunto</label>
                        <input type="text" className="form-control" id="validationAffair" placeholder="Ingresa el asunto" required />
                        <div className="invalid-feedback ps-1">
                          Este campo es obligatorio.
                        </div>
                      </div>
                      <div className="col-xl-12 mb-3 mx-auto">
                        <label htmlFor="validationMessage" className="form-label fs-5 text-left">Mensaje</label>
                        <textarea
                          className="form-control h-90"
                          id="validationMessage"
                          placeholder="Escribe tu mensaje"
                          rows="5"
                          style={{ resize: 'none' }} // Convert style to an object
                          required
                        ></textarea>
                        <div className="invalid-feedback ps-1">
                          Este campo es obligatorio.
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row mx-auto mb-4">
                  <div className="col-xl-7 col-10 d-grid gap-2 mx-auto">
                    <button id="btnLogin" type="button" className="btn btn-warning">Enviar Mensaje</button>
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
