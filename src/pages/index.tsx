import PlanetsList from "@/components/PlanetsList";
import { PlanetsAPI } from "@/types";
import Link from "next/link";



const  Home=() => {
  return(
  <div>

    <Link href="/planets/1">Planetas</Link>

  </div>
  );
}
export default Home;
