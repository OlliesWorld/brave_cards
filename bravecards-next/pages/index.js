import { sanityClient} from '../sanity'
import Link from 'next/link'
import Image from "next/image"

const Home = ({cards, src}) => {
  // console.log(cards)
  return (
    <> 
    {cards && (
      <div className="main ">
        <div className="header my-4 text-center">
          <h1 className="text-4xl">These Women inspire me to be BRAVE!</h1>
        </div>
        
        <div className="grid grid-cols-3 justify-items-center">
          {cards.map((card) => (
            <Link key={card._id} href={`card/${card.slug.current}`} passHref target="_blank">
              <div  className="max-w-md rounded overflow-hidden shadow-lg mb-4 bg-white">
                <div >
                  <Image src={card.mainImage} alt={card.name} width={250} height={250}/>
                
                <div className="relative w-12 h-12 bg-purple-100 rounded-full flex justify-center items-center text-center p-5 shadow-xl -mt-16 ml-2">
                  
                  {card.type}
                </div>
                </div >
              <div className="px-6 py-2 mt-4 bg-blue-400">
                <div className="font-bold text-2xl mb-2 text-center">{card.alias}</div>
                <div className="flex justify-center space-x-4">
                  <div>{card.power}</div>
                  <div>{card.reign}</div>
                </div>
              </div>
             
          </div>
            </Link>

          ))}
        </div>
        </div>
      
       )}
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `*[ _type == "card"]`
  const cards = await sanityClient.fetch(query)

  if (!cards.length) {
    return {
      props: {
        cards: [],
      },
    }
  } else {
    return {
      props: {
        cards,
      },
    }
  }
}

export default Home