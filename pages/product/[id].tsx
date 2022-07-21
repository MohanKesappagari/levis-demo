import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import Main from "../../components/product/Main";
import Similar from "../../components/product/Similar";
import Sidebar from "../../components/sidebar/Sidebar";
import { INVENTORY } from "../../global/constants/inventory";

export default function Product({ id, product }: any) {
  return (
    <div className="w-screen h-full sm:h-screen sm:flex">
      <Sidebar id={id} product={product} />
      <div className="max-w-full sm:w-[75%] h-full ">
        <div className="flex justify-between px-5 w-full h-full  sm:h-[10vh]  ">
          <div className="flex text-red mt-3 items-center">
            <p className="font-medium">SHOP THE LOOK</p>
            <span className="h-[1px] w-24 ml-5 bg-red" />
          </div>
          <div className="mt-3 mr-2 fl" onClick={() => {}}>
            <Badge
              count={5}
              style={{
                background: "#C41230",
                padding: " .1rem.4rem",
                borderRadius: "50%",
                color: "white",
              }}
            >
              <ShoppingCartOutlined
                style={{
                  fontSize: "20px",
                }}
                className="text-black"
              />
            </Badge>
          </div>
        </div>
        <Main id={id} />
        <Similar id={id} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // const res = await fetch(`${server}/api/product`);
  // const resJson = await res.json();
  // const rec = Object.entries(resJson).map(([val]) => val);
  const rec = [
    "125010369",
    "A20190000",
    "A10580001",
    "A18830002",
    "A18750001",
    "A19070001",
  ];
  const paths = rec.map((val) => ({
    params: { id: val },
  }));
  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}
export async function getStaticProps({ params }: any) {
  const product: any = INVENTORY.filter((val) => val.raw_data.id === params.id);
  return {
    props: {
      id: params.id,
      product,
    },
  };
}
