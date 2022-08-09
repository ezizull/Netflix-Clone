import Image from 'next/image'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constant/movie'
import { Movie } from '../types/typings'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid'

interface Props {
  netflixOriginals: [Movie]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setmovie] = useState<Movie | null>()

  useEffect(() => {
    setmovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[95vh] lg:justify-center lg:pb-12 2xl:h-[40vh]">
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-md md:text-lg lg:max-w-2xl lg:text-lg">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="banner-btn bg-white text-black">
          <FaPlay />
          Play
        </button>
        <button className="banner-btn bg-[gray]/70">
          More Info <InformationCircleIcon className="h-5 w-5 md:w-8" />
        </button>
      </div>
    </div>
  )
}

export default Banner
