function PokemonCard(props){
    return(
        <div>
        <li className="pokemon-card">
            <img src="" alt="" />
            <p className="pokemon-name">{props.item.name}</p>
        </li>
        </div>
    )
}

export default PokemonCard