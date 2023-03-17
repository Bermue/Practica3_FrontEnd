import type { GetServerSideProps, GetServerSidePropsContext } from "next";


import { Planet, PlanetAPI } from "@/types";
import Planetid from "@/components/Planetid";




const PlanetPage = ({ data }: { data: Planet }) => {
  return <Planetid />;
};
export default PlanetPage;

