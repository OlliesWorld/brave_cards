import { sanityClient } from '../sanity'
import Image from '../Components/Image'
import React, { useState } from 'react'
import dynamic from "next/dynamic"
import Link from 'next/link';
const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false
});


const Home = ({cards, src}) => {
  // console.log(cards)
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
  }

  const outOfFrame = (name) => {
      // console.log(name + ' left the screen!')
  }
  return (
    <> 
    <div className=" header my-4 text-center text-blue-900 font-extrabold">
          <h2 >These Women are</h2>
          <h2 className="md:w-1/2 m-auto text-4xl uppercase">inspiring, courageous, rebellious, kind, compassionate, fierce, and much more.</h2>
        <h4>Swipe for more!</h4> <p>or checkout the 
         <Link className='text-green-600' href="/gallery"> Gallery</Link></p>
        </div>
    <div className="flex justify-center align-center ">
        <div className="card-container w-[19rem] h-[450px] m-auto">
          {cards.map((card) => (
           
            <TinderCard className='swipe mt-2 mx-auto' key={card.id} onSwipe={(dir) => swiped(dir, card.name)} onCardLeftScreen={() => outOfFrame(card.name)}>
                            <div  className='card bg-blue-900 -m-4 rounded-md shadow-lg'>
                                <h3 className='text-blue-50 text-2xl text-center p-2'>{card.alias}</h3>
                            <Image identifier="main-image" image={card.mainImage} alt="This is a Rebel Girl" className=" rounded-lg overflow-hidden" layout="responsive" />
                            <div className="relative w-14 h-14 bg-yellow-400 rounded-full flex justify-center items-center text-center text-sm p-5 shadow-xl -mt-14 ml-56">{card.type}</div >
                            <a key={card._id} href={`/card/${card.slug.current}`} className='text-blue-50 text-xl ml-6' >info here</a>
                    </div>
                </TinderCard>
                            
                 ))}
        </div>
        </div>
                 <p className='text-center'>fill out the <Link className='text-green-600' href="/contact">contact form </Link>to let me know who else should be featured!</p>
    </>
  )
}


export default Home

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