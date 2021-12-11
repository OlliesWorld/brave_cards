import { urlFor } from "../sanity"


const Image = ({identifier, image}) => {
    return (
        <div className={identifier === "main-image" ? "main-image" : "image"}>
            <img src={urlFor(image)} className="h-64 w-60 m-auto" />
        </div>
    )
}
export default Image
