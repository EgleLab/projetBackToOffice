import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react";


function Cards () {
    const [charactersInfo, setCharactersInfo]=useState([]);

    useEffect (()=>{
        fetch("https://miadil.github.io/starwars-api/api/all.json")
            .then((res)=>res.json())
            .then((data)=>setCharactersInfo(data));
    }, []);

        const navigate = useNavigate();
        const handleClick = (page) => {
            navigate(page);
          };
          return (
            <div>
               
                    <h1>Enjoy your card</h1>
                    {console.log(charactersInfo)}
                    {charactersInfo.map(characterInfo=> {
                        return <p>{characterInfo.name}</p>
                    })}
                    <button onClick={()=>handleClick('/')}>
                    Go home   
                    </button>                           
                   
           </div>
            );
        
        };

export default Cards;