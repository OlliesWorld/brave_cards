import { urlFor } from "../sanity"


const Image = ({identifier, image}) => {
    return (
        <div className={identifier === "main-image" ? "main-image" : "image"}>
            <img src={urlFor(image)} height={100} width={300} className="h-72" />
        </div>
    )
}
export default Image