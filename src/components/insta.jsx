function Instagram({ children }) {

    const Insta = `https://www.instagram.com/borcellestore7/`

    return (
        <a href={Insta}
            target="_blank"
            rel="noopener noreferrer">
            {children}
        </a>
    )
}
export default Instagram