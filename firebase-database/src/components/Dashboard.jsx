// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const Dashboard = () => {
//   const[data,setdata]=useState([])
//   const fetchdata=()=>{
//     axios.get("https://fakestoreapi.com/products")
//     .then((res)=>{
//       setdata(res.data)
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   }
//   useEffect(()=>{
//     fetchdata();
//   },[])
//   return (
//     <div>

//       <h1>Product</h1>
//       <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",marginTop:"10%"}}>
//         {
//           data.map((el)=>(<div  key={el.id}  style={{border:"1px solid black"}}>
//             <img src={el.image} alt=""   height={350} width={350}/>
//             <h3>{el.title}</h3>
//           </div>))
//         }
//       </div>
//     </div>
//   )
// }

// export default Dashboard

import axios from "axios"; // Assuming you have a Dashboard.css file
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="title">Product</h1>
      <div className="product-grid">
        {data.map((el) => (
          <div key={el.id} className="product-card">
            <img src={el.image} alt="" className="product-image" />
            <h3 className="product-title">{el.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
