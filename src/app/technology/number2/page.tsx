import Image from "next/image";

import NavTechnology from "@/components/NavTechnology";

export default function page() {
  return (
    <>
      <section className="flex flex-col items-center h-screen text-white">
        <div className="flex w-10/12 h-4/5 mt-4 items-center">
        
          <div className="flex h-2/3 w-6/12 justify-between">
            <div className="justify-center flex w-3/12">
              <NavTechnology />
            </div>
            <div className="w-9/12 flex flex-col justify-center">
              <p className="uppercase">The Terminology...</p>
              <p className="uppercase text-5xl ">Space Vehicle</p>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda labore maxime voluptates aliquam tenetur corporis
                consequuntur distinctio reprehenderit ut dignissimos corrupti
                cumque vitae inventore commodi numquam ipsam, iusto culpa illo?
              </p>
            </div>
          </div>

          <div className="flex justify-center h-5/6 w-6/12">
            <Image
              width={450}
              height={300}
              src={"/technology/space-capsule.jpg"}
              alt="image of launch space"
              className="object-fill "
            />
          </div>
        </div>
      </section>
    </>
  );
}
