import '../styles/Cart.css'

export function CardFromCart({description, price, quantity, total, fileImage})
{
    return(
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={fileImage} className="img-fluid rounded-start" alt="Producto 1" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body-cart">
                        <h5 className="card-title-cart">{description}</h5>
                        <div className="row">
                        <div className="col-md-3">
                            <p className="card-text-cart">Precio:${price}</p>
                        </div>
                        <div className="col-md-3">
                            <p className="card-text-cart">Cantidad: {quantity}</p>
                        </div>
                        <div className="col-md-3">
                            <p className="card-text-cart">Total:{total}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
        </>
    );
}   