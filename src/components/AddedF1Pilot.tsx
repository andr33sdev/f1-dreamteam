import { F1Pilot } from "../types";
import { formatCurrency } from "../helpers";

type AddedF1PilotProps = {
  f1Pilot: F1Pilot;
  deleteF1Pilot: (f1Pilot: F1Pilot) => void;
};

export default function AddedF1Pilot({
  f1Pilot,
  deleteF1Pilot,
}: AddedF1PilotProps) {
  return (
    <div
      key={f1Pilot.id}
      className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 bg-slate-700 text-white rounded-xl"
    >
      <div className="mb-2 sm:mb-0">
        <p className="font-black text-lg">{f1Pilot.name}</p>
        <p className="text-sm">{f1Pilot.team}</p>
        <p className="text-sm">{`Price: ${formatCurrency(f1Pilot.price)}`}</p>
      </div>
      <button
        onClick={() => deleteF1Pilot(f1Pilot)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full"
      >
        X
      </button>
    </div>
  );
}
