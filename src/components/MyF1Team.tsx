import { F1Pilot } from "../types";
import AddedF1Pilot from "./AddedF1Pilot";

type MyF1TeamProps = {
  budget: number;
  addedF1Pilots: F1Pilot[];
  deleteF1Pilot: (f1Pilot: F1Pilot) => void;
};

export default function MyF1Team({ budget, addedF1Pilots, deleteF1Pilot }: MyF1TeamProps) {
  return (
    <>
      <div className="flex items-center my-10 justify-between">
        <h2 className="font-black text-slate-100 text-3xl uppercase">
          My F1 Team
        </h2>
        <h3 className="font-black text-slate-100 text-xl uppercase">
          Budget: {budget}
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {addedF1Pilots.map((f1Pilot) => (
          <AddedF1Pilot
            key={f1Pilot.id}
            f1Pilot={f1Pilot}
            deleteF1Pilot={deleteF1Pilot}
          />
        ))}
      </div>
    </>
  );
}
