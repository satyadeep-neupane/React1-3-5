function Card({ book }) {
    return (
        <div className="card">
            <img src={book.url} className="card-img-top" alt="Product 2 Image" />
            <div className="card-body">
                <h5 className="card-title">{ book.title }</h5>
                <p className="card-text">{ book.description }</p>
                <h6 className="card-subtitle mb-2 text-muted">Rs. { book.price }</h6>
                <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    )
}

export default Card