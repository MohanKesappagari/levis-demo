import Image from "next/image";
import { useEffect, useState } from "react";
import { COLORS, STRING } from "../../global/constants";
import { INVENTORY } from "../../global/constants/inventory";
interface Props {
  id: string;
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
    <div className="w-2/6">
      <div className="w-full h-1/6 text-center ">
        <Image
          alt="logo"
          src="/assets/VERA_Images/levis-white 1@3x.png"
          width={150}
          height={70}
        />
      </div>
      <div className="flex flex-col bg-red h-5/6 items-center ">
        <div className="mt-5 text-center">
          <Image
            src={product[0].raw_data.img_url}
            alt={STRING(product[0].page_url)}
            width={240}
            height={180}
            objectFit="cover"
            className="rounded-3xl w-full h-full"
          />
        </div>
        <div className=" text-white w-10/12 pl-4 space-y-2 mt-2">
          <p className=" text-xl font-medium">{STRING(product[0].page_url)}</p>
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
    </div>
  );
}
