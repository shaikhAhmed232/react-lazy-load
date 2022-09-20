import React, { useEffect, useRef, useState } from "react";
import Skeleton from "../Skeleton";

import { Data } from "../../types";

const Product = ({image, price, title}: Data) => {
  const [show, setShow] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current ) return;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (imgRef.current === null) {
            return;
          } else {
            // imgRef.current.src = imgRef.current.getAttribute("data-src") as string;
            if (entry.isIntersecting) {
              setShow(true)

            }
          }
        });
      },
      { threshold: 1, rootMargin: "0px", root: null }
    );
    observer.observe(imgRef.current);
    return () => {
      observer.unobserve(imgRef.current!)
    };
  }, [imgRef]);

  return (
    <div className={`product-container ${!show ? "animate" : ""}`} ref={imgRef}>
      <div className={`img-container`}>
        {!show ? null : <img src={image} alt={title} />}       
      </div>
      <div className="details-container">
        <div className={`title`}>{!show ? null : title}</div>
        <div className={`price`}>{!show? null : price}</div>
      </div>
    </div>
  );
};

export default Product;
