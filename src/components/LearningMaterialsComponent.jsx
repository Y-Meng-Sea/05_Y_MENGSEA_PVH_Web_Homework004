import { CodeSquare, Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import {learningMaterials} from "../data/learningMaterials";
import { useState } from "react";
export default function LearningMaterialsComponent() {
  const[sortMethod, setSortMethod] = useState("");
  const getSortMethod=(value)=>{
    setSortMethod(value)   
  }
  const sortedMaterials = [...learningMaterials].sort((a, b) => {
    if (sortMethod === "A-Z") {
      return a.title.localeCompare(b.title);
    } else if (sortMethod === "Z-A") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  const [favorites, setFavorites] = useState({});

  const handlClick =(id)=>{
    setFavorites((prevFavorites)=>({...prevFavorites, [id]: !prevFavorites[id],}))
  }


  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent onChange={getSortMethod}/>

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      {sortedMaterials.map((material)=>{
        return(
          <div key={material.id} className="space-y-3">
            <div className="bg-light-gray px-4 py-2 flex gap-5 items-center">
              <img
                src={material.image}
                alt={material.title}
                width={50}
                height={50}
                className="rounded-xl"
              />
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-base font-medium">{material.title}</p>
                  <Star className="cursor-pointer"
                  onClick={()=>handlClick(material.id)} 
                  fill={favorites[material.id] ? "orange" : "none"}
                  stroke={favorites[material.id] ? "orange" : "black"}
                  />
                </div>
                <p className="text-gray-400 text-sm">Posted at: {material.postedAt}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
