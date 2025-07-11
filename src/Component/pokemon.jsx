import { useEffect , useState } from "react"
import axios from "axios"
import PokemonCard from "./PokemonCard";
import PokeSearch from "./PokeSearch";
function Pokemon(){


const [PokemonData, setPokemonData] = useState([]);
const [loading , setloading] = useState(true);


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
                setloading(false);
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
            <img src="\Poke_Ball.webp" style={{width:"100px", height:"auto"}} alt="" />
               <img src="https://fontmeme.com/permalink/250711/8e18c0eadb15f16d846e7ab4050f0832.png" style={{height:"80px" , width:"auto"}} alt="" />
            </header>
            <PokeSearch/>
            <div>
            <ul className="cards">
                {
                    loading == true ? <div className="loading">Loading...</div> : PokemonData.map((item)=> <PokemonCard key = {item.id} item = {item} />) 
                }  
            </ul>
                </div>
                
            </div> 
)
}

export default Pokemon