import { Plus } from "lucide-react";
import { useState } from "react";

export default function AddNewProjectComponent({onSubmit}) {
    const [change, setChange] = useState({
        projectName: "",
        dueDate: "",
        progress: "",
        description: ""
    });

    // open module event handler
    const openModule = () => {
        document.getElementById("crud-modal").classList.remove("hidden");
    };

    // Close modal function
    const closeModule = () => {
      document.getElementById("crud-modal").classList.add("hidden");
    };

    const handleChange = (e) => {
        setChange({ ...change, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    }

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!change.projectName.trim()) newErrors.projectName = "Project Name is required";
        if (!change.dueDate) newErrors.dueDate = "Due Date is required";

        const today = new Date().toISOString().split("T")[0]; 
        if (change.dueDate && change.dueDate < today) newErrors.dueDate = "Due Date cannot be in the past";

        if (!change.progress) newErrors.progress = "Please select a progress value";
        if (!change.description.trim()) newErrors.description = "Description is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        onSubmit(change);
        setChange({
            projectName: "",
            dueDate: "",
            progress: "",
            description: ""
        });
    };
    
    


    return (
        <div>
            <button
                onClick={openModule}
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal"
                className=" text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500  font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500  dark:focus:ring-custom-sky-blue-500  flex items-center gap-2"
                type="button">
                <Plus size={22} /> <span className="text-base">New Project</span>
            </button>

            <div
                id="crud-modal"
                tabIndex="-1"
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-2xl shadow-sm dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create New Project</h3>
                            <button
                                type="button"
                                onClick={closeModule}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="crud-modal">
                                
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form  onSubmit={handleSubmit} className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="projectName"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Project Name
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        value={change.projectName}
                                        type="text"
                                        name="projectName"
                                        id="projectName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type Project Name"
                                    />
                                    {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName}</p>}
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="dueDate"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Due Date
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        value={change.dueDate}
                                        type="date"
                                        name="dueDate"
                                        id="dueDate"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    />
                                    {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate}</p>}
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="progress"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Progress
                                    </label>
                                    <select
                                        onChange={handleChange}
                                        name="progress"
                                        value={change.progress}
                                        id="progress"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option defaultValue="">Select Progress</option>
                                        <option value="100">100</option>
                                        <option value="75">75</option>
                                        <option value="50">50</option>
                                        <option value="25">25</option>
                                    </select>
                                    {errors.progress && <p className="text-red-500 text-sm mt-1">{errors.progress}</p>}
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Project Description
                                    </label>
                                    <textarea
                                        onChange={handleChange}
                                        name="description"
                                        value={change.description}
                                        id="description"
                                        rows="4"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Write product description here"></textarea>
                                </div>
                                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="text-white inline-flex items-center bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-4 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
