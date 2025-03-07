import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
function App() {
     return (
          <section>
               <div className="grid grid-cols-12 gap-10 ">
                    <div className="col-span-2">
                         <SidebarComponent />
                    </div>
                    <div className="col-span-10 ">
                         <TopNavbarComponent />
                         <div className="grid grid-cols-10 ">
                              <div className="col-span-7 ">
                                   <DashboardComponent />
                                   <AssignmentsComponent />
                                  
                              </div>
                              <div className="col-span-3 ">
                                   <LearningMaterialsComponent/> 
                              </div>
                         </div>
                    </div>

               </div>
          </section>
     );
}

export default App;
