import React from "react";
import Image from "next/image";
export default function ThankyouBlock({ src, string1, string2 }) {
  return (
    <div className="flex w-full mt-5 px-6">
      <div className="flex ">
        <div className="flex pb-2 items-end">
          <div className="h-10 w-10  relative">
            <Image src={src} priority={true} quality={100} layout="fill" />
          </div>
        </div>
        <div className="flex-col pl-3 ">
          <p>
            <strong>{string1}</strong>
          </p>
          <p>{string2}</p>
        </div>
      </div>
    </div>
  );
}
