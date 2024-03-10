import { Header } from "../components/Header";

export function MyAccount() {
    return (
        <>
            <Header/>
            <main>
                <div className="">
                    <div className="O d-flex justify-content-center p-4">
                        <div className="row text-center mx-auto">
                            <div className="col mb-4">
                                <i className="fa-solid fa-circle-plus fa-6x" style={{ color: '#ffb800' }}></i>
                            </div>
                            <div className="col-12 text-center">
                                <h5>Nombre</h5>
                            </div>
                        </div>
                    </div>
                    <div className="A p-4">
                        <div className="row">
                            <div className="col-12">
                                <p>Ubicación:</p>
                            </div>
                            <div className="col-12">
                                <p>Teléfono:</p>
                            </div>
                            <div className="col-12">
                                <p>Correo Electronico:</p>
                            </div>
                            <div className="col-12">
                                <p>Genero:</p>
                            </div>
                            <div className="col-12">
                                <p>Edad:</p>
                            </div>
                            <div className="col-12 d-grid gap-2 mb-3 mx-auto">
                                <a href="#" className="btn btn-warning" role="button">Editar datos</a>
                            </div>
                            <div className="col-12 d-grid gap-2 mb-3 mx-auto">
                                <a href="#" className="btn btn-outline-warning" role="button">Volver</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}