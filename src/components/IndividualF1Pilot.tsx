import { F1Pilot } from "../types";
import { formatCurrency } from "../helpers";

type IndividualF1PilotProps = {
  addedPilots: F1Pilot[];
  addF1Pilot: (f1Pilot: F1Pilot) => void;
  f1Pilot: F1Pilot;
};

export default function IndividualF1Pilot({
  addF1Pilot,
  f1Pilot,
}: IndividualF1PilotProps) {
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <td className="p-2 sm:p-3 text-center">
        <p className="font-black text-lg sm:text-base">{f1Pilot.name}</p>
      </td>
      <td className="p-2 sm:p-3 text-center">
        <p className="text-sm">{f1Pilot.team}</p>
      </td>
      <td className="p-2 sm:p-3 text-center">
        <p className="text-sm">{formatCurrency(f1Pilot.price)}</p>
      </td>
      <td className="p-2 sm:p-3 text-center">
        {isMobile ? (
          <button
            onClick={() => addF1Pilot(f1Pilot)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold lg:py-1 lg:px-2 p-2 rounded-full"
          >
            ADD
          </button>
        ) : (
          <button
            onClick={() => addF1Pilot(f1Pilot)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold lg:py-1 lg:px-2 sm:px-3 rounded-full"
          >
            ADD TO MY TEAM!
          </button>
        )}
      </td>
    </>
  );
}
