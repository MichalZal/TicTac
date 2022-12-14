import React from "react";
import Image from "next/Image";
import Link from "next/link";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

import { useRouter } from "next/router";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

import Logo from "../utils/tiktik-logo.png";
import { createOrGetUser } from "../utils";

import useAuthStore from '../store/authStore'

const Navbar = () => {
	const { userProfile, addUser } = useAuthStore()

	return (
		<div
			className="w-full flex justify-between items-center 
      border-b-2 border-gray-200 p-2"
		>
			<Link href="/">
				<div className="w-[100px] md:w-[130px] ">
					<Image
						className="cursor-pointer"
						src={Logo}
						alt="TikTik"
						layout="responsive"
						priority={true}
					/>
				</div>
			</Link>
			<div>Search</div>
			<div>
				{userProfile ? (
					<div>{userProfile?.userName}</div>
				) : (
					<GoogleLogin
						onSuccess={(response) => {
							createOrGetUser(response, addUser)
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Navbar;
