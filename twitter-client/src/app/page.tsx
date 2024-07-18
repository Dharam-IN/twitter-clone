'use client'
import FeedCard from "@/components/Common/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback } from "react";
import { BiHome } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { LuMessageSquare, LuUsers2 } from "react-icons/lu";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { PiBookmarkSimple } from "react-icons/pi";
import { TbListSearch } from "react-icons/tb";
import toast, { Toaster } from 'react-hot-toast';
import { graphqlClient } from "../../clients/api";
import { verifyUserGoogleTokenQuery } from "../../graphql/query/user";


interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHome/>
  },
  {
    title: "Explore",
    icon: <IoMdSearch/>
  },
  {
    title: "Notifications",
    icon: <MdOutlineNotificationsNone/>
  },
  {
    title: "Messages",
    icon: <LuMessageSquare/>
  },
  {
    title: "Lists",
    icon: <TbListSearch/>
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimple/>
  },
  {
    title: "Communities",
    icon: <LuUsers2/>
  },
  {
    title: "Premium",
    icon: <BsTwitterX/>
  },
  {
    title: "Profile",
    icon: <FaRegUser/>
  },
  {
    title: "More",
    icon: <CiCircleMore/>
  },
]

export default function Home() {

  const handleLoginWithGoogle = useCallback( async (cred: CredentialResponse) => {
    const googleToken = cred.credential;

    if(!googleToken) return toast.error("Google token not found")

    const {verifyGoogleToken} = await graphqlClient.request(verifyUserGoogleTokenQuery, {token: googleToken})

    toast.success("User Verify Success")
    console.log(verifyGoogleToken);

    if(verifyGoogleToken){
      window.localStorage.setItem('__twitter_token', verifyGoogleToken);
    }

  }, [])
  
  return (
    <div className="grid grid-cols-12 h-screen px-52 2xl:w-[90%] 2xl:mx-auto">
      <div className="col-span-3 pt-1 px-5">
        <div>
          <Link href="/" className="hover:bg-gray-800 rounded-full transition-all duration-500 inline-block p-3">
            <BsTwitterX className="text-2xl"/>
          </Link>

          <ul>
            {
              SidebarMenuItems.map((item, index) => (
                <li key={index} className="flex items-center gap-4 hover:bg-gray-800 mb-2 w-fit px-4 py-3 rounded-full cursor-pointer">
                  <h4 className="text-3xl">{item.icon}</h4>
                  <h4 className="text-2xl">{item.title}</h4>
                </li>
              ))
            }
          </ul>
          <div>
            <button className="uppercase bg-primary w-full py-3 rounded-full text-xl font-bold">
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-6  border border-gray-800">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className="col-span-3">
        <div className="p-3">
          <h2 className="text-2xl font-bold mb-1">New To Twitter</h2>
          <GoogleLogin onSuccess={handleLoginWithGoogle}/>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
