"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const BgImgFixed = (props) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <div className={state ? "bg-img-fixed-wrap active" : "bg-img-fixed-wrap"}>
      <Image
        className="bg-img-fixed"
        priority
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        style={{
          objectPosition: props.objectPosition,
        }}
      />
    </div>
  );
};
