"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const PropertyImages = ({ images }) => {
  console.log("images ", images);
  return (
    <Gallery>
      <section className="bg-green-50">
        <div className="container mx-auto mt-1">
          {images.length == 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width={"1000"}
              height={"600"}
            >
              {({ ref, open }) => (
                <Image
                  src={images[0]}
                  ref={ref}
                  onClick={open}
                  alt=""
                  className="mx-auto h-[400px] object-cover rounded-lg cursor-pointer"
                  width={1800}
                  height={400}
                  priority
                />
              )}
            </Item>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {images?.map((image, index) => (
                <div
                  className={`${
                    images.length === 3 && index === 2
                      ? "col-span-2"
                      : "col-span-1"
                  }`}
                  key={index}
                >
                  <Item
                    original={image}
                    thumbnail={image}
                    height={"600"}
                    width={"1000"}
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        src={`${image}`}
                        alt=""
                        className="w-full h-[400px] object-cover rounded-lg cursor-pointer"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  );
};

export default PropertyImages;
