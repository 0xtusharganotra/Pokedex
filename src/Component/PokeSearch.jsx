import { MdOutlinePersonSearch } from "react-icons/md";
function PokeSearch(){
    return(
        <div style={{display:"flex" , justifyContent:"center"}}>
                <div className="inputbox">
            <input type="text" className="input"/>
            <span><MdOutlinePersonSearch /></span>
        </div>
        </div>
        
        
    )
}

export default PokeSearch