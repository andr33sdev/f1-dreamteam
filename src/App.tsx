import { f1Pilots } from "./data/db";
import PilotsList from "./components/PilotsList";
import MyF1Team from "./components/MyF1Team";
import usePilotsList from "./hooks/usePilotsList";

function App() {
  const { budget, addF1Pilot, addedF1Pilots, deleteF1Pilot } = usePilotsList();

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-32 sm:flex sm:flex-col sm:w-full sm:m-0 sm:p-0 bg-slate-950">
      <div className="lg:ml-10 lg:mt-5 sm:w-full sm:shrink-0 sm:m-0 sm:p-0">
        <PilotsList
          f1Pilots={f1Pilots}
          addF1Pilot={addF1Pilot}
          addedF1Pilots={addedF1Pilots}
        />
      </div>
      <div className="lg:mr-10 sm:mx-5 sm:mb-5 sm:p-0">
        <MyF1Team
          budget={budget}
          addedF1Pilots={addedF1Pilots}
          deleteF1Pilot={deleteF1Pilot}
        />
      </div>
    </div>
  );
}

export default App;
