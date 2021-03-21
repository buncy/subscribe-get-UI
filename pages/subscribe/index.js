import React, { useState, useEffect } from "react";
import Image from "next/image";
import ThankYou from "../../components/thankYou";

export default function Subscribe() {
  const [state, setstate] = useState({
    input: "",
    disabled: true,
    thankyou: false,
  });
  useEffect(() => {
    const number = localStorage.getItem("userNumber");
    if (number)
      setstate((state) => ({
        ...state,
        thankyou: true,
      }));
  }, []);
  let hide = !state.disabled ? "hidden" : "block";
  const handleOnChange = (e) => {
    const validation = /^([0]|[\+19]{3})?([6-9][0-9]{9})$/;
    setstate((state) => ({
      ...state,
      input: e.target.value,
      disabled: !validation.test(e.target.value),
    }));
  };
  const handleSubmit = () => {
    localStorage.setItem("userNumber", state.input);
    setstate((state) => ({
      ...state,
      thankyou: true,
    }));
  };
  console.log("state", state);
  let btn_bg = state.disabled ? "bg-btn-disabled" : "bg-btn-active shadow-lg";
  return (
    <div className="flex flex-col ">
      <section className="flex flex-col w-full lg:h-56 h-2/5 bg-gradient-to-r from-section-bg1 to-section-bg2">
        <div className="flex flex-col h-72 pt-8 relative items-center  ">
          <div className="h-14 w-40  relative">
            <Image
              src="/manMatters-bgr.png" // Route of the image file
              // height={250} // Desired size with correct aspect ratio
              // width={437} // Desired size with correct aspect ratio
              priority={true}
              quality={100}
              layout="fill"
              className=" "
              alt="card"
            />
          </div>
          <div className="text-yellow-300 mt-5 pb-20 flex font-semibold text-2xl">
            {" "}
            <p
              className={`bg-clip-text  text-transparent bg-gradient-to-r from-purple-900 via-red-500 to-yellow-400`}
            >
              Congratulations!
            </p>
            <span>&#129395;</span>
          </div>
          <div className=" h-56 w-11/12 lg:w-96 absolute top-44 lg:top-40 shadow-lg rounded-card ">
            <Image
              src="/card.png" // Route of the image file
              // height={250} // Desired size with correct aspect ratio
              // width={437} // Desired size with correct aspect ratio
              priority={true}
              quality={100}
              layout="fill"
              className="rounded-card "
              alt="card"
            />
          </div>
        </div>
      </section>
      {state.thankyou ? (
        <ThankYou />
      ) : (
        <section className=" flex flex-col w-full pt-32 lg:pt-40 ">
          <div className="flex flex-col justify-center px-5 items-center ">
            <p className=" text-xl text-center w-96 py-3">
              {" "}
              You have WON Paytm gift
              <br /> card of Rs 200 for{" "}
              <strong>
                placing the order
                <br /> on Man Matters
              </strong>
            </p>
            <input
              className="w-full  lg:w-96 h-12 mt-4 mb-3 text-center font-medium text-2xl placeholder-gray-300  rounded-full bg-input"
              name="number"
              type="tel"
              pattern="^([0]|[\+19]{3})?([6-9][0-9]{9})$"
              placeholder="Enter Mobile Number"
              value={state.input}
              onChange={(e) => handleOnChange(e)}
            />
            <p className={`text-sm ${hide}`}>
              Enter the same number used on Man Matters{" "}
            </p>
          </div>
          <div className="flex justify-center px-6 py-3 items-center  ">
            <button
              className={`${btn_bg} text-white font-medium  text-lg w-96 h-12 rounded-full`}
              onClick={handleSubmit}
            >
              Wow!Get my Paytm Gift Card &gt;
            </button>
          </div>
        </section>
      )}
      <footer className="flex justify-center pt-16 lg:pt-10 items-center">
        <p className="pr-2">Powered by</p>
        <div className="w-14 h-4 relative">
          <Image
            src={"/gokwik-logo.png"}
            priority={true}
            layout="fill"
            alt="goKwikLogo"
            quality={40}
          />
        </div>
      </footer>
    </div>
  );
}
