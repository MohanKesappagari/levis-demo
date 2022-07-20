import Sidebar from "../../components/sidebar/Sidebar";
import { DEMO } from "../../global/constants/demo";

export default function Product({ id }: any) {
  return (
    <div className="w-screen h-full sm:h-screen sm:flex">
      <Sidebar id={id} />
      <div className="w-full sm:w-[75%] h-full bg-blue-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius odit
        similique dolore reiciendis repudiandae quisquam ducimus dignissimos
        earum placeat tempore suscipit accusamus obcaecati rem adipisci,
        delectus eligendi cum nisi perspiciatis.
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
