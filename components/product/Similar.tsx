import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import { STRING } from "../../global/constants";
import { DEMO } from "../../global/constants/demo";
import { INVENTORY } from "../../global/constants/inventory";
import useWindowSize from "../../hooks/useWindow";

function SampleNextArrow(props: any) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        top: "-.1rem",
        right: "1.75rem",
        left: "unset",
      }}
      onClick={onClick}
    >
      <p
        className="modal-arrow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ArrowRightOutlined
          className="border border-red text-base  px-1 rounded-full"
          style={{
            color: isHovering ? "white" : "#c41230",
            background: isHovering ? "#c41230" : "white",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </p>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        top: "-.1rem",
        left: "unset",
        right: "4.5rem",
      }}
      onClick={onClick}
    >
      <p
        className="modal-arrow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ArrowLeftOutlined
          className="border border-red text-base  px-1 rounded-full"
          style={{
            color: isHovering ? "white" : "#c41230",
            background: isHovering ? "#c41230" : "white",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </p>
    </div>
  );
}
interface Props {
  id: string;
}
export default function Similar({ id }: Props) {
  const { width } = useWindowSize();
  const similar_ids = Object.entries(DEMO)
    .filter((val) => val[0] === id)
    .map(([val, { similars }]) => similars);
  const rec_pro = INVENTORY.filter(({ raw_data }) =>
    similar_ids[0].includes(raw_data.id)
  );

  const settings: any = {
    infinite: true,
    speed: 300,

    slidesToShow: width < 700 ? 2 : width < 900 ? 4 : 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    lazyLoad: true,
    centerPadding: 0,
    nextArrow: <SampleNextArrow s />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div className="flex items-center ml-4">
        <p className="text-red font-medium ">Shop similars</p>
        <span className="h-[1px] w-28 bg-red ml-5"></span>
      </div>
      <Slider {...settings} className=" animate__animated animate__fadeIn ">
        {rec_pro
          ?.filter((val) => val.raw_data.id !== id)
          .map(({ page_url, raw_data }) => {
            return (
              <div key={raw_data.id} className="px-2 ml-2" onClick={() => {}}>
                <div className="mr-5 border">
                  <Image
                    className=""
                    src={raw_data.img_url}
                    alt={STRING(page_url)}
                    width={150}
                    height={120}
                    objectFit="cover"
                  />
                  <div className="flex space-x-2 px-1 ">
                    <p title={STRING(page_url)} className="truncate text-sm">
                      {STRING(page_url)}
                    </p>
                    <span className=" text-sm font-bold">${500}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}
