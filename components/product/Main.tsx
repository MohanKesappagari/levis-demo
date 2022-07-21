import Image from "next/image";
import { useState } from "react";
import { STRING } from "../../global/constants";
import { DEMO } from "../../global/constants/demo";
import { INVENTORY } from "../../global/constants/inventory";
import SocilaSlider from "./SocialSlider";
interface Props {
  id: string;
}

export default function Main({ id }: Props) {
  const [index, setIndex] = useState(0);
  const social = Object.entries(DEMO)
    .filter((val) => val[0] === id)
    .map(([val, { recommendations }]) => recommendations);
  const images = social.map((val) => Object.entries(val).map(([val]) => val));
  const recomandations = social.map((val) =>
    Object.entries(val)
      .filter(([val]) => val === images[0][index])
      .flat(1)
  );
  const rec_pro = INVENTORY.filter(({ raw_data: { id } }) =>
    recomandations[0][1].includes(id)
  );

  return (
    <div className="w-full flex flex-col sm:flex-row  sm:h-[55vh]">
      <SocilaSlider images={images[0]} setIndex={setIndex} />
      <div className="w-full h-max sm:max-h-[55vh] sm:overflow-y-auto sm:w-[70%]  grid grid-cols-2 ml-5 sm:grid-cols-2 lg:grid-cols-3 gap-3 mr-5">
        {rec_pro.map(({ page_url, raw_data }) => {
          return (
            <div
              key={raw_data.id}
              className="flex flex-col border border-[#d9d9d9] rounded-2xl animate__animated animate__fadeInRight cursor-pointer hover:border-2"
              onClick={() => {}}
            >
              <div className="w-full flex justify-center rounded-2xl">
                <Image
                  className=""
                  src={raw_data.img_url}
                  width={200}
                  height={200}
                  alt={STRING(page_url)}
                  objectFit="cover"
                />
              </div>
              <div className="flex p-2 space-x-5 bg-red rounded-b-2xl flex-grow text-white">
                <p className="font-medium" title={STRING(page_url)}>
                  {STRING(page_url)}
                </p>
                <span className="font-bold">${"100"}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
