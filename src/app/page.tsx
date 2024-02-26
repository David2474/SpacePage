

export default function Home() {
  return (
  <section className="grid place-content-center place-items-centere">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[url('/home/bg-home-desktop.jpg')]"></div>
    <section className="flex justify-center mt-32 items-center">
      <div className="w-7/12 flex flex-col justify-center items-center text-white">
      <p className="uppercase w-6/12 ">so, you want to travel to</p>
        <h1 className="uppercase text-[135px] ">space</h1>
        <p className="w-6/12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          corrupti eos consequuntur modi suscipit saepe commodi! Quaerat dolores
          nemo, autem consectetur impedit perspiciatis cum voluptates
          voluptatibus est, necessitatibus, sunt et.
        </p>
      </div>
  
      <div className="w-5/12 flex justify-center self-end">
        <p className="h-44 uppercase text-2xl cursor-pointer flex justify-center items-center rounded-[50%] bg-white w-44">
          Explore
        </p>
      </div>
    </section>
  </section>
  );
}
