import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import Main from "../../components/product/Main";
import Similar from "../../components/product/Similar";
import Sidebar from "../../components/sidebar/Sidebar";
import { DEMO } from "../../global/constants/demo";

export default function Product({ id }: any) {
  return (
    <div className="w-screen h-full sm:h-screen sm:flex">
      <Sidebar id={id} />
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
  const rec = Object.entries(DEMO).map(([val]) => val);
  const paths = rec.map((val) => ({
    params: { id: val },
  }));
  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}
export async function getStaticProps({ params }: any) {
  return {
    props: {
      id: params.id,
    },
  };
}
