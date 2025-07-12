import { MdOutlinePersonSearch } from "react-icons/md";

function PokeSearch(props){

    

    
    return(
        <div style={{display:"flex" , justifyContent:"center"}}>
                <div className="inputbox">
            <input type="text" className="input"  onChange={(e)=> props.setsearch(e.target.value)}/>
            <span><MdOutlinePersonSearch /></span>
        </div>
        </div>
        
        
    )
}

export default PokeSearch