import React, { useState } from 'react'

function hrerosection() {
    const [Isshow, setIsshow] = useState(false)

    function Toggle() {
        setIsshow(!Isshow)
    }

    return <>
        <div className="container-fluid hero_content">
            <div className="container m-auto hero_content">
                <div className=" text-left md:px-32">
                    <div className="py-10 text hero_font">
                        <h1 className="text-2xl font-bold mb-3">We are a Tech Laboratory.</h1>
                        <h4 className="font-bold mb-3">_Handcrafting business solutions.</h4>
                        <p className="mb-5 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button onClick={() => setIsshow(true)} className="btn text-white font-bold py-1 px-6 rounded  md:mb-10">build with us</button>
                    </div>
                </div>
            </div>
            <div className="heroSectionImage">
                <img src="/images/homeBanner.png" alt="" className="m-auto" />
            </div>
        </div>

        {Isshow ? (
            <section className="modal">
                <div className="modal overflow-auto" >
                    <div className="container mx-auto">
                        <div className=" mt-10">
                            <img src="/images/favicon.png" alt="brand_logo" className="w-10" />
                        </div>
                        <div className="text-right">
                            <button onClick={() => setIsshow(false)} className="btn md:mr-24">X</button>
                        </div>
                        <div className="mb-10">
                            <h1 className="text-3xl font-bold">Build with Us</h1>
                            <p className="text-2xl font-bold">Help us with a few details to reach out to you</p>
                        </div>

                        <form className="w-full max-w-xl m-auto text-left">
                            <div className="grid grid-cols-3 gap-4 mb-5">
                                <div>
                                    <label className="font-bold" htmlFor="">
                                        Your Name
                    </label>
                                </div>
                                <div className="col-span-2">
                                    <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        id="inline-full-name"
                                        type="text"
                                        placeholder="enter your name.."
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-5">
                                <div>
                                    <label className="font-bold" htmlFor="">
                                        Your Email
                    </label>
                                </div>
                                <div className="col-span-2">
                                    <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        id="inline-full-name"
                                        type="email"
                                        placeholder="enter your email.."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-5">
                                <div>
                                    <label className="font-bold" htmlFor="">
                                        Organization
                      <br /> Name
                    </label>
                                </div>
                                <div className="col-span-2">
                                    <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        id="inline-full-name"
                                        type="text"
                                        placeholder="enter the organization's name.."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-5 ">
                                <div className="">
                                    <label className="font-bold" htmlFor="">
                                        Stage of
                      <br /> Organization
                    </label>
                                </div>
                                <div className="col-span-2">
                                    <div className="grid grid-rows grid-flow-col gap-3">
                                        <div>
                                            <button className="space-x-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 inline-flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                                <span>Idea</span>
                                            </button>
                                        </div>
                                        <div>
                                            <button className="bg-gray-200 space-x-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 inline-flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
                                                </svg>
                                                <span>Growth</span>
                                            </button>
                                        </div>
                                        <div>
                                            <button className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 inline-flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                <span className="text-gray-700">Enterprise</span>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-5">
                                <div>
                                    <label className="font-bold" htmlFor="">
                                        Project Brief
                    </label>
                                </div>
                                <div className="col-span-2">
                                    <textarea
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        id="inline-full-name"
                                        placeholder="tell us something about project"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-5">
                                <div>
                                    <label className="font-bold" htmlFor="">
                                        Any Project
                      <br />
                      documents
                    </label>
                                </div>
                                <div className=" inline-flex">
                                    <a href="#" className="inline-flex ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                        <label htmlFor="file-upload"> Attach File</label>
                                        <input
                                            className=" fileupload bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                            id="file-upload"
                                            type="file"
                                            placeholder="enter the organization's name.."
                                        />
                                    </a>

                                </div>
                            </div>
                            <div className="w-full m-auto mb-8">
                                <input
                                    className="bg-black appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name"
                                    type="submit"
                                    value="send"
                                    placeholder="attach file"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        ) : null}

    </>
}
export default hrerosection