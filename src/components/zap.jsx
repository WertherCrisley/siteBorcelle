function Zap({ children }) {

    const whats = `https://wa.me/5585988800053`

    return (

        <a href={whats}
            target="_blank"
            rel="noopener noreferrer">
            {/* style={{ textDecoration: "none", color: "inherit" }} */}
            {children}
        </a>


    )

}
export default Zap