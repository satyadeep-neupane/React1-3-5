import Navbar from "../../common/Navbar"
import Footer from "../../common/Footer"

import { useState, useEffect } from "react"
import Card from "../components/Card"

function Index() {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: "Product 1",
            description: "Product 1 Description",
            price: 99.99,
        },
        {
            id: 1,
            title: "Product 2",
            description: "Product 2 Description",
            price: 89.99,
        }
    ])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((data) => setBooks(data))
      }, [])



    return (
        <>
            <Navbar />

            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/images/banner1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/banner2.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <main className="container">
                <div className="row mt-3">

                    {
                        books.map((book) => {
                            return (
                                <div className="col-sm-3">
                                    <Card book={book} />
                                </div>
                            )
                        })
                    }


                </div>

                <nav aria-label="Page navigation example" className="mt-4">
                    <ul className="pagination justify-content-end">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </main>

            <Footer />
        </>

    )
}

export default Index