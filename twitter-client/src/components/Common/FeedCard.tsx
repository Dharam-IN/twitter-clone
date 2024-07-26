import Image from 'next/image'
import React from 'react'
import { AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { IoBookmarkOutline } from 'react-icons/io5'
import { SiSimpleanalytics } from 'react-icons/si'

const FeedCard = () => {
  return (
    <>
      <div className='p-5 border-b border-b-gray-800'>
        <div className='grid grid-cols-12 gap-3'>
            <div className="col-span-1">
                <Image src="https://avatars.githubusercontent.com/u/122605883?v=4" width={50} height={50} alt='Avatar' className='rounded-full'/>
            </div>
            <div className='col-span-11'>
                <div className='flex gap-2'>
                    <h3 className='font-semibold'>Dharamraj Yadav</h3>
                    <span className='text-gray-500'>@Dharam-IN</span>
                </div>
                <div>
                <p className='text-[15px] mt-1'>Financial Independence, Retire Early (F.I.R.E.) is great but if you don't learn how to grow your capital, it's hard!

                http://afzall.com/?twclid=23zonqikx1gqqxng6yoh7z4t53
                shows you how stock trading can help you reach your FIRE goal responsibly with less risk.

                Learn from a VERIFIED CHAMPION. Join tele:</p>
                </div>

                <div className='flex justify-between mt-5 text-sm'>
                    <div>
                        <button>
                            <FaRegComment/>
                        </button>
                    </div>
                    <div>
                        <button>
                            <AiOutlineRetweet/>
                        </button>
                    </div>
                    <div>
                        <button>
                            <FaRegHeart/>
                        </button>
                    </div>
                    <div>
                        <button>
                            <SiSimpleanalytics/>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            <button>
                                <IoBookmarkOutline/>
                            </button>
                        </div>
                        <div>
                            <button>
                                <AiOutlineUpload/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default FeedCard