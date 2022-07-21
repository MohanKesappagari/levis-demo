import Image from "next/image";
import { useEffect, useState } from "react";
import { COLORS, STRING } from "../../global/constants";
import { INVENTORY } from "../../global/constants/inventory";
interface Props {
  id: string;
  product: any;
}

export default function Sidebar({ id }: Props) {
  const [color, setColor] = useState("");
  const product = INVENTORY.filter((val) => val.raw_data.id === id);

  useEffect(() => {
    if (product) {
      COLORS.map((val) => {
        if (val.value == product[0].raw_data.id) {
          setColor(val.name);
        }
      });
    }
  }, [product]);
  return (
    <div className="max-w-full sm:w-[25%]">
      <div className="w-full h-full sm:h-[12%] text-center ">
        <Image
          alt="logo"
          src="/assets/VERA_Images/levis-white 1@3x.png"
          width={150}
          height={70}
        />
      </div>
      <div className="flex flex-col px-6 sm:px-0  bg-red  sm:h-[88%]  ">
        <div className="flex flex-row sm:flex-col">
          <div className="mt-5 text-center">
            <Image
              src={product[0].raw_data.img_url}
              alt={STRING(product[0].page_url)}
              width={250}
              height={230}
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className=" text-white w-10/12 pl-20 sm:pl-10 space-y-2 mt-2 sm:text-sm md:text-base ">
            <p className=" font-medium">{STRING(product[0].page_url)}</p>
            <p className="">
              Product Code: <strong>{product[0].raw_data.id}</strong>{" "}
            </p>
            <p className="">
              Color: <strong>{color}</strong>{" "}
            </p>
            <p className="">
              Size: <strong>M</strong>{" "}
            </p>
          </div>
        </div>
        <div className="mb-4 font-medium">
          <div className="flex w-full mt-6 mb-5 text-white justify-evenly">
            <button className="border px-4 py-1 border-white border-solid hover:transform hover:scale-110	hover:border-2">
              Add To Cart
            </button>
            <button className="border px-4 py-1 border-white text-red bg-white border-solid hover:transform hover:scale-110">
              Buy Now
            </button>
          </div>
          <div className="w-full flex items-center justify-center text-white hover:transform hover:scale-110">
            <button className="border px-4 py-1">Exit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
