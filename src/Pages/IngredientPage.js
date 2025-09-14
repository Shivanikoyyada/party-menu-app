
// import React from 'react'
// import { useParams,useNavigate } from 'react-router-dom';
// import dishes from "../data/dishes.json"

// const IngredientPage = () => {
//    const { id } = useParams();
//   const navigate = useNavigate();
//   const dish = dishes.find((d) => String(d.id)===id);

//   if (!dish) return <div className="container">Dish not found</div>;
//   console.log("Param id:", id, "Type:", typeof id);
// console.log("All dish IDs:", dishes.map(d => d.id));
// console.log("Dish found:", dish);
//   return (
//    <div className="container">
//       <button onClick={() => navigate(-1)} className="back-btn">
//         ← Back
//       </button>
//       <div className="ingredient-card">
//         <div className="ingredient-info">
//           <h2>{dish.name}</h2>
//           <p>{dish.description}</p>
//           <h3>Ingredients</h3>
//           <ul>
//   {dish.ingredients && dish.ingredients.length > 0 ? (
//     dish.ingredients.map((ing, i) => (
//       <li key={i}>
//         <span>{ing.name}</span>
//         <span>{ing.qty}</span>
//       </li>
//     ))
//   ) : (
//     <li>No ingredients available</li>
//   )}
// </ul>

//         </div>
//         <img src={dish.image} alt={dish.name} />
//       </div>
//     </div>
//   )
// }

// export default IngredientPage

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dishes from "../data/dishes.json";

// const IngredientPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dish = dishes.find((d) => String(d.id) === id);

//   if (!dish) return <div className="container">Dish not found</div>;

//   return (
//     <div className="container">
//       <button onClick={() => navigate(-1)} className="back-btn">
//         ← Back
//       </button>
//       <div className="ingredient-card">
//         <div className="ingredient-info">
//           <h2>{dish.name}</h2>
//           <p>{dish.description}</p>
//           <h3>Ingredients</h3>
//           <ul>
//             {dish.ingredients && dish.ingredients.length > 0 ? (
//               dish.ingredients.map((ing, i) => (
//                 <li key={i}>
//                   <span>{ing.name}</span>
//                   <span>{ing.qty}</span>
//                 </li>
//               ))
//             ) : (
//               <li>No ingredients available</li>
//             )}
//           </ul>
//         </div>
//         <img src={dish.image || dish.category.image} alt={dish.name} />
//       </div>
//     </div>
//   );
// };

// export default IngredientPage;


const mockIngredients = [
  { name: "Paneer", qty: "200g" },
  { name: "Onion", qty: "1 cup" },
  { name: "Capsicum", qty: "1/2 cup" },
  { name: "Spices", qty: "To taste" },
];

const IngredientPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = dishes.find((d) => String(d.id) === id);

  if (!dish) return <div className="container">Dish not found</div>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      <div className="ingredient-card">
        <div className="ingredient-info">
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>
          <h3>Ingredients</h3>
          <ul>
            {mockIngredients.map((ing, i) => (
              <li key={i}>
                <span>{ing.name}</span>
                <span>{ing.qty}</span>
              </li>
            ))}
          </ul>
        </div>
        <img src={dish.image || dish.category.image} alt={dish.name} />
      </div>
    </div>
  );
};
export default IngredientPage