import { sanityClient } from '../sanity'
import Link from 'next/link'
import Image from '../Components/Image'
import TinderCard from 'react-tinder-card'
import { useState } from 'react'


const Home = ({cards, src}) => {
  // console.log(cards)
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
  }

  const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
  }
  return (
    <> 
    <div className="header my-4 text-center text-blue-900 font-extrabold">
          <h2 >These Women are </h2>
          <h2 className="text-4xl uppercase">inspiring, courageous, rebellious, kind, compassionate, fierce, and much more.</h2>
        <h4>Click on a card to learn more about each person!</h4>
        </div>
    <div className="flex justify-center align-center ml-8">
                <div className="card-container justify-center align-center">
          {cards.map((card) => (
            
            <TinderCard className='swipe' key={card.name} onSwipe={(dir) => swiped(dir, card.name)} onCardLeftScreen={() => outOfFrame(card.name)}>
                            <div  className='card bg-blue-900 rounded-md shadow-lg'>
                                <h3 className='text-blue-50 text-xl text-center p-2'>{card.alias}</h3>
                            <Image identifier="main-image" image={card.mainImage} alt="This is a Rebel Girl" className=" rounded-lg overflow-hidden" layout="responsive" />
                           
                            <Link key={card._id} href={`/card/${card.slug.current}`} passHref target="_blank" ><a className='text-blue-50 text-xl ml-2 cursor-pointer'>More Info</a></Link>
                    </div>
                </TinderCard>
                 
                 ))}
        </div>
        </div>
                 <div className="header m-auto text-center text-2xl text-blue-900 font-extrabold w-3/4 pb-4 ">This site is my passion project to learn and also help my nieces learn about what amazing humans Women are! My long-term goal is to make an app where users can sign up and add or create there own deck.</div>
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