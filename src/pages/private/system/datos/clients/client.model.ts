export interface Client {
  idNum: number;
  name: string;
  dniRuc: string;
  address: string;
  telephone: number;
  clientType: string;
  state: string;
}

export const ClientEmpty: Client = {
  idNum: 0,
  name: '',
  dniRuc: '',
  address: '',
  telephone: 0,
  clientType: '',
  state: ''
};
