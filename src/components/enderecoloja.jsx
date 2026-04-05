
function Enderecoloja({ children }) {

    const url = `https://www.google.com/maps/place/Rua+Eduardo+Ara%C3%BAjo,+2140+-+Parque+Santa+Rosa,+Fortaleza+-+CE,+60763-015/@-3.8172134,-38.6006507,17z/data=!3m1!4b1!4m6!3m5!1s0x7c74d90e3d53aa3:0x918cc53b4a9ab1f1!8m2!3d-3.8172188!4d-38.5980758!16s%2Fg%2F11yjgkgxyc?entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D`

    return (
        <a href={url}
            target="_blank"
            rel="noopener noreferrer">
            {children}
        </a>
    )
}
export default Enderecoloja