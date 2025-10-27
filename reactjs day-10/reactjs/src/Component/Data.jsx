import Data1 from"../assets/Datajson.json"
export default function Data(){
    return(
<>
{
Data1.products.map((Item)=>(
    <div>
    <p>The name of Product is {Item.name}</p>
     <p>The price of Product is {Item.price}</p>
     </div>
))

}
</>
    )
}