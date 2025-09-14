
import { useMemo, useState } from 'react'
import data from "../data/dishes.json"
import DishCard from "../Component/Dishcard"
import SearchBar from "../Component/SearchBar"
import Tabs from "../Component/Tabs"
import VegFilter from "../Component/VegFilter"
import SummaryBar from "../Component/SummaryBar"
import "../App.css"
const categories=["STARTERS","MAIN COURSE","DESSERTS","SIDES"]

const Menupage = () => {
  const [active,setActive]=useState("MAIN COURSE")
  const [search,setSearch]=useState("")
  const[vegOn,setVegOn]=useState(false)
  const[nonVegOn,setNonVegOn]=useState(false)
  const[selected,setSelected]=useState([])
  const toggleDish=(dish)=>{
    setSelected((prev)=>prev.some((d)=>d.id===dish.id)?prev.filter((d)=>d.id!==dish.id):[...prev,dish])
  }

  const counts=useMemo(()=>{
    const out={}
    for (const c of categories){
      out[c]=selected.filter((s)=>s.mealType===c).length
    }
    return out
  },[selected])
  
 
  const visible = data.filter((d) => {
  if (d.mealType !== active) return false;
  if (search && !d.name.toLowerCase().includes(search.toLowerCase())) return false;
  if (vegOn && d.type !== "VEG") return false;
  if (nonVegOn && d.type !== "NON-VEG") return false;
  return true;
});

  
  return (
     <div className="container">
      <SearchBar value={search} onChange={setSearch} />
      <div className="top-bar">
        <Tabs categories={categories} active={active} onChange={setActive} counts={counts} />
        <VegFilter vegOn={vegOn} nonVegOn={nonVegOn} setVegOn={setVegOn} setNonVegOn={setNonVegOn} />
      </div>

      <div className="dish-list">
        {visible.length === 0 ? (
          <p className="no-dishes">No dishes found.</p>
        ) : (
          visible.map((d) => (
            <DishCard
              key={d.id}
              dish={d}
              isSelected={selected.some((s) => s.id === d.id)}
              onToggle={toggleDish}
            />
          ))
        )}
      </div>

      <SummaryBar total={selected.length} onContinue={() => alert("Continue clicked")} />
    </div>
  )

}

export default Menupage
