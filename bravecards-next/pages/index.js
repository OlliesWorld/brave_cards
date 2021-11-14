import { sanityClient } from '../sanity'
import Link from 'next/link'
import Image from '../components/Image'


const Home = ({cards, src}) => {
  // console.log(cards)
  return (
    <> 
    {cards && (
      <div className="main  pt-4">
       
        <div className="header my-4 text-center">
          <h1 className="text-6xl">These Women inspire Me</h1>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {cards.map((card) => (
            <Link key={card._id} href={`card/${card.slug.current}`} passHref target="_blank">
              <div  className="card max-w-md rounded overflow-hidden shadow-lg mb-4 bg-white cursor-pointer">
                <div className="front">
                <div >
                <Image identifier="main-image" image={card.mainImage} alt="This is a Rebel Girl"/>
                
                <div className="relative w-12 h-12 bg-yellow-400 rounded-full flex justify-center items-center text-center p-5 shadow-xl -mt-16 ml-2">
                  
                  {card.type}
                </div>
                </div >
              <div className="px-6 py-2 mt-4 bg-blue-700">
                <div className="font-bold text-2xl mb-2 text-center">{card.alias}</div>
                <div className="flex justify-center space-x-4">
                  <div>{card.power}</div>
                  <div>{card.reign}</div>
                </div>
              </div>
              </div>
              <div  className="back max-w-md rounded overflow-hidden shadow-lg mb-4 bg-white">
              <div className="px-6  mt-4 bg-blue-400">
                <div className="font-bold text-2xl mb-2 text-center">{card.name}</div>
                <div className="">
                  <div>Power: {card.power}</div>
                  <div>Reign: {card.reign}</div>
                </div>
              </div>
                  <div className="p-4"><span className="font-bold">My Why:</span> {card.theWhy}</div>
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