
import NavDestination from "@/components/NavDestination";
import Image from "next/image";

export default function page() {
  return (
    <section className="h-screen text-white flex justify-center items-center">
      <div className="flex w-5/6 h-5/6 items-center">
        <div className="w-3/6 h-full flex flex-col">
          <div className="flex mb-6">
            <p className="text-gray-500 text-2xl mr-4">01</p>
            <h1 className="text-2xl uppercase">Pick your destination</h1>
          </div>
          <div className="flex justify-center items-center h-5/6">
            <Image
              src={"/destination/image-europa.png"}
              width={370}
              height={330}
              alt="planet image"
            />
          </div>
        </div>
        <div className="w-2/6 h-5/6 flex flex-col justify-evenly">
          <NavDestination />
          <div className=" mt-5">
            <p className="text-7xl uppercase mb-5">Europa</p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              maxime molestiae quasi aperiam accusantium nostrum repellat.
            </p>
            </div>
            <div className="flex w-5/6">
              <p className="border-y border-white"></p>
              <div className="mr-7">
                <p className="uppercase text-xs">avg distance</p>
                <p className="uppercase text-lg">225 mil. km</p>
              </div>
              <div className="ml-6">
                <p className="uppercase text-xs">est. travel time</p>
                <p className="uppercase text-lg">9 months</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
