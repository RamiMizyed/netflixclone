import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../constants/movie';
import { Movie } from '../typings';
import { FaPlay } from 'react-icons/fa';
import { GrCircleInformation } from 'react-icons/gr';
interface Props {
	netflixOriginals: Movie[];
}
function Banner({ netflixOriginals }: Props) {
	const [movie, setmovie] = useState<Movie | null>(null);
	useEffect(() => {
		setmovie(
			netflixOriginals[
				Math.floor(Math.random() * netflixOriginals.length)
			]
		);
	}, [netflixOriginals]);

	return (
		<div className='flex flex-col space-y-2  pt-12 lg:pt-32 md:space-y-4 lg:h-[65vh]  lg:justify-end  '>
			<div className='absolute top-0 left-0 h-[100vh] w-[100%] -z-10'>
				<Image
					src={`${baseUrl}${
						movie?.backdrop_path || movie?.poster_path
					}`}
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<h1 className='text-2xl lg:text-7xl md:text-4xl font-bold'>
				{movie?.title || movie?.name || movie?.original_name}
			</h1>
			<p className='max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
				{movie?.overview}
			</p>
			<div className='flex space-x-4'>
				<button className='bannerButton bg-white text-black'>
					<FaPlay className='h-4 w-4 text-black md:h-7 md:w-7' />
					Play
				</button>
				<button className='bannerButton bg-[gray]/70'>
					More Info{' '}
					<GrCircleInformation className='h-5 w-5 md:h-8 md:w-8' />
				</button>
			</div>
		</div>
	);
}

export default Banner;
