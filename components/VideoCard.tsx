import { Video } from "../types";
import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/Image";
import Link from "next/Link";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

interface IProps {
	post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
	const [isHover, setIsHover] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isVideoMuted, setIsVideoMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null)

  const onVideoPress = () => {
    if (isPlaying) {
      videoRef?.current?.pause()
      setIsPlaying(false)
    } else {
      videoRef?.current?.play()
      setIsPlaying(true)
    }
  }

  const videoIconClass = "text-white text-2xl lg:text-4xl"

	return (
		<div className="flex flex-col border-b-2 border-gray-200 pb-6">
			<div>
				<div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
					<div className="md:w-16 md:h-16 w-10 h-10">
						<Link href="/">
							<>
								<Image
									width={62}
									height={62}
									className="rounded-full"
									src={post.postedBy.image}
									alt="profile photo"
									layout="responsive"
								/>
							</>
						</Link>
					</div>
					<div>
						<Link href="/">
							<div>
								<p>
									{post.postedBy.userName}{" "}
									<GoVerified className="text-blue-400 text-md" />
								</p>
								<p className="capitalize font-medium text-xs text-gray-500 hidden md:block">
									{post.postedBy.userName}
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="lg:ml-20 w-[70vw] xl:w-[50vw] flex gap-4 relative shadow-2xl">
				<div
					className="rounded-3xl"
					onMouseEnter={() => {
						setIsHover(true);
					}}
					onMouseLeave={() => {
						setIsHover(false);
					}}
				>
					<Link href=".">
						<video
							src={post.video.asset.url}
							loop
              muted={!!isVideoMuted}
              ref={videoRef}
							className="object-cover  w-full  rounded-2xl cursor-pointer bg-gray-100 brightness-100"
						></video>
					</Link>

					{isHover && (
						<div className="absolute z-100 bottom-10 cursor-pointer w-full flex gap-10 justify-between px-20 ">
							{isPlaying ? (
								<button onClick={onVideoPress}>
                    <BsFillPauseFill className={videoIconClass}/>
								</button>
							) : (
								<button onClick={onVideoPress}>
                    <BsFillPlayFill className={videoIconClass}/>
								</button>
							)}
							{isVideoMuted ? (
								<button onClick={() => setIsVideoMuted(false)}>
                    <HiVolumeOff className={videoIconClass}/>
								</button>
							) : (
								<button onClick={() => setIsVideoMuted(true)}>
                    <HiVolumeUp className={videoIconClass}/>
								</button>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
