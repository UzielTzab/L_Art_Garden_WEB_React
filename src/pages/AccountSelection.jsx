import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function AccountSelection()
{
    return(
        <>
            <Header/>
            
            <main>
                <div className="election-container d-flex justify-content-center">
                    <div className="p-4">
                        <div className="row CA mx-auto">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6 CO mx-auto">
                            <div className="row border border-secondary-subtle">
                            <div className="col-md-12 col-12 text-center mt-4 mb-4">
                                <i className="fa-solid fa-user-group fa-6x" style={{color: '#ffb800'}}></i>
                            </div>
                            <div className="col-md-5 col-lg-5 col-xl-5 text-center fw-bold mb-3 mx-auto">
                                <p>Para crear tu cuenta, elige una de estas opciones</p>
                            </div>
                            <div className="col-md-12 text-center mb-4">
                                <p>Tomate tu tiempo.</p>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-7 d-grid gap-2 mb-3 mx-auto">
                                <a href="/CreateAccountClient"
                                className="btn btn-warning" role="button">Crear cuenta personal</a>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-7 d-grid gap-2 mb-3 mx-auto">
                                <a href="/CreateAccountSeller"
                                className="btn btn-outline-warning" role="button">Crear cuenta de vendedor</a>
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