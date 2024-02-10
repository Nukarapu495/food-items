import logo from './logo.svg';
import './App.css';
import ButtonComponent from './component/button/button-component';
import ListComponent from './component/list/functional/list-component-parent1';
import UnorderList from './component/list/functional/list-component-parent2';
import ProfileComponent from './component/images/function/profile-component';
import TableComponent from './component/table/table-component';
import ComponentTree, { ComponentTree1, ComponentTree2, ComponentTree3, ComponentTree4, ComponentTree5 } from './component/component-tree/component-tree';
import HeadingComponent from './component/heading/heading-component';
import NavBar from './component/bootstarp/navbar';
import TableBs from './component/bootstarp/bs-table';
import TestComponent from './component/text/text-component';
import ShowDay from './component/SHOWDATE/showdate-component';
import YouTube from './component/youtube-button-state/youtube-button';
import Productlist from './component/productlist/productlist';
import Product from './component/taask 6/PRODUCT/product';
import DemoCarousel from './component/task 7/carousel/carousel';
import MountingPhase from './component/task 7/lifecycle/lifecycle';
import Update from './component/task 7/update';
import UnMount from './component/task 7/unmounting';
import RemoveItems from './component/task 7/remove items from cart';
import Recipe from './component/myproject/myproject1';
import TableList from './component/task9/table';
import MussicApp from './component/myproject/myproject2';



function App() {
  const dayIndex = new Date().getDay();

function getday(Day) {
    switch(Day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log(getday(dayIndex));

let d=new Date();
let hour=d.getHours();
console.log(hour);

function getgretting(Hour){

 let Greeting;

  if(Hour>0 && Hour<=11){
    Greeting ="GOOD MORING";
  }
  else if(Hour>11 && Hour<=15){
    Greeting ="GOOD AFTERNOON";
  }
  else if(Hour>15 && Hour<=20){
    Greeting ="GOOD EVEINING";
  }
  else{
    Greeting="GOOD NIGHT";
  }
  return Greeting
}
console.log( getgretting(hour));


  return (
    <div>
      {/* <center>
      {/* <h1>weLCOme TO my REStaurANT</h1> */}
      {/* <h1>Display items</h1>
      </center>  */}
     {/* <ButtonComponent/>
     <ListComponent/>
     <UnorderList/> 
      <ProfileComponent/> */}
     {/* <TableComponent/> */}
{/* 
     {/* <ComponentTree/>
     <ComponentTree1/>
     <ComponentTree2/>
     <ComponentTree3/>
     <ComponentTree4/>
     <ComponentTree5/> */} 

     {/* <HeadingComponent/> */}
{/* 
     <NavBar/>
    <TableBs/> */}

      {/* <ButtonComponent buttonproperties={
        {
          backgroundcolor: "red",
          color: "black",
          height: 100,
          width: 100,
          text:"hello"
        }
        } />
      <ButtonComponent buttonproperties={
        {
          backgroundcolor: "red",
          color: "black",
          height: 100,
          width: 100,
          text:"hello"
        }
        } />
      <ButtonComponent buttonproperties={
        {
          backgroundcolor: "red",
          color: "black",
          height: 100,
          width: 100,
          text:"hello"
        }
      } /> */}

      {/* <TestComponent> 
      <p>   I AM RICH</p> 
      <p>  I AM KING</p> 
      <p>  I AM MONEYMAGENT</p> 
      <p>  I AM CREATER</p> 
      <p>  THANKU UNIVERSE</p> 
        </TestComponent>
     
<ShowDay day={getday(dayIndex)} Hour={ getgretting(hour)}/> */}
{/* <YouTube/>
<Productlist/> */}
{/* <Product/> */}
{/* <DemoCarousel/> */}
{/* <MountingPhase/> */}
{/* <Update/> */}
{/* <UnMount/> */}
{/* <RemoveItems/> */}
<Recipe/>
<MussicApp/>
{/* <TableList/> */}
     </div>   
  ) 
}

export default App;
