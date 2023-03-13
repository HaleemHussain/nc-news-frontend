export default function Footer(){
    return(
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                        <li className="nav-item"><a href="/articles/coding" className="nav-link px-2 text-muted">Coding</a></li>
                        <li className="nav-item"><a href="/articles/cooking" className="nav-link px-2 text-muted">Cooking</a></li>
                        <li className="nav-item"><a href="/articles/football" className="nav-link px-2 text-muted">Football</a></li>
                    </ul>
                    <p className="text-center text-muted">© 2022 NC-NEWS</p>
                </footer>
            </div>
        </>
    )
}
