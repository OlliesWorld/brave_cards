import { sanityClient } from '../sanity'
import Link from 'next/link'
import Image from '../Components/Image'


const Home = ({cards, src}) => {
  // console.log(cards)
  return (
    <> 
    {cards && (
      <div className="main  pt-4">
       
       <h4 className="header m-auto text-center text-blue-900  w-3/4 pb-4 ">Click on a card to learn more!</h4>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {cards.map((card) => (
            <Link key={card._id} href={`card/${card.slug.current}`} passHref target="_blank">
              <div  className="card  rounded-lg overflow-hidden shadow-lg mb-4 bg-white cursor-pointer">
                <div className="front rounded-lg">
                <div className="h-72">
                <Image identifier="main-image" image={card.mainImage} alt="This is a Rebel Girl" className=" rounded-lg overflow-hidden" layout="responsive" sizes="50vh"/>
                </div>
                <div className="relative w-12 h-12 bg-yellow-400 rounded-full flex justify-center items-center text-center text-sm p-5 shadow-xl -mt-16 ml-2">
                  
                  {card.type}
                
                </div >
              <div className="rounded-bl-lg rounded-br-lg  px-2 py-2 mt-4 bg-blue-900">
                <div className="font-bold text-2xl mb-2 text-center text-blue-50">{card.alias}</div>
                <div className="flex justify-center space-x-4">
                  <div className='text-blue-50'>{card.power}</div>
                  {/* <div className='text-blue-50'>{card.reign}</div> */}
                </div>
              </div>
              </div>
              <div  className="back max-w-md rounded overflow-hidden shadow-lg mb-4 bg-white">
              <div className="px-6  mt-4 bg-blue-900">
                <div className="font-bold text-2xl mb-2 text-center text-blue-50">{card.name}</div>
                <div className="">
                  {/* <div className='text-blue-50'>Power: {card.power}</div> */}
                  <div className='text-blue-50 text-xl'>Reign: {card.reign}</div>
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