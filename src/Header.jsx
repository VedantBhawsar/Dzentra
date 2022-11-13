import React from 'react'
import { FaReact, FaUserAlt, FaThumbsUp } from 'react-icons/fa'
import { BsTagFill, BsFillBasket2Fill, BsListStars, BsPower, BsCheck } from 'react-icons/bs'
import { IoAddCircleSharp } from 'react-icons/io5'
import { RiImageAddFill, RiFileList3Fill, RiArrowLeftSLine } from 'react-icons/ri'
import { AiOutlineShop, AiFillTag, AiTwotoneSetting } from 'react-icons/ai'
import { HiOutlineDocumentReport } from 'react-icons/hi'


const Header = () => {
    return (
        <div>
            {/* Laptop */}
            <div className='hidden md:block bg-blue-500 w-full h-80 pt-5'>
                <div className='flex gap-3  justify-between items-start'>
                    <div className='flex '>
                        <div className='bg-white h-full w-auto relative rounded-3xl ml-9 items-center justify-center drop-shadow-lg'>
                            <div className='flex items-center px-7 mt-7 ml-5 gap-6 cursor-pointer'>
                                <RiImageAddFill className='
                                     w-10 h-10' />
                                <label className=' font-semibold'>LAUNDRY</label>
                            </div>

                            <div className='mx-4 my-5 flex flex-col   '>

                                <div className='flex mb-5 text-white bg-blue-500 rounded-lg items-center px-7 gap-3'>
                                    <AiOutlineShop className='w-6
                                     h-6 my-3  cursor-pointer' />
                                    <label className='cursor-pointer' >Dashboard</label>
                                </div>

                                <div className='flex mb-5 active:text-white enabled:bg-blue-500 active:bg-blue-500 rounded-lg items-center px-7 gap-3'>
                                    <AiFillTag className='w-6
                                     h-6 my-3  text-red-500 -rotate-90' />
                                    <label className='cursor-pointer '>Pos</label>
                                </div>

                                <div className='flex mb-5 active:text-white enabled:bg-blue-500 active:bg-blue-500 rounded-lg items-center px-7 gap-3'>
                                    <BsFillBasket2Fill className='w-6
                                     h-6 my-3  text-green-500' />
                                    <label className='cursor-pointer '>Orders</label>
                                </div>

                                <div className='flex mb-5 active:text-white enabled:bg-blue-500 active:bg-blue-500 rounded-lg items-center px-7 gap-3'>
                                    <BsListStars className='w-6
                                     h-6 my-3  text-yellow-500' />
                                    <label className='cursor-pointer '>Order Status Screen</label>
                                </div>

                                <div className='flex mb-5 active:text-white justify-between enabled:bg-blue-500 active:bg-blue-500 rounded-lg items-center px-7 gap-3'>
                                    <div className='flex items-center gap-3'><RiFileList3Fill className='w-6
                                     h-6 my-3  text-red-500' />
                                        <label className='cursor-pointer '>Expanse</label>
                                    </div>
                                    <RiArrowLeftSLine className='-rotate-90' />
                                </div>

                                <div className='flex mb-5 active:text-white enabled:bg-blue-500 active:bg-blue-500 rounded-lg items-center px-7 gap-3'>
                                    <FaUserAlt className='w-6
                                     h-6 my-3  text-violet-500' />
                                    <label className='cursor-pointer '>Customers</label>
                                </div>

                                <div className='flex mb-5 active:text-white justify-between enabled:bg-blue-500 active:bg-blue-500 rounded-lg items-center px-7 gap-3'>
                                    <div className='flex items-center gap-3'><AiFillTag className='w-6
                                     h-6 my-3  text-blue-500 -rotate-90' />
                                        <label className='cursor-pointer '>Services</label>
                                    </div>
                                    <RiArrowLeftSLine className='-rotate-90' />
                                </div>

                                <div className='flex mb-5 active:text-white justify-between enabled:bg-blue-500 active:bg-blue-500 rounded-lg items-center px-7 gap-3'>
                                    <div className='flex items-center gap-3'>
                                        <HiOutlineDocumentReport className='w-6 h-6 my-3  text-yellow-500' />
                                        <label className='cursor-pointer '>Reports</label>
                                    </div>
                                    <RiArrowLeftSLine className='-rotate-90' />
                                </div>

                                <div className='flex mb-5 active:text-white justify-between enabled:bg-blue-500 active:bg-blue-500 rounded-lg items-center px-7 gap-3'>
                                    <div className='flex items-center gap-3'><AiTwotoneSetting className='w-6
                                     h-6 my-3  text-yellow-500' />
                                        <label className='cursor-pointer '>Tools</label>
                                    </div>
                                    <RiArrowLeftSLine className='-rotate-90' />
                                </div>

                                <div className='flex mb-5 active:text-white enabled:bg-blue-500 active:bg-blue-500 rounded-lg items-center px-7 gap-3'>
                                    <BsPower className='w-6
                                     h-6 my-3  ' />
                                    <label className='cursor-pointer '>Customers</label>
                                </div>
                            </div>
                        </div>
                        <div className='cursor-pointer mx-6'>
                            <div className='w-6 h-1 bg-white '></div>
                            <div className='w-6 h-1 bg-white mt-1'></div>
                            <div className='w-6 h-1 bg-white mt-1'></div>
                        </div>
                    </div>
                    <div className='flex gap-3  justify-end items-center'>
                        <FaUserAlt className='h-5 w-5 text-white cursor-pointer' />
                        <BsTagFill className='h-5 w-5 text-white cursor-pointer' />
                        <IoAddCircleSharp className='h-5 w-5 text-white cursor-pointer' />

                        <div>
                            <select className='cursor-pointer font-semibold outline-none px-2 py-1 mx-5 rounded-md text-blue-600 shadow-md    '>
                                <option value="" className='cursor-pointer font-semibold' >English</option>
                                <option value="" className='cursor-pointer font-semibold' >Marathi</option>
                                <option value="" className='cursor-pointer font-semibold' >Hindi</option>
                                <option value="" className='cursor-pointer font-semibold' >Gujrati</option>
                                <option value="" className='cursor-pointer font-semibold' >Tamil</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex">

                    <div className='flex  w-72 h-32 bg-white drop-shadow-lg rounded-2xl absolute top-24 left-80 ml-10'>
                        <div className="items-start justify-start">
                            <div className='text-lg mx-7  my-4 text-gray-500' >PENDING ORDER</div>
                            <div className='font-bold mx-7 text-2xl mt-7'>202</div>
                        </div>
                        <div className='bg-gray-400 w-14 h-14 rounded-full absolute right-5 top-10 p-3 items-center flex justify-center'>
                            <BsFillBasket2Fill className='w-7 h-7 text-white' />
                        </div>
                    </div>

                    <div className='flex  w-72 h-32 bg-white drop-shadow-lg rounded-2xl absolute top-24 left-1/3 ml-36'>
                        <div className="items-start justify-start">
                            <div className='text-lg mx-7  my-4 text-gray-500' >PROCESSING ORDER</div>
                            <div className='font-bold mx-7 text-2xl mt-7'>99</div>
                        </div>
                        <div className='bg-yellow-400 w-14 h-14 rounded-full absolute right-5 top-10 p-3 items-center flex justify-center'>
                            <FaReact className='w-7 h-7 text-white' />
                        </div>
                    </div>

                    <div className='flex  w-72 h-32 bg-white drop-shadow-lg rounded-2xl absolute top-24 left-2/3 -ml-20'>
                        <div className="items-start justify-start">
                            <div className='text-lg mx-7  my-4 text-gray-500' >READY TO DELIVER</div>
                            <div className='font-bold mx-7 text-2xl mt-7'>263</div>
                        </div>
                        <div className='bg-green-400 w-14 h-14 rounded-full absolute right-5 top-10 p-3 items-center flex justify-center'>
                            <FaThumbsUp className='w-6 h-6 text-white' />
                        </div>
                    </div>

                    <div className='flex  w-72 h-32 bg-white drop-shadow-lg rounded-2xl absolute top-24 right-4'>
                        <div className="items-start justify-start">
                            <div className='text-lg mx-7  my-4 text-gray-500' >DELIVER ORDERS</div>
                            <div className='font-bold mx-7 text-2xl mt-7'>345</div>
                        </div>
                        <div className='bg-blue-400 w-14 h-14 rounded-full absolute right-5 top-10 p-3 items-center flex justify-center'>
                            <BsCheck className='w-9 h-9 text-white' />
                        </div>
                    </div>
                </div>


                <div className='flex  w-1/2 h-96 bg-white drop-shadow-lg rounded-2xl absolute top-64 left-80 ml-10'>
                    <div className="flex flex-col items-start justify-start">
                        <div className="items-center flex justify-between">
                            <div className='text-2xl font-semibold mx-9 my-6 mr-14 text-black' >Today's Delivery</div>
                            <input type="text" placeholder='Search Here' className='px-6 pr-16 ml-5 py-3 rounded-lg outline-1 outline-blue-400 bg-white border-2 ' />
                            <select className='cursor-pointer outline-1 outline-blue-400 border-2 px-6 pr-16 ml-5 py-3  rounded-md text-gray-400  '>
                                <option value="" className=''>All Orders</option>
                                <option value="" className=''>Marathi</option>
                            </select>
                        </div>

                        <div className='h-10 w-10 bg-black border-2 border-yellow-300'>

                        </div>
                    </div>
                </div>


            </div>


            {/* Mobile */}
            <div className='md:hidden bg-blue-500 w-full h-56 pt-5 items-center'>
                <div className='flex gap-3  justify-end items-center '>
                    <FaUserAlt className='h-5 w-5 text-white cursor-pointer' />
                    <BsTagFill className='h-5 w-5 text-white cursor-pointer' />
                    <IoAddCircleSharp className='h-5 w-5 text-white cursor-pointer' />

                    <div>
                        <select className='cursor-pointer font-semibold outline-none px-2 py-1 mx-5 rounded-md text-blue-600 shadow-md    '>
                            <option value="" className='font-semibold cursor-pointer'>English</option>
                            <option value="" className='font-semibold cursor-pointer'>Marathi</option>
                            <option value="" className='font-semibold cursor-pointer'>Hindi</option>
                            <option value="" className='font-semibold cursor-pointer'>Gujrati</option>
                            <option value="" className='font-semibold cursor-pointer'>Tamil</option>
                        </select>
                    </div>

                    <div className='mr-4 cursor-pointer'>
                        <div className='w-6 h-1 bg-white '></div>
                        <div className='w-6 h-1 bg-white mt-1'></div>
                        <div className='w-6 h-1 bg-white mt-1'></div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Header