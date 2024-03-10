export function CardFlowerShop({urlImage, nameFlowerShop, address, phone})
{
    return(
         <div className="col-md-6 col-lg-6 col-xl-3 mb-4">
             <div className="card mx-auto" style={{width: '18rem'}}>
                  <img src={urlImage} className="card-img-top" alt="Kit Cumpleañero"></img>
                  <div className="card-body">
                    <h5 className="card-title">{nameFlowerShop}</h5>
                    <p className="card-text">{address} <br></br>{phone}</p>
                  </div>
            </div>
        </div>
    );
}

