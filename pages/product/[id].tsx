import Sidebar from "../../components/sidebar/Sidebar";
import { DEMO } from "../../global/constants/demo";

export default function Product({ id }: any) {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar id={id} />
      <div className="w-2/3 h-full bg-blue-600"></div>
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
