import { useEffect , useState } from "react"
import axios from "axios"
import PokemonCard from "./PokemonCard";
function Pokemon(){


const [PokemonData, setPokemonData] = useState([]);
const [loading , setloading] = useState(false);


    useEffect(()=>{

        
        async function fetchPokemon(){
            try{
                const res = await axios.get("https://pokeapi.co/api/v2/ability/?limit=24");
                //data is in res.data
                const pokemondata = res.data.results;
                const detailedPokemonData = pokemondata.map(async(item)=> 
                        {
                            const response = await axios.get(item.url);
                            return response.data;
                        }
                );

                // here in detailedPokemondata we will recieve promisified data to use it we will have await Pomise.all 

                const promisifiedpokemondata = await Promise.all(detailedPokemonData);
                console.log(promisifiedpokemondata);
                setPokemonData(promisifiedpokemondata);
                setloading(true);
            }
            catch(error){
                console.log(error);
            }
        }

        fetchPokemon();

    },[])


return(
    <div className="container">
         <header>
                <h1>Pokedex</h1>
            </header>
            
            <div>
            <ul className="cards">
                {
                    loading ? PokemonData.map((item)=> <PokemonCard key = {item.id} item = {item} />) : <div>Loading...</div>
                }  
            </ul>
                </div>
                
            </div> 
)
}

export default Pokemon