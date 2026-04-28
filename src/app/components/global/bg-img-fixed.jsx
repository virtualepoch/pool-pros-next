"use client";
import Image from "next/image";

export const BgImgFixed = (props) => {
  return (
    <div className="bg-img-fixed-wrap active">
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
