
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
            <p className='text-xl underline'>( {type} )</p>
            <p className='text-xl'>Alias: <span>{alias}</span></p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className='col-span-2'>
            <div className="p-4">
            <Image identifier="main-image" image={mainImage} alt="This is a Rebel Girl" />
            
            </div>
            <div className="text-center mb-4 w-2/3 m-auto pb-8">
              <div>
                <span className="font-bold text-xl">The Why: </span>
                <div className='text-xl'>{theWhy}</div>
              </div>
              
            </div>
              <div className="flex flex-col lg:flex-row justify-center gap-4 ">
                   {images.map(( image, _key) => <Image  key={_key} identifier="images" image={image}  layout="intrinsic" alt="women of inspiration" />)}
              </div>
              
          </div>

        {/*  Right sidebar*/ }
        <section className='bg-green-700 rounded-md'>
          <div className="text-blue-900 font-extrabold text-center py-8">
              <div className="origin  ">Origin: <span className='text-2xl'>{origin}</span></div>
              <div className="power ">Power: <span className='text-2xl'>{power}</span></div>
              <div className="reign ">Reign: <span className='text-2xl'>{reign}</span></div>
            <div className="relative  border-8 bg-blue-900 mt-4 pb-4 w-5/6 m-auto">
              <div className="px-4 pb-2 text-blue-50  text-left ">
                <h2 className="text-xl text-center mb-4 ">Favorite quotes: </h2>
                <p className='text-lg lg:pl-4 mb-4' >💥 {quotes.quote1}</p>
                <p className='text-xl lg:pl-4 mb-4 '>🌀 {quotes.quote2}</p>
                <p className='text-xl lg:pl-4 mb-4'>🌈 {quotes.quote3}</p>
                <p className='text-xl lg:pl-4 mb-4'> {quotes.quote4}</p>
              </div>
            </div>
              <a href='{resourceLink1}'  className='mt-4'>Link #1</a>
          </div>
        </section>
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