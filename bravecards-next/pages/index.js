import { sanityClient } from "../sanity";
import Link from "next/link";
import Image from "../Components/Image";

const Gallery = ({ cards }) => {
  // console.log(cards)
  const sortedCard = cards.sort((a, b) =>
    a.alias.toLowerCase() < b.alias.toLowerCase()
      ? -1
      : b.alias.toLowerCase() > a.alias.toLowerCase()
      ? 1
      : 0
  );
  return (
    <>
      {cards && (
        <div className="main  pt-4">
          <div className="text-center mb-4">
            <h2 className="text-4xl">
              Women that embody my creed:
              <br /> Live <em className="underline">Authentically</em>,{" "}
              <em className="underline">Out Loud</em> and{" "}
              <em className="underline">On Purpose</em>!
            </h2>
            <h3>
            &quot;Wake up every day and be exactly who you are&quot; &#732; Ariana Debose
            </h3>
          </div>
          <h4 className="header m-auto text-center text-blue-900  w-3/4 pb-4 ">
            Click on a card to learn more!
          </h4>
          <div className="m-auto w-[87%] grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {sortedCard.map((card) => (
              <Link key={card._id} href={`card/${card.slug.current}`} passHref>
                <div className="card  rounded-lg overflow-hidden shadow-lg mb-16 bg-white cursor-pointer">
                  <div className="front rounded-lg">
                    <div className="relative">
                      <Image
                        identifier="card-image"
                        image={card.mainImage}
                        alt="This is a Rebel Girl"
                        className=" rounded-lg overflow-hidden"
                        layout="responsive"
                        sizes="50vh"
                      />
                    </div>
                    <div className="absolute  w-full rounded-bl-lg rounded-br-lg bottom-0  px-2 py-2  bg-blue-900">
                    <div className="grid grid-cols-3">
                      
                      <h2 className="col-span-2 m-auto  font-bold w-full text-2xl text-center text-blue-50">
                        {card.alias}
                      </h2>
                      <p className="relative w-14 h-14 bg-yellow-400 rounded-full flex justify-center items-center text-center text-sm p-5 shadow-xl ml-8  -mt-12">
                      {card.type}
                      </p>
                      </div>
                        <div className="m-auto text-center text-blue-50 ">
                          {card.power}
                        </div>
                    </div>
                        
                  </div>
                  <div className="back max-w-md rounded overflow-hidden shadow-lg mb-4 bg-white">
                    <div className="px-6 py-4 bg-blue-900">
                      <div className="font-bold text-2xl mb-2 text-center text-blue-50">
                        {card.name}
                      </div>
                      <div className="">
                        {/* <div className='text-blue-50'>Power: {card.power}</div> */}
                        <div className="text-blue-50 text-xl">
                          Reign: {card.reign}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 ">
                      <span className="font-bold">My Why:</span> <p className="truncate">{card.theWhy}</p>
                    <div className="mt-12 text-xl"><p>click card for more</p></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[ _type == "card"]`;
  const cards = await sanityClient.fetch(query);

  if (!cards.length) {
    return {
      props: {
        cards: [],
      },
    };
  } else {
    return {
      props: {
        cards,
      },
    };
  }
};

export default Gallery;
