import React from 'react';

function progress() {
  return (
    <>
      <div className="container-fluid progress-section p-8 py-20">
        <div className="container m-auto">
          <div className="md:w-11/12 m-auto">
            <div className="prog_sec">
              <div className="md:flex lg:flex">
                <div className="md:w-1/2 flex">
                  <div className="text-left ">
                    <p className=" prog_text ">
                      We are not only thinking technology behind our platforms we build but also the user experience.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex">
                  <div className="w-full flex md:border-t-2 mx-2 md:mt-10">
                  {/* <hr className=" border-white mt-auto w-full mb-4 " /> */}
                  </div>
                  <div className="w-full text-right">
                    <img
                      className="dummy-image2 mt-8"
                      src="https://dummyimage.com/298x456/cccccc/000000.png"
                      alt="dummy-image"
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex lg:flex m-auto">
                <div className="md:w-1/2 flex">
                  <div className="w-full">
                    <img
                      className="dummy-image2 mt-8"
                      src="https://dummyimage.com/298x456/cccccc/000000.png"
                      alt="dummy-image"
                    />
                  </div>
                  <div className="mx-4 w-full flex md:border-b-2 mb-10">
                    {/* <hr className=" border-white mt-auto w-full mb-4 " /> */}
                  </div>
                </div>
                <div className="md:w-1/2 flex">
                  <div className="text-left md:place-self-center md:mt-48 ">
                    <p className="  prog_text">
                      We are not only thinking technology behind our platforms we build but also the user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default progress;
