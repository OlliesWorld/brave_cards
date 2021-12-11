import { urlFor } from "../sanity"


const Image = ({identifier, image}) => {
    return (
        <div className={identifier === "main-image" ? "main-image" : "image"}>
            <img src={urlFor(image)} className="h-60 w-full" />
        </div>
    )
}
export default Image
