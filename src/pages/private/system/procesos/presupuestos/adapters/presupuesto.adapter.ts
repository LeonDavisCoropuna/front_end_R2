// PresupuestoAdapter.ts
import { Servicio } from "../models/nuevoPresupuesto.model";
import { Presupuesto } from "../models/nuevoPresupuesto.model";
// Define la interfaz de PresupuestoAdapter
export interface ServicioAdapter {
  serviceNumber: number;
  serviceCode: string;
  serviceDescription: string;
  serviceQuantity: number;
  serviceUnitOfMeasure: string;
  serviceUnitPrice: number;
  serviceAmount: number;
}

export interface PresupuestoAdapter {
  budgetNumber: number;
  budgetStatus: string;
  paymentMethod: string;
  reference: string;
  date: Date;
  validityDate: Date;
  hasPrice: boolean;
  budgetType: string;
  clientName: string;
  clientFullName: string;
  clientAddress: string;
  clientAttention: string;
  services: ServicioAdapter[];
}

// Función para adaptar objetos de Presupuesto a PresupuestoAdapter
export function adaptServicio(original: Servicio): ServicioAdapter {
  return {
    serviceNumber: original.no,
    serviceCode: original.codigo,
    serviceDescription: original.descripcion,
    serviceQuantity: original.cantidad,
    serviceUnitOfMeasure: original.uMedida,
    serviceUnitPrice: original.pUnitario,
    serviceAmount: original.importe,
  };
}

export function adaptPresupuesto(original: Presupuesto): PresupuestoAdapter {
  return {
    budgetNumber: original.numero,
    budgetStatus: original.estado,
    paymentMethod: original.formaPago,
    reference: original.referencia,
    date: original.fecha,
    validityDate: original.validez,
    hasPrice: original.precio,
    budgetType: original.tipo,
    clientName: original.cliente,
    clientFullName: original.nombre,
    clientAddress: original.direccion,
    clientAttention: original.atencion,
    services: original.servicio.map((servicio) => adaptServicio(servicio)),
  };
}
