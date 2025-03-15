import Image from "next/image";

const PropertyImages = ({ images }) => {
   return (
    <section className="bg-green-50">
      <div className="container mx-auto mt-1">
        {images.length == 1 ? (
          <Image
            src={`/images/properties/${images[0]}`}
            alt=""
            className="mx-auto h-[400px] object-cover rounded-lg"
            width={1800}
            height={400}
            priority
          />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                className={`${
                  images.length === 3 && index === 2
                    ? "col-span-2"
                    : "col-span-1"
                }`}
                key={index}
              >
                <Image
                  src={`/images/properties/${image}`}
                  alt=""
                  className="w-full h-[400px] object-cover rounded-lg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyImages;
