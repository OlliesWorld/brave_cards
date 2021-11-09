import Image from '../../components/Image'
import { sanityClient } from "../../sanity"
import Link from 'next/link'

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
    //  console.log(theWhy)
     return (

        <div className="pb-4 bg-blue-400">
          <Link href="/">Back</Link>
        <div className="text-center">
            <h1 className="text-4xl">{name}</h1>
            <p>( {type} )</p>
            <p>Alias: <span>{alias}</span></p>
        </div>
        <div className="">
        <Image identifier="main-image" image={mainImage} alt="This is a Rebel Girl"/>
            {/* <div className="sub-images-section">
                 {images.map((_key, image) => <Image  key={_key} identifier="image" image={image}/>)}
              </div> */}
        </div>
        <div className="text-white text-center">
            <div className="origin">Origin: <span>{origin}</span></div>
            <div className="power">Power: <span>{power}</span></div>
            <div className="reign">Reign: <span>{reign}</span></div>
            
        </div>
        <div className="text-center mb-4 w-half">
            <div><span className="font-bold">The Why: </span><div>{theWhy}</div></div>
            {/* <a href='{resourceLink1}' target="_blank">Link #1</a> */}
        </div>
        <div className="relative m-4 border-2 border-purple pb-4 w-3/4 m-auto">
        {/* <span className="absolute text-7xl left-0 top-0 text-purple-800">" </span>*/}
            <div className="ml-8">
              <h2 className="text-2xl text-center underline">Favorite quotes from {name}</h2>
              <div>{quotes.quote1}</div>
              <div>{quotes.quote2}</div>
              <div>{quotes.quote3}</div>
              <div>{quotes.quote4}</div>
            </div>
        </div>
        <div className="text-xl text-red">Made by: {creator?.name}</div>
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