import { ComponentTree1 } from "../component-tree/component-tree"
import "./heading.css"
import style from"./heading.module.css"

const HeadingComponent=()=>{
  
    const heading= {
        color:"red",
         backgroundColor:"pink",
    }
return(
    <div className="headingcontainer">
{/* <h1 style={heading}>GOOD MORINING RA KRISHNA</h1> */}
{/* <h1 className="helloworld">GOOD MORINING RA KRISHNA</h1> */}
<h1 className={style.mytext}>GOOD MORINING RA KRISHNA</h1>
<ComponentTree1/>
    </div>
)

}
export default HeadingComponent