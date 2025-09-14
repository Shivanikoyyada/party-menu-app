// import React from 'react'
import { Link } from 'react-router-dom'

// const Dishcard = ({dish,isSelected,onToggle}) => {
//   return (
//     <div>
//        <div className={`dish-card ${isSelected ? "selected" : ""}`}>
//       <div className="dish-info">
//         <h4>{dish.name}</h4>
//         <p>{dish.description}</p>
//         <Link to={`/ingredient/${dish.id}`} className="ingredient-link">
//           Ingredient
//         </Link>
//       </div>
//       <div className="dish-actions">
//         <img src={dish.image} alt={dish.name} />
//         <button
//           onClick={() => onToggle(dish)}
//           className={`btn ${isSelected ? "remove" : "add"}`}
//         >
//           {isSelected ? "Remove" : "Add"}
//         </button>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Dishcard
const Dishcard = ({ dish, isSelected, onToggle }) => {
  // Fallback: if dish.image is null, use category.image
  const imageUrl = dish.image || dish.category.image;

  return (
    <div className={`dish-card ${isSelected ? "selected" : ""}`}>
      <div className="dish-info">
        <h4>{dish.name}</h4>
        <p>{dish.description}</p>
        <Link to={`/ingredient/${dish.id}`} className="ingredient-link">
          Ingredient
        </Link>
      </div>
      <div className="dish-actions">
        <img src={imageUrl} alt={dish.name} />
        <button onClick={() => onToggle(dish)} className={`btn ${isSelected ? "remove" : "add"}`}>{isSelected ? "Remove" : "Add"}</button>
      </div>
    </div>
  );
};

export default Dishcard;

