import Image from "next/image";

export default function Herosection() {
  return (
    <section className="pt-48 sm:pt-36 w-full h-[860px] flex flex-col sm:flex-row justify-evenly bg-orange-100">
      <div className="basis-1/2 lg:px-16 ">
        <h1 className="text-6xl text-black text-left  pt-16 pb-4 font-bold ">
          Find The Perfect Mate <br />
          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#5271ff] to-[#5271ee]">
            For Your Next Adventure
          </span>
        </h1>
        <p className="text-gray-500 text-lg ">
          Adventure awaits, find your perfect mate with just one click -
          TripMate app. <br /> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum velit unde fugiat voluptatem, autem aut
          consequatur corrupti impedit. Incidunt voluptate sequi quae culpa quam
          autem eaque exercitationem explicabo odit minus? Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Non distinctio culpa quo
          consectetur fugit esse in quasi animi, totam illo corrupti nobis
          voluptatum corporis deserunt modi necessitatibus nam beatae at. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Quaerat fugiat,
          ullam soluta esse, est ut repellendus quibusdam delectus sequi dolorum
          doloremque dolore sed. Atque vitae porro aut doloremque, est
          repudiandae.
        </p>
      </div>
      <div className=" basis-1/2 mx-auto">
        <div className="h-[558] w-[525] object-contain">
          <Image
            src="/../public/TripMate_Index.png"
            width="525"
            height="558"
            alt="Herosection photo"
            className="ml-16 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
