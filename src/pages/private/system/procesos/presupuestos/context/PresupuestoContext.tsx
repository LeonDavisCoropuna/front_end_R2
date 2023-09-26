import React, { createContext, useContext, useState } from 'react';
import { EmptyPresupuesto, Presupuesto } from "../models/nuevoPresupuesto.model"

// Define el tipo de tu contexto (opcional, pero es una buena práctica)
type PresupuestoContextType = {
  presupuesto: Presupuesto;
  setPresupuesto: React.Dispatch<React.SetStateAction<Presupuesto>>;
};

// Crea el contexto
const PresupuestoContext = createContext<PresupuestoContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export const usePresupuesto = () => {
  const context = useContext(PresupuestoContext);
  if (!context) {
    throw new Error('usePresupuesto debe ser utilizado dentro de un PresupuestoProvider');
  }
  return context;
};

// Proveedor del contexto
export const PresupuestoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [presupuesto, setPresupuesto] = useState<Presupuesto>(EmptyPresupuesto);

  return (
    <PresupuestoContext.Provider value={{ presupuesto, setPresupuesto }}>
      {children}
    </PresupuestoContext.Provider>
  );
};
