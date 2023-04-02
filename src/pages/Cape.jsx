import React from "react";
import { Link } from "react-router-dom";
import image1 from "./../images/image1.jpg";
import image2 from "./../images/image2.jpg";
import image3 from "./../images/image3.jpg";
import image4 from "./../images/image4.jpg";
import image5 from "./../images/image5.jpg";
import image6 from "./../images/image6.jpg";
import image7 from "./../images/image7.jpg";
import image8 from "./../images/image8.jpg";
import image9 from "./../images/image9.jpg";

const Cape = () => {
  const styles = {
    position: "relative",
    display: "inline-block",
    margin: "16px",
  };

  const boxStyles = {
    position: "absolute",
    top: "16px",
    left: "16px",
    width: "calc(100% - 32px)",
    height: "calc(100% - 32px)",
    backgroundColor: "black",
    zIndex: "-1",
  };

  const gallery = (
    <section class="overflow-hidden text-neutral-700">
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image1}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image2}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image3}
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image4}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image5}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={image6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const testFirstSection = {
    /* <section>
  <section className="rounded-md p-2 text-center shadow-lg md:p-12 md:text-left">
    <div className="flex justify-center">
      <div className="max-w-full ">
        <div
          className="m-4 block rounded-lg  p-2 shadow-sm
       dark:bg-neutral-800 dark:shadow-black/20"
        >
          <div
            className=" absolute bg-blue-400 w-[90%] mt-14 -z-10 h-[200px] opacity-20 "
            style={{ backgroundImage: `url(${image7})` }}
          ></div>
          <div className="md:flex md:flex-row z-10">
            <div className="mx-auto mb-6 flex w-44 items-center justify-center md:mx-0 md:w-full lg:mb-0">
              <div className="triangle-masked-image w-[100%]">
                <svg viewBox="0 0 100 100">
                  <defs>
                    <mask id="triangle-mask">
                      <rect
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        fill="#fff"
                      />
                      <polygon
                        points="0,0 0,100 20,11 80,11, 60,100 100,100 100,0    "
                        fill="#000"
                      />
                    </mask>
                  </defs>
                  <image
                    xlinkHref={image3}
                    mask="url(#triangle-mask)"
                    width="100"
                    height="100"
                  />
                </svg>
              </div>
            </div>
            <div className="md:ml-6 mt-9">
              <p className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Anna Smith
              </p>
              <p className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Id quam sapiente molestiae numquam quas, voluptates omnis
                nulla ea odio quia similique corrupti magnam.
              </p>
              <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                Product manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</section> */
  };

  const testImage = (
    <section>
      {
        // Test Image Component
        /*
  <div className="m-4">
    <div className=" ">
      <div className=" m-4 ">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum</p>
      </div>
      <div className=" inline-block relative  m-4 ">
        <div className=" absolute top-4 left-4 w-[calc(100% - 32px)] h-[calc(100% - 32px)] bg-green-900 ml-[20%] opacity-20 -z-10 "></div>
        <div className=" absolute w-[40%] opacity-90  p-4">
          <img className=" rounded-3xl" src={image3} alt="" />
        </div>
      </div>
    </div>
  </div> */
      }

      {
        //Image with colored box behind
        /* <div style={styles}>
    <div style={boxStyles}></div>
    <img src={image3} alt="Colored box behind image" />
  </div> */
      }
    </section>
  );

  const svgImage = {
    /* <div className="triangle-masked-image w-[100%]"> */
    /* <svg viewBox="0 0 100 100">
      <defs>
        <mask id="triangle-mask">
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="#fff"
          />
          <polygon
            points="0,0 0,100 20,11 80,11, 60,100 100,100 100,0    "
            fill="#000"
          />
        </mask>
      </defs>
      <image
        xlinkHref={image3}
        mask="url(#triangle-mask)"
        width="100"
        height="100"
      />
    </svg> */
    /* </div> */
  };

  const firstSection = (
    <section className="Greate Presentasion">
      <div>
        <section className="mb-10">
          <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
            <div className="container mx-auto xl:px-32 bg-gradient-to-tr from-black to-green-400 ">
              <div className="grid lg:grid-cols-2 flex items-center">
                <div className="md:mt-12 lg:mt-0  mb-12 lg:mb-0">
                  <div
                    className="block rounded-lg shadow-sm m-5 px-6 py-12 md:px-12 lg:-mr-14"
                    style={{
                      background: "hsla(0, 0%, 100%, 0.55)",
                      backdropFilter: " blur(30px)",
                    }}
                  >
                    <h1 className="text-4xl md:text-4xl xl:text-4xl text-white font tracking-tight mb-12">
                      Our Angus cattle are raised with care and attention to
                      their welfare <br />
                      <span className="text-green-800">
                        ensuring they are healthy and happy
                      </span>
                    </h1>
                    <Link
                      className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      href="#!"
                      role="button"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0 -m-3">
                  <img
                    src="https://images.unsplash.com/photo-1543599000-b89af4b8f2e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    className="w-full max-h-[500px] object-cover rounded-lg shadow-lg "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );

  const secondSection = (
    <section className="Greate Presentasion">
      <div>
        <section className="mb-10">
          <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
            <div className="container mx-auto xl:px-32 bg-gradient-to-tr from-yellow-700 via-yellow-400 to-white">
              <div className="grid lg:grid-cols-2 flex  items-center">
                <div className="md:mt-12 lg:mt-0 mb-12 lg:-mb-3 -m-3">
                  <img
                    src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    className="w-full min-h-[500px]  object-cover  rounded-lg shadow-lg "
                    alt=""
                  />
                </div>
                <div className="md:mb-12 lg:mt-0 mb-12 lg:mb-0">
                  <div
                    className="block rounded-lg shadow-sm px-6 py-12 md:px-12 lg:-ml-14"
                    style={{
                      background: "hsla(0, 0%, 100%, 0.55)",
                      backdropFilter: " blur(30px)",
                    }}
                  >
                    <h1 className="text-4xl md:text-4xl xl:text-4xl font tracking-tight mb-12">
                      Offset Your Carbon Footprint with Our Carbon Credits !
                      <br />
                      <span className="text-yellow-800">
                        Make a Difference Today
                      </span>
                    </h1>
                    <Link
                      className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      href="#!"
                      role="button"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );

  return (
    <main className=" h-full">
      <section
        className="
             bg-cover relative m-auto bg-top w-full h-screen flex items-center  align-middle justify-center"
        style={{ backgroundImage: `url(${image7})` }}
      >
        <div className="mt-4 m-0  p-4 FontCool bg-dark flex-col items-center align-middle text-white rounded bg-opacity-25">
          <h1>Herdade dos Sobrais</h1>
          <p>
            Intemporal, Sustainable, Bio-friendly "Get in touch with Nature"
          </p>
        </div>
      </section>
      <section className="">
        {gallery}
        {firstSection}
        {secondSection}
      </section>
    </main>
  );
};

export default Cape;
