import { sanityClient } from '../sanity'
import Image from '../Components/Image'
// import TinderCard from 'react-tinder-card'
import React, { useState } from 'react'
import dynamic from "next/dynamic"
const TinderCard = dynamic(() => import('react-tinder-card'), {
  ssr: false
});


const Home = ({cards, src}) => {
  // console.log(cards)
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
      // console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
  }

  const outOfFrame = (name) => {
      // console.log(name + ' left the screen!')
  }
  return (
    <> 
    <div className="header my-4 text-center text-blue-900 font-extrabold">
          <h2 >These Women are </h2>
          <h2 className="text-4xl uppercase">inspiring, courageous, rebellious, kind, compassionate, fierce, and much more.</h2>
        <h4>Swipe for more!</h4>
        </div>
    <div className="flex justify-center align-center ">
        <div className="card-container w-[18rem] h-[450px] m-auto ">
          {cards.map((card) => (
           
            <TinderCard className='swipe mt-2 m-auto' key={card.id} onSwipe={(dir) => swiped(dir, card.name)} onCardLeftScreen={() => outOfFrame(card.name)}>
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
                 <div className="header m-auto text-center text-2xl text-blue-900 font-extrabold w-3/4 pb-4 ">This site is my passion project for learning about technologies and find inspiration from different people with different walks of life.</div>
                 <div className="header m-auto text-center text-2xl text-blue-900 font-extrabold w-3/4 pb-4 "> Also to help my nieces learn about what amazing humans <span className='text-bold uppercase text-yellow-400'>Women </span>are! <br/> My long-term goal is to make an app where users can sign up and add or create there own deck.</div>
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