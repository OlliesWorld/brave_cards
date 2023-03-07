import { urlFor } from "../sanity"


const Image = ({identifier, image}) => {
    return (
        <div className={identifier === "main-image" ? "main-image" : "image"}>
            <img src={urlFor(image)} className=" m-auto" />
        </div>
    )
}
export default Image
