export function ProductCard({description, price, urlImage})
{
    return(
        <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
            <div className="card mx-auto" style={{width: '18rem'}}>
                <img src={urlImage} className="card-img-top" alt={description}></img>
                <div className="card-body">
                    <h5 className="card-title">{description}</h5>
                    <p className="card-text">{price}</p>
                </div>
            </div>
        </div>
    );
}
