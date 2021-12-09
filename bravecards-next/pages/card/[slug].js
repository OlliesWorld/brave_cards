import Image from '../../Components/Image'
import { sanityClient } from "../../sanity"


const Card = ({ 
        name,
        alias,
        origin,
        type,
        power,
        theWhy,
        quotes,
        mainImage,
        images,
        reign,
        links,
        creator,
       
 }) => {
    //  console.log(images)
     return (

        <div className="pb-4 bg-blue-50">
          
        <div className="text-center">
            <h1 className="text-4xl">{name}</h1>
            <p>( {type} )</p>
            <p>Alias: <span>{alias}</span></p>
        </div>
        <div className="">
          <div className="bp-4">
          <Image identifier="main-image" image={mainImage} alt="This is a Rebel Girl" />
          
          </div>
          <div className="text-blue-900 font-extrabold text-center pb-8">
              <div className="origin">Origin: <span>{origin}</span></div>
              <div className="power">Power: <span>{power}</span></div>
              <div className="reign">Reign: <span>{reign}</span></div>
          
          </div>
        </div>
        <div className="text-center mb-4 w-2/3 m-auto pb-8">
            <div><span className="font-bold">The Why: </span><div>{theWhy}</div></div>
            <a href='{resourceLink1}' target="_blank">Link #1</a>
        </div>
        <div className="relative m-4 border-2 bg-blue-900 pb-4 w-3/4 m-auto">
       
            <div className="ml-8 pb-8">
              <h2 className="text-2xl text-center underline pb-3">Favorite quotes from {name}</h2>
              <div>{quotes.quote1}</div>
              <div>{quotes.quote2}</div>
              <div>{quotes.quote3}</div>
              <div>{quotes.quote4}</div>
            </div>
        </div>

        <div className="sub-images-section m-auto w-1/2 h-1/2 pt-8">
                 {images.map(( image, _key) => <Image  key={_key} identifier="images" image={image} height={100} layout="intrinsic"/>)}
              </div>
        <div className="text-xl text-red">Card made by: {creator?.name}</div>
        </div>
    )
}
export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug
//   console.log(pageSlug)
    const query = `*[ _type == "card" && slug.current == $pageSlug][0]{
        name,
        alias,
        origin,
        type,
        power,
        theWhy,
        quotes,
        mainImage,
        images,
        reign,
        links,
        creator-> {
            _id,
            name,
            slug,
            image
        
        }
      
    }`
  
    const card = await sanityClient.fetch(query, { pageSlug })
  
    if (!card) {
      return {
        props: null,
        notFound: true,
      }
    } else {
      return {
        props: {
          name: card.name,
          alias: card.alias,
          origin: card.origin,
          type: card.type,
          power:  card.power,
          theWhy: card.theWhy,
          quotes: card.quotes,
          mainImage: card.mainImage,
          images: card.images,
          reign: card.reign,
          links: card.links,
          creator: card.creator,
        },
      }
    }
}

export default Card