import { EllipsisVertical } from "lucide-react";
import AddNewProjectComponent from "./AddNewProjectComponent";
import { useState } from "react";
export default function CardComponent() {

    const [data, setData] = useState([]);
    const getData=(value)=>{
        setData((prevData) => [...prevData, value]); 
    }

    return (
        <div >
            <AddNewProjectComponent onSubmit={getData}/>
            <div className="grid grid-cols-3">
            {data.map((item,index)=>{
                return(
                  <div key={index} className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-between mb-5">
                      {/* date */}
                      {item.progress == 100 ? <p className="text-custom-sky-blue font-medium">{item.dueDate}</p> :""}
                    {item.progress == 75 ? <p className="text-custom-carrot font-medium">{item.dueDate}</p> :""}
                    {item.progress == 50 ?<p className="text-custom-yellow-500 font-medium">{item.dueDate}</p> :""}
                    {item.progress == 25 ?<p className="text-custom-pink font-medium">{item.dueDate}</p> :""}
                
                      <EllipsisVertical size={20} color="#374957" />
                  </div>
  
                  <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.projectName}
                  </h5>
                  <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
                      {item.description}
                  </p>
  
                  {/* progress bar */}
                  <div className="w-full flex justify-between font-medium mb-1">
                      <p>Progress</p>
                      <p>{item.progress}%</p>
                  </div>
                  <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    {item.progress == 100 ? <div className="bg-custom-sky-blue h-2.5 rounded-full"></div> :""}
                    {item.progress == 75 ?<div className="bg-custom-carrot h-2.5 rounded-full w-[75%]"></div> :""}
                    {item.progress == 50 ?<div className="bg-custom-yellow-500 h-2.5 rounded-full w-[50%]"></div> :""}
                    {item.progress == 25 ?<div className="bg-custom-pink h-2.5 rounded-full w-[75%]"></div> :""}
                  </div>
  
                  {/* deadline */}
                  <div className="flex justify-end">
                      <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">{Math.max(0, Math.ceil((new Date(item.dueDate) - new Date()) / (1000 * 60 * 60 * 24)))} days left</p>
                  </div>
              </div>
                );
            })}
            </div>
        </div>
    );
}
