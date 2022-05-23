export enum Etat {
  AFAIRE,
  ENCOURS,
  FAIT,
}

export class Todo {
  id?: number;
  nom?: string;
  description?: string;
  etat?: Etat;
}
