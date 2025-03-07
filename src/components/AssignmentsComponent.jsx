import CardComponent from "./CardComponent";

export default function AssignmentsComponent() {
  
  return (
    < >
      <div className="flex justify-between">
        {/* assignments  */}
        <h2 className="text-xl font-semibold">Assignments</h2>
      </div>
      <div>
        <CardComponent />
      </div>
    </>
  );
}
