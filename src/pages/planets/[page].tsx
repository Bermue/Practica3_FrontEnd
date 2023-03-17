import type { GetServerSideProps, GetServerSidePropsContext } from "next";


import { Planet, PlanetAPI } from "@/types";
import PlanetsList from "@/components/PlanetsList";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.query;

  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  const dataAPI = await res.json();

  const data:{name:string, id:string}[] = dataAPI.results.map((planet:PlanetAPI) => {
    const name = planet.name;
    // get id from url
    const id = planet.url.split("/").slice(-2)[0];
    return { name, id };
    });



  return {
    props: {
      data,
    },
  };
};

type HomeProps = {
    data: Array<{
      name: string;
      id: string;
    }>;
  };

const PlanetPage = (props: HomeProps) => {
    return <PlanetsList data={props.data} />;
  }

export default PlanetPage;