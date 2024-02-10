

//const buttoncomponent=(prope)=>{

const ButtonComponent=({buttonproperties})=>{
  
    
return < button style={
    {
        backgroundColor:buttonproperties.backgroundcolor,
        color:buttonproperties.color,
        height:buttonproperties.height,
        width:buttonproperties.wight
    }
}>{buttonproperties.    text}</button>

}

export default ButtonComponent







// function ButtonComponent(){
//     return(
//         <div>
//             <button>login</button>
//         </div>
//     )
// }
// export default  ButtonComponent