import Head from "next/head";
import Image from "next/image";
import Navigation from "../Components/Navigation";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>DevNotes | Developers Blog</title>
        <meta name="description" content="DevNote - Developers Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <hr className="container w-[85%] mx-auto mt-2 border-black" />
    </div>
  );
}
