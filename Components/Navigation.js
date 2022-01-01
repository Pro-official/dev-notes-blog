import Link from "next/link";
import React from "react";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <div className="container w-[85%] mx-auto mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-4xl font-black font-title ">DevNotes</h1>
          <p className="leading-none ml-2 text-sm font-title font-bold">
            The Blog
            <br />
            For Developers
          </p>
        </div>
        <div>
          <Link href="/">
            <a className="text-base font-title font-bold mr-4 hover:text-blue-500">
              HOME
            </a>
          </Link>
          <Link href="/blogs">
            <a className="text-base font-title font-bold mr-4 hover:text-blue-500 ">
              BLOGS
            </a>
          </Link>
          <Link href="/videos">
            <a className="text-base font-title font-bold mr-4 hover:text-blue-500">
              VIDEOS
            </a>
          </Link>
          <Link href="/about">
            <a className="text-base font-title font-bold mr-4 hover:text-blue-500">
              ABOUT
            </a>
          </Link>
          <Link href="/register">
            <a className="text-base font-title font-bold border-solid border-2 border-black px-2 py-1 rounded-lg hover:bg-black hover:text-white">
              SIGN UP
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
