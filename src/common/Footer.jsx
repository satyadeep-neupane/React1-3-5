function Footer() {
    return (
        <footer className="bg-dark py-3 mt-4">
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-end">
                        <p className="text-white text-right">Follow us on:</p>
                        <a href="#" className="ms-3"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="ms-3"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="ms-3"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
                <div className="row text-center">
                    <p className="text-white">&copy; 2023; My Website</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;