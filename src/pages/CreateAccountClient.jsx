import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function CreateAccountClient()
{
    return(
        <>
            <Header/>
            <div className="account-container d-flex justify-content-center p-3">
                <div className="row d-flex justify-content-center">
                    <div className="account-main col-sm-6 col-md-6 col-10 p-3">
                    <div className="row">
                        <div className="col-xl-7 col-10 d-grid gap-2 mx-auto mb-3">
                        <button type="button" className="btn btn-danger">
                            <i className="bi bi-google me-1" style={{color: '#ffffff'}}></i>
                            Continuar con Google
                        </button>
                        </div>
                        <form className="row needs-validation mx-auto" novalidate>
                        <div className="col-xl-8 mb-2 mx-auto">
                            <div className="account-line"></div>
                        </div>
                        <div className="col-xl-8 mb-3 mx-auto">
                            <label htmlFor="validationUsername" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="validationUsername" placeholder="Ingresa tu nombre"
                            required></input>
                            <div className="invalid-feedback ps-1">
                            Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="col-xl-8 mb-3 mb-3 mx-auto">
                            <label for="validationLastName" className="form-label">Apellido</label>
                            <input className="form-control" id="validationLastName" placeholder="Ingresa tu apellido" required></input>
                            <div className="invalid-feedback ps-1">
                            Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="col-xl-8 mb-3 mb-3 mx-auto">
                            <label for="validationAge" className="form-label">Edad</label>
                            <input className="form-control" id="validationAge" placeholder="Ingresa tu edad" required></input>
                            <div className="invalid-feedback ps-1">
                            Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="col-xl-8 mb-3 mx-auto">
                            <label for="validationPhone" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="validationPhone" placeholder="Ingresa tu teléfono" required></input>
                            <div className="invalid-feedback ps-1">
                            Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="col-xl-8 mb-2 mx-auto">
                            <div className="account-line"></div>
                        </div>
                        <div className="col-xl-8 mb-3 mb-3 mx-auto">
                            <label for="validationEmail" className="form-label">Correo Electrónico</label>
                            <input type="text" className="form-control" id="validationEmail" placeholder="Ingresa tu correo" required></input>
                            <div className="invalid-feedback ps-1">
                            Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="col-xl-8 mb-3 mb-3 mx-auto">
                            <label for="validationPassword" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="validationPassword" placeholder="Ingresa tu contraseña"
                            required></input>
                            <div className="invalid-feedback ps-1">
                            Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="col-xl-8 mb-2 mx-auto">
                            <div className="account-line"></div>
                        </div>
                        <div className="col-xl-8 mb-3 mb-5 mx-auto">
                            <label for="validationGender" className="form-label">Género</label>
                            <select className="form-select" id="validationGender" required>
                            <option selected disabled></option>
                            <option>
                                Mujer
                            </option>
                            <option>
                                Hombre
                            </option>
                            </select>
                            <div className="invalid-feedback ps-1">
                            Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="d-flex justify-content-md-center col-md-6 mb-5">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                            <label className="form-check-label" for="invalidCheck">
                                Aceptar términos y condiciones
                            </label>
                            <div className="invalid-feedback">
                                Debes aceptar antes de enviar.
                            </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-md-center col-md-6 mb-5">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                            <label className="form-check-label" for="invalidCheck">
                                Aceptar términos y condiciones
                            </label>
                            <div className="invalid-feedback">
                                Debes aceptar antes de enviar.
                            </div>
                            </div>
                        </div>
                        </form>
                        <div className="row mx-auto">
                        <div className="col-xl-7 col-10 d-grid gap-2 mb-3 mx-auto">
                            <a href="#" id="btnLogin" className="btn btn-warning" role="button">Crear cuenta</a>
                        </div>
                        <div className="col-xl-7 col-10 d-grid gap-2 mb-3 mx-auto">
                            <a href="file:///D:/Aplicaciones%20Web%20para%2014.0/Elecci%C3%B3n-Cuenta/index.html"
                            className="btn btn-outline-warning" role="button">Ya poseo una cuenta</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}