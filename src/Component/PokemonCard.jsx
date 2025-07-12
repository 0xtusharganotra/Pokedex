function PokemonCard(props){
    return(
        <div>
        <li className="pokemon-card">
            <figure>
            <img src={props.item.sprites.other.dream_world.front_default } alt={props.item.id} className="pokeimg" />
            </figure>
            <h1 className="pokemon-name">{props.item.name}</h1>
            <div className="type">

            <p className="ptype">{props.item.types.map((i)=>i.type.name).join(", ")}</p>
            </div>
            <div className="pokemon-info">
                <div className="pokehws">
                    <p>height : {props.item.height}</p>
                    <p>weight : {props.item.weight}</p>
                    <p>speed : {props.item.stats[4].base_stat}</p>
                </div>
                <div className="pokehws">
                    <p>Experience : {props.item.base_experience}</p>
                    <p>attack : {props.item.stats[1].base_stat}</p>
                    <p>abilities : {props.item.abilities[0].ability.name}</p>
                </div>
            </div>
        </li>
        </div>
    )
}

export default PokemonCard