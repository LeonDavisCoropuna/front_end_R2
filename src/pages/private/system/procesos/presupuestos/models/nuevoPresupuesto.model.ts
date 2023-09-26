export interface Servicio {
  no: number;
  codigo: string;
  descripcion: string;
  cantidad: number;
  uMedida: string;
  pUnitario: number;
  importe: number;
}
export interface Presupuesto {
  numero: number;
  estado: string;
  formaPago: string;
  referencia: string;
  fecha: Date;
  validez: Date;
  precio: boolean;
  tipo: string;
  cliente: string;
  nombre: string;
  direccion: string;
  atencion: string;
  servicio: Servicio[];
}

export const EmptyPresupuesto: Presupuesto = {
  numero: 0,
  estado: "",
  formaPago: "",
  referencia: "",
  fecha: new Date(),
  validez: new Date(),
  precio: true,
  tipo: "",
  cliente: "",
  nombre: "",
  direccion: "",
  atencion: "",
  servicio: [
    {
      no: 1,
      codigo: "",
      descripcion: "",
      cantidad: 0,
      uMedida: "",
      pUnitario: 0,
      importe: 18,
    },
  ],
};
