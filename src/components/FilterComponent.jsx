import React, { useState } from "react";

export default function FilterComponent({onChange}) {
  // prevent the page from reload
  const [sort,setSort] = useState("");

  const handleChange=(e)=>{
    const selectedSort = e.target.value;
    setSort(selectedSort);
    onChange(selectedSort);
  }
  return (
    <form className="mt-4 mx-4 flex justify-between" onChange={handleChange}>
      <div className="relative w-full ">
        <select
          value={sort}
          onChange={handleChange}
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
        >
          <option hidden value="">
            Sort By
          </option>
          <optgroup label="Sort By">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}
