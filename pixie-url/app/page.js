import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold">The URL Shortener u need.</p>
            <p className="text-xl">we r the simplest URL Shortener</p>
            <div className='flex gap-3 mt-10'>
              <Link href="/generate"><button className='bg-red-400 hover:bg-red-500 font-bold p-1 py-0.5 rounded-md'>Try Now</button></Link>
              <Link href="https://github.com/DevSuhail" target="_blank"><button className='bg-red-400 hover:bg-red-500 font-bold p-1 py-0.5 rounded-md'>GitHub</button></Link>
            </div>
          </div>
          <div className="flex justify-start relative">
            <Image className="" alt="vector img" src={"/vector.jpg"} fill={true} />
          </div>
        </section>
      </main>
    </>
  );
}
