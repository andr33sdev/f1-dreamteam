import { F1Pilot } from "../types";
import IndividualF1Pilot from "./IndividualF1Pilot";
import { ToastContainer } from "react-toastify";

type PilotsListProps = {
  f1Pilots: F1Pilot[];
  addF1Pilot: (f1Pilot: F1Pilot) => void;
  addedF1Pilots: F1Pilot[];
};

export default function PilotsList({
  f1Pilots,
  addF1Pilot,
  addedF1Pilots,
}: PilotsListProps) {
  return (
    <div className="h-screen">
      <h2 className="font-black text-3xl uppercase mb-10 pt-10 text-slate-100">
        Available F1 Pilots
      </h2>
      <div className=" overflow-y-scroll h-3/4 rounded-lg">
        <table className="w-full text-sm text-center rtl:text-right text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-slate-900 border-b border-blue-400 dark:text-white p-5">
            <tr>
              <th className="p-3">Driver</th>
              <th className="p-3">Team</th>
              <th className="p-3">Price</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-slate-900 border-b border-blue-400 hover:bg-blue-500">
            {f1Pilots.map((f1Pilot) => (
              <tr key={f1Pilot.id} className="bg-slate-800 border-b border-blue-400 hover:bg-blue-900">
                <IndividualF1Pilot
                  addedPilots={addedF1Pilots}
                  addF1Pilot={addF1Pilot}
                  f1Pilot={f1Pilot}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />;
    </div>
  );
}
