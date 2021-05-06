import React from 'react';

function progress() {
  return (
    <>
      <div className="container-fluid progress-section ">
        <div className="prog_sec">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-10 mx-auto  justify-around ml-24 py-48 ">
            <div className="text-left ">
              <p className="text-3xl p-10">
                We are not only thinking technology behind our platforms we build but also the user experience.
              </p>
            </div>
            <div>
              <hr className="w-50  border-white mb-10  mt-16 px-4" />
            </div>
            <div>
              <img
                className="dummy-image mt-8"
                src="https://dummyimage.com/298x456/cccccc/000000.png"
                alt="dummy-image"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1">
            <div>
              <img
                className="dummy-image2 mt-8"
                src="https://dummyimage.com/298x456/cccccc/000000.png"
                alt="dummy-image"
              />
            </div>
            <div>
              <hr className="w-50  border-white mb-10  my-56 mb-0  ml-20" />
            </div>
            <div className="text-left ">
              <p className=" text-3xl p-10">
                We are not only thinking technology behind our platforms we build but also the user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default progress;
