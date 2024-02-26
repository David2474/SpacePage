import Image from "next/image";

export default function page() {
  return (
    <section className="h-screen text-white  flex justify-center items-center">
      <div className="flex flex-col w-10/12 h-5/6 ">
        <section className="flex">
          <p className="text-zinc-400 mr-3  text-xl">02</p>
          <h1 className="text-xl uppercase">Meet Your Crew</h1>
        </section>
        <section className="flex justify-between h-full">
          <div className="flex flex-col justify-center w-6/12">
            <p className="font-extralight text-4xl uppercase mt-9 text-zinc-400">Flight Engineer</p>
            <p className="text-5xl uppercase my-3">Anousheh Ansari</p>
            <p className="w-2/3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              tempore necessitatibus quidem. Asperiores officia mollitia amet
              dolorum veritatis natus quas nesciunt sapiente molestias? Debitis
              enim fugit, voluptatum natus a labore.
            </p>
          </div>
          <div className="w-5/12 flex items-end">
            <Image 
                width={400}
                height={270}
                src={'/crew/image-ansari.png'}
                alt="woman speak about space image"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
