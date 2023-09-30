import React from "react";
import { Item } from "../models/nuevoPresupuesto.model";

export const ButtonModalItem: React.FC<{
  handleAttributeClick: (e: React.MouseEvent, attribute: keyof Item) => void;
  value: keyof Item;
  name: string;
  selectedAttribute: keyof Item | null;
}> = ({ name, value, handleAttributeClick, selectedAttribute }) => {
  return (
    <button
      onClick={(e: React.MouseEvent) => handleAttributeClick(e, value)}
      className={`border-[0.15em] p-3 w-full text-black rounded-md ${
        selectedAttribute === value && "bg-black text-white scale-105"
      } `}
    >
      {name}
    </button>
  );
};
