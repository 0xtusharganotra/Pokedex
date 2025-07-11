function PokemonCard(props){
    return(
        <div>
        <li className="pokemon-card">
            <img src="" alt="" />
            <p style={{fontSize:"30px" }}>{props.item.name}</p>
        </li>
        </div>
    )
}

export default PokemonCard