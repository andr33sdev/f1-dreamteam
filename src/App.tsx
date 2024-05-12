import { f1Pilots } from "./data/db";
import PilotsList from "./components/PilotsList";
import MyF1Team from "./components/MyF1Team";
import usePilotsList from "./hooks/usePilotsList";

function App() {
  const { budget, addF1Pilot, addedF1Pilots, deleteF1Pilot } =
    usePilotsList();

  return (
    <div className="grid grid-cols-2 gap-32 bg-slate-950">
      <div className="ml-10 max-w-fit">
        <PilotsList
          f1Pilots={f1Pilots}
          addF1Pilot={addF1Pilot}
          addedF1Pilots={addedF1Pilots}
        />
      </div>
      <div className=" mr-10">
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
