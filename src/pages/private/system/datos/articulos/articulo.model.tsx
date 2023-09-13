export interface Articulo {
  idN: number;
  nombre: string;
  categoria: string;
  tipo: string;
  precio: number;
  impuesto: number;
  stock: number;
  stockMin: number;
  stockMax: number;
}


export const ArticuloEmpty: Articulo = {
  idN: 0,
  nombre: '',
  categoria: '',
  tipo: '',
  precio: 0,
  impuesto: 0,
  stock: 0,
  stockMax: 0,
  stockMin: 0
};


function getKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

export const keysArticulo = getKeys(ArticuloEmpty);