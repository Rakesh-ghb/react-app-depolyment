import React from "react";

export default function BirdsList() {
  const birds = [
    { id: 1, name: "American Goldfinch", img: "https://www.allaboutbirds.org/guide/assets/photo/306710541-480px.jpg" },
    { id: 2, name: "Northern Cardinal", img: "https://indianaaudubon.org/wp-content/uploads/2016/04/Cardinal_Northern_male_Ash_2012.jpg" },
    
    { id: 3, name: "House Sparrow", img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/House_sparrow_male_in_Prospect_Park_%2853532%29.jpg" },
    { id: 4, name: "Mourning Dove", img: "https://www.outdooralabama.com/sites/default/files/Wildlife/Birds/MourningDove-USFWS.jpg" },
   
    { id: 5, name: "Black-capped Chickadee", img: "https://www.allaboutbirds.org/guide/assets/photo/302472691-480px.jpg" },
    { id: 6, name: "White-breasted Nuthatch", img: "https://upload.wikimedia.org/wikipedia/commons/5/52/White-breasted_nuthatch_%2826471%29.jpg" },
   
    { id: 7, name: "Ruby-throated Hummingbird", img: "https://www.allaboutbirds.org/guide/assets/photo/303881311-480px.jpg" },
     { id: 8, name: "House Sparrow", img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/House_sparrow_male_in_Prospect_Park_%2853532%29.jpg" },
      { id: 9, name: "House Sparrow", img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/House_sparrow_male_in_Prospect_Park_%2853532%29.jpg" },
       { id: 10, name: "House Sparrow", img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/House_sparrow_male_in_Prospect_Park_%2853532%29.jpg" },
  ];

  return (
    <div>
      <h2>Birds Gallery</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {birds.map(bird => (
          <div key={bird.id} style={{ textAlign: "center", width: "200px" }}>
            <div><strong>{bird.id}.</strong> {bird.name}</div>
            <img src={bird.img} alt={bird.name} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
          </div>
        ))}
      </div>
    </div>
  );
}


