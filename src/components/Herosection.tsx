import React from 'react'

function hrerosection(){
    return <>
            <div className="container-fluid hero_content">
                <div className="container m-auto hero_content">
                    <div className=" text-left md:px-32">
                        <div className="py-10 text hero_font">
                        <h1 className="text-2xl font-bold mb-3">We are a Tech Laboratory.</h1>
                        <h4 className="font-bold mb-3">_Handcrafting business solutions.</h4>
                        <p className="mb-5 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn text-white font-bold py-1 px-6 rounded  md:mb-10">build with us</button>
                        </div>
                    </div>
                </div>
                <div className="heroSectionImage">
                    <img src="/images/homeBanner.png" alt="" className="m-auto"/>
                </div>
            </div>
            </>
}
export default hrerosection