function Component1(){
    var names=["raki","bhuvan","mani",20]
    return(
        <div>
            <h1 >Names</h1>
            <ul>
                {
                   names.map((name,index)=>{
                    return <li key={index}>{name}</li>
                   })
                }
            </ul>


        </div>
    )
} export default Component1;