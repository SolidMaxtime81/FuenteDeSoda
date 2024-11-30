export interface Product {
    id: number;
    name: string;
    guid: string;
    price: number;
    description?: string;
    createdDate: Date;
    updatedDate: Date;
    createdBy: number;
    updatedBy: number;
    status: number;
  }