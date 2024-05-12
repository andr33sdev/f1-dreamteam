import { F1Pilot } from "../types";

type IndividualF1PilotProps = {
  addedPilots: F1Pilot[];
  addF1Pilot: (f1Pilot: F1Pilot) => void;
  f1Pilot: F1Pilot;
};

export default function IndividualF1Pilot({
  addF1Pilot,
  f1Pilot,
}: IndividualF1PilotProps) {
  return (
    <>
      <td className="p-3 text-center">{f1Pilot.name}</td>
      <td className="p-3 text-center">{f1Pilot.team}</td>
      <td className="p-3 text-center">{f1Pilot.price}</td>
      <td className="p-3 text-center">
        <button
          onClick={() => addF1Pilot(f1Pilot)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full"
        >
          ADD TO MY TEAM!
        </button>
      </td>
    </>
  );
}
