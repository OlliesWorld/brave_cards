import { urlFor } from "../sanity"


const Image = ({identifier, image}) => {
    return (
        <div className={identifier === "main-image" ? "main-image" : "images"}>
            <img src={urlFor(image)}  className="w-[250px]"/>
        </div>
    )
}
export default Image
