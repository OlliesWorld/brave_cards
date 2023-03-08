import { urlFor } from "../sanity"


const Image = ({identifier, image}) => {
    return (
        <>
        <div className={identifier === "main-image" ? "main-image" : "image"}>
            <img src={urlFor(image)} className="h-64 w-60 m-auto" />
        </div>
       {/* {identifier === "main-image" || identifier === "images"&& <div >
            <img src={urlFor(image)} style={{ maxWidth: '100%', height: 'auto' }} className="m-auto h-1/2 w-100 mb-4"/>
        </div>}
         {identifier === "card-image" && <div >
         <img src={urlFor(image)} className="m-auto h-72 w-60"/>
     </div>} */}
     </>
    )
}
export default Image
