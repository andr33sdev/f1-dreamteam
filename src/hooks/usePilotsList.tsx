import { useState } from "react";
import { F1Pilot } from "../types";
import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function usePilotsList() {
  const [addedF1Pilots, setAddedF1Pilots] = useState<F1Pilot[]>([]);
  const [budget, setBudget] = useState(50000000);

  const existsAlert = () =>
    toast.warning("The pilot is already in your team!", {
      autoClose: 1000,
      transition: Flip,
    });

  const insufficientBudgetAlert = () =>
    toast.warning("Insufficient budget!", {
      autoClose: 1000,
      transition: Flip,
    });

  const successAddedAlert = (pilot: F1Pilot["name"]) => {
    toast.success(`${pilot} succesfully added`, {
      autoClose: 1000,
      transition: Flip,
    });
  };

  const addF1Pilot = (f1Pilot: F1Pilot) => {
    const pilotExists = addedF1Pilots.find((pilot) => pilot.id === f1Pilot.id);

    if (pilotExists) {
      existsAlert();
    } else if (budget >= f1Pilot.price) {
      setAddedF1Pilots([...addedF1Pilots, f1Pilot]);
      setBudget(budget - f1Pilot.price);
      successAddedAlert(f1Pilot.name);
    } else {
      insufficientBudgetAlert();
    }
    //BUDGET >= f1Pilot.price ? setAddedF1Pilots([...addedF1Pilots, f1Pilot]) : console.log('No alcanza');
  };

  const deleteF1Pilot = (f1Pilot: F1Pilot) => {
    const postDeletedF1Pilots = addedF1Pilots.filter(
      (pilot) => pilot.id !== f1Pilot.id
    );
    setAddedF1Pilots(postDeletedF1Pilots);
    setBudget(budget + f1Pilot.price);
  };

  return {
    budget,
    setBudget,
    addF1Pilot,
    addedF1Pilots,
    setAddedF1Pilots,
    deleteF1Pilot,
  };
}
