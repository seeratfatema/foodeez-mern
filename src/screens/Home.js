// import React, { useEffect, useState } from 'react';
// , { useEffect, useState }

// import Card from '../Components/Card';
// import Footer from '../Components/Footer'; // Correct path to Footer
// import Navbar from '../Components/Navbar';

// export default function Home() {
  // const [foodCat, setFoodCat] = useState([]);
  // const [foodItems, setFoodItems] = useState([]);
//   const [search, setSearch] = useState('');

  // const loadFoodItems = async () => {
  //   try {
  //     let response = await fetch("http://localhost:5000/api/auth/foodData", {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     response = await response.json();
      // setFoodItems(response[0]);
      // setFoodCat(response[1]);
  //   } catch (error) {
  //     console.error("Error fetching food data:", error);
  //   }
  // };
  

  // useEffect(() => {
  //   loadFoodItems();
  // }, []);
  
//   // Debugging
//   useEffect(() => {
//     console.log("Food Categories:", foodCat);
//     console.log("Food Items:", foodItems);
//   }, [foodCat, foodItems]);
  

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//           <div className="carousel-inner" id="carousel">
//             <div className="carousel-caption" style={{ zIndex: "9" }}>
//               <div className="d-flex justify-content-center">
//                 <input
//                   className="form-control me-2 w-75 bg-white text-dark"
//                   type="search"
//                   placeholder="Search in here..."
//                   aria-label="Search"
//                   value={search}
//                   onChange={(e) => { setSearch(e.target.value); }}
//                 />
//                 <button className="btn text-white bg-danger" onClick={() => { setSearch(''); }}>X</button>
//               </div>
//             </div>
//             <div className="carousel-item active">
//               <img src="https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419421_640.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?cs=srgb&dl=pexels-raudys-808941.jpg&fm=jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://img.freepik.com/free-photo/grilled-chicken-legs-flaming-grill-with-grilled-vegetables-with-tomatoes-potatoes-pepper-seeds-salt_1150-37782.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>

//       <div className='container'>
//   {foodCat.length > 0 ? foodCat.map((data) => (
//     <div className='row mb-3' key={data._id}>
//       <div className='fs-3 m-3'>
//         {data.CategoryName}
//       </div>
//       <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left, rgb(0, 255, 137), rgb(0, 0, 0))" }} />
//       {foodItems.length > 0 ? foodItems.filter(
//         (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase()))
//       ).map(filterItems => (
//         <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
//           <Card 
//             foodName={filterItems.name} 
//             item={filterItems} 
//             options={filterItems.options} 
//             ImgSrc={filterItems.img} 
//           />
//         </div>
//       )) : <div>No Such Data</div>}
//     </div>
//   )) : ""}
// </div>


//       <div><Footer /></div>
//     </div>
//   );
// }


import React,{useState,useEffect}from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Carousel from '../Components/Carousel'

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItems] = useState([]); 
  const [search, setSearch] = useState('');

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      response = await response.json();
      setFoodItems(response[0]);
      setFoodCat(response[1]);
      // console.log(response[0],response[1]);
   
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };
  useEffect(() => {
    loadData(); 
  }, []);












  
  return (
    <div>
      <div><Navbar/></div>
      <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{objectFit:"contain !important"}}>

                <div className="carousel-inner " id='carousel'>
                    <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                        <div className=" d-flex justify-content-center"> 
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search"  value ={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                           
                        </div>
                    </div>
                    <div className="carousel-item active" >
                        <img src="https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419421_640.jpg" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?cs=srgb&dl=pexels-raudys-808941.jpg&fm=jpg" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/grilled-chicken-legs-flaming-grill-with-grilled-vegetables-with-tomatoes-potatoes-pepper-seeds-salt_1150-37782.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div></div>


      <div className='container'>
      {
      foodCat.length > 0
      ? foodCat.map((data) => {
        return(<div className='row mb-3'>
          <div key={data._id} className='fs-3 m-3'>
            {data.CategoryName}
          </div>
          <hr/>
          {foodItem.length > 0
          ?   
          foodItem.filter((item)=> item.CategoryName == data.CategoryName  && (item.name.toLowerCase().includes(search.toLowerCase())))
          .map(filterItems => {
            return(
              <div key ={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                <Card foodItem ={filterItems}
                options= {filterItems.options[0]}
                
                ></Card>
              </div>
            )
          })
      :<div>"No such data found"</div>}
          </div>

        )
      })
      :""

        







      }
    

      
      </div>


      <div><Footer/></div>
    </div>
  )
}

