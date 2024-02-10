import TableIteam from "./table-data1"
import  { TableItems1 } from "./table-data1"


const TableComponent= ()=>{
   for(var i=0;i<TableItems1;i++){
    const{name,age,gender,qualification,job,capacity}= TableItems1[i];
   
    return(
        <>
<tr>
    <th><TableIteam/></th>
</tr>

  <tr>
    <td>{name}</td>
    <td>{age}</td>
    <td>{gender}</td>
    <td>{qualification}</td>
    <td>{job}</td>
    <td>{capacity}</td>
    
</tr> 


        </>
    )
   }

}
  
export default TableComponent