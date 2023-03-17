import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { PlanetAPI } from "@/types";



const PersonajesPaginados = () => {
    const [data, setData] = useState<PlanetAPI>(
        {
            name: "",
            rotation_period: "",
            orbital_period: "",
            diameter: "",
            climate: "",
            gravity: "",
            terrain: "",
            surface_water: "",
            population: "",
            residents: [],
            films: [],
            created: "",
            edited: "",
            url: ""
        }
    );

    const fetchData = async () => {
        try {
           let id = window.location.pathname.split("/")[2];
            const chars = await fetch(`https://swapi.dev/api/planets/${id}`);
            const json = await chars.json();

            
           
                json.residents =  await Promise.all(
                  json.residents.map(async (r: string) => {

                    const data = await fetch(r);
                    const json = await data.json();
                    return json.name;
                  })
                ),
                json.films =  await Promise.all(
                  json.films.map(async (f: string) => {
                    const data = await fetch(f);
                    const json = await data.json();
                    return json.title;
                  }))





            setData(json);
            console.log(json);
            

        }

        catch (e) {
            //setData([{  name: "Error bajandome los personajes", id: "1"}]);
            console.log("Error bajandome los personajes", e);

        }
        
    };


    useEffect ( () => {
        fetchData();
        
    }, [])


    


    return (
        <>

        <Container>
            
            <Link href="/planets/1">
                <Button>Back</Button>
            </Link>
       
        <h1>{data.name}</h1>
        <Caja>
             <p>Rotation period: {data.rotation_period}</p>
        <p>Orbital period: {data.orbital_period}</p>
        <p>Diameter: {data.diameter}</p>
        <p>Climate: {data.climate}</p>
        <p>Gravity: {data.gravity}</p>
        <p>Terrain: {data.terrain}</p>
        <p>Surface water: {data.surface_water}</p>
        <p>Population: {data.population}</p>
        </Caja>
       
        <h2>Residents</h2>
        <List>
        {data.residents.map((resident) => (
            <li key={resident}>{resident}</li>
        ))}
        </List>
        <h2>Films</h2>
        <List>
        {data.films.map((film) => (
            <li key={film}>{film}</li>
        ))}
        </List>
        </Container>

        </>
    )
}

export default PersonajesPaginados;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    background-color: #000;
    color: #fff;
    font-size: 1.5rem;
`;

const Caja = styled.div`
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




