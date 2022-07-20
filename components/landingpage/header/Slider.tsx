import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { STRING } from "../../../global/constants";
import { DEMO } from "../../../global/constants/demo";
import { INVENTORY } from "../../../global/constants/inventory";
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <RightOutlined
        style={{
          color: "red",
          fontSize: "30px",
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <LeftOutlined
        style={{
          color: "red",
          fontSize: "30px",
        }}
      />
    </div>
  );
}

export default function Sliders() {
  const rec = Object.entries(DEMO).map(([val]) => val);
  const product = INVENTORY.filter(({ raw_data: { id } }) => rec.includes(id));
  const router = useRouter();
  const settings: any = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    // slidesToShow: winWidth < 750 ? 2 : winWidth < 1000 ? 4 : 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    lazyLoad: true,
    centerPadding: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {product.map(({ page_url, raw_data }, idx: number) => (
        <div
          key={idx}
          className="ml-10 hover:scale-105 "
          onClick={() => router.push(`/product/${raw_data.id}`)}
        >
          <div className="w-40 ml-6">
            <Image
              className="rounded-full grid place-items-center shadow-landing cursor-pointer"
              src={raw_data.img_url}
              objectFit="contain"
              width={150}
              height={150}
              layout="responsive"
            />
          </div>
          <p className="w-10/12 text-xs font-normal  text-center uppercase">
            {STRING(page_url)}
          </p>
        </div>
      ))}
    </Slider>
  );
}
