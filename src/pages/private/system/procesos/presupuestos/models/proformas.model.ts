export const EmptyProformas: Proformas = {
  proformas: [
    {
      nroPPTO: "",
      nroOrden: null,
      cliente: "",
      fecha: new Date(),
      aprobadoPor: "",
      fechaAprobacion: new Date(),
      fechaEntrega: new Date(),
      nroFactura: "",
      estado: "",
      observacion: "",
      tipoOrden: "",
      status: "",
      creado: new Date(),
      creadoPor: "",
      actualizado: new Date(),
      actualizadoPor: "",
      fechaTermino: new Date(),
      termiadoPor: "",
      bitacora: "",
      validadoPor: "",
    },
  ],
};

export const EmptyProforma: Proforma = {
  nroPPTO: "PPTO-7541",
  nroOrden:     1201,
  cliente: "Erre Dos    aasdasdsaasdasdsa dasdsaasdasdsaa asdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasds qweqweqweqweqweqftdtsaydasdaisdguiasguidguiasdguiasigudagiusdiuasigdgasduiagiusdgiasgiuda",
  fecha: new Date(),
  aprobadoPor: "",
  fechaAprobacion: new Date(),
  fechaEntrega: new Date(),
  nroFactura: "",
  estado: "",
  observacion: "",
  tipoOrden: "",
  status: "",
  creado: new Date(),
  creadoPor: "",
  actualizado: new Date(),
  actualizadoPor: "",
  fechaTermino: new Date(),
  termiadoPor: "",
  bitacora: "",
  validadoPor: "",
};

export interface Proformas {
  proformas: Proforma[];
}

export interface Proforma {
  nroPPTO: string;
  nroOrden: number | null;
  cliente: string;
  fecha: Date;
  aprobadoPor: string;
  fechaAprobacion: Date;
  fechaEntrega: Date;
  nroFactura: string;
  estado: string;
  observacion: string;
  tipoOrden: string;
  status: string;
  creado: Date;
  creadoPor: string;
  actualizado: Date;
  actualizadoPor: string;
  fechaTermino: Date;
  termiadoPor: string;
  bitacora: string;
  validadoPor: string;
}
