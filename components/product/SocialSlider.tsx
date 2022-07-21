import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import { SOCIAL_IMG_URL } from "../../global/constants";
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
        display: "block",
        marginRight: "2rem",
      }}
      onClick={onClick}
    >
      <p
        className=""
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
        display: "block",
        marginLeft: ".5rem",
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
  images: string[];
  setIndex: (val: number) => void;
}
export default function SocilaSlider({ images, setIndex }: Props) {
  const settings: any = {
    infinite: true,
    speed: 300,

    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    lazyLoad: true,
    centerPadding: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev: number, next: number) => setIndex(next),
  };
  return (
    <Slider
      {...settings}
      className=" h-max sm:max-h-[55vh]  ml-28 w-[50%] sm:w-[30%] sm:ml-9"
    >
      {images?.map((val) => (
        <div className="" key={val}>
          <Image
            className=""
            width={280}
            height={280}
            objectFit="contain"
            src={SOCIAL_IMG_URL(val)}
            alt="social"
          />
        </div>
      ))}
    </Slider>
  );
}
