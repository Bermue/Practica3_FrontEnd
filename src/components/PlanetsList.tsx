import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import styled from "styled-components";

const PlanetsList = ({
  data,
}: {
  data: Array<{
    name: string;
    id: string;
  }>;
}) => {
  const [page, setPage] = useState<number>(1);
  const [botonPrevous, setBotonPrevous] = useState<boolean>(false);
  const [botonNext, setBotonNext] = useState<boolean>(true);

  const nextPage = () => {
    setPage(page + 1);

    setBotonPrevous(true);
    if (page === 5) {
      setBotonNext(false);
    }
    let id = parseInt(window.location.pathname.split("/")[2]);
    router.push(`/planets/${id+1}`);
    




  
  };

  const prevousPage = () => {
    setPage(page - 1);
    setBotonNext(true);
    if (page === 2) {
      setBotonPrevous(false);
    }
    let id = parseInt(window.location.pathname.split("/")[2]);
    router.push(`/planets/${id-1}`);
  };





  return (
    <Container>
      <h1>Planets</h1>
      <button onClick={prevousPage} disabled={!botonPrevous}>
        Prevous
      </button>
      <button onClick={nextPage} disabled={!botonNext}>
        Next
      </button>
      <ul>
        {data.map((planet) => (
          <li key={planet.id}>
            <Link href={`/planet/${planet.id}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PlanetsList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    background-color: #000;
    color: #fff;
    font-size: 1.5rem;
`;


const Button = styled.button`
    padding: 1rem;
    margin: 1rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #454545;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        background-color: #828282;
        color: #ffffff;
    }
`;

const Head = styled.h1`
    font-size: 2rem;
    margin: 1rem;
`;
const List = styled.ul`

    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


