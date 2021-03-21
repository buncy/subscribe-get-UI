import React from "react";
import ThankyouBlock from "../thankyouBlock";

export default function ThankYou() {
  const data = [
    {
      src: "/whatsapp.png",
      string1: "Where will I get the gift card?",
      string2: "You will receive it on WhatsApp/SMS on your mobile.",
    },
    {
      src: "/giftCard.png",
      string1: "When will I recieve the gift card?",
      string2: "Within 48 hours, when your Man Matters order is delivered.",
    },
    {
      src: "/cancel.png",
      string1: "What if I cancel the order?",
      string2: "The voucher will not be delivered if you cancel the order.",
    },
  ];
  return (
    <div className="flex flex-col pt-32 ">
      {data.map((item, index) => (
        <ThankyouBlock
          key={index}
          src={item.src}
          string1={item.string1}
          string2={item.string2}
        />
      ))}
    </div>
  );
}
