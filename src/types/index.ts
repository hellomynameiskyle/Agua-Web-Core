export interface Shipment {
  id: string;
  origin: {
    city: string;
    state: string;
  };
  destination: {
    city: string;
    state: string;
  };
  carrier: string;
  eta: Date;
  departureDate: Date;
  itemSize: 'small' | 'medium' | 'large';
  weight: number;
  cost: number;
  status: 'pending' | 'in-transit' | 'delivered' | 'delayed';
}

export type ShipmentStatus = Shipment['status'];