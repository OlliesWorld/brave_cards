import { urlFor } from "../sanity"


const Image = ({identifier, image}) => {
    return (
        <>
       {identifier === "main-image" || identifier === "images"&& <div >
            <img src={urlFor(image)} style={{ maxWidth: '100%', height: 'auto' }} className="m-auto h-1/2 w-100 mb-4"/>
        </div>}
         {identifier === "card-image" && <div >
         <img src={urlFor(image)} className="m-auto h-[18rem] w-60"/>
     </div>}
     </>
    )
}
export default Image
