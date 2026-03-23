import { Shipment } from '../types';
import { addDays, subDays } from 'date-fns';

const cities = [
  { city: 'New York', state: 'NY' },
  { city: 'Los Angeles', state: 'CA' },
  { city: 'Chicago', state: 'IL' },
  { city: 'Houston', state: 'TX' },
  { city: 'Phoenix', state: 'AZ' },
  { city: 'Philadelphia', state: 'PA' },
  { city: 'San Antonio', state: 'TX' },
  { city: 'San Diego', state: 'CA' },
  { city: 'Dallas', state: 'TX' },
  { city: 'San Jose', state: 'CA' },
];

const carriers = ['FedEx', 'UPS', 'USPS', 'DHL', 'Amazon Logistics'];

const statuses: Shipment['status'][] = ['pending', 'in-transit', 'delivered', 'delayed'];

const sizes: Shipment['itemSize'][] = ['small', 'medium', 'large'];

export function generateMockShipment(id: string): Shipment {
  const origin = cities[Math.floor(Math.random() * cities.length)];
  let destination = cities[Math.floor(Math.random() * cities.length)];
  while (destination.city === origin.city) {
    destination = cities[Math.floor(Math.random() * cities.length)];
  }

  const departureDate = subDays(new Date(), Math.floor(Math.random() * 30));
  const eta = addDays(departureDate, Math.floor(Math.random() * 7) + 1);

  return {
    id,
    origin,
    destination,
    carrier: carriers[Math.floor(Math.random() * carriers.length)],
    eta,
    departureDate,
    itemSize: sizes[Math.floor(Math.random() * sizes.length)],
    weight: Math.floor(Math.random() * 50) + 1,
    cost: Math.floor(Math.random() * 100) + 10,
    status: statuses[Math.floor(Math.random() * statuses.length)],
  };
}

export function generateMockShipments(count: number): Shipment[] {
  return Array.from({ length: count }, (_, i) => generateMockShipment(`shipment-${i + 1}`));
}

export function updateShipmentRandomly(shipment: Shipment): Shipment {
  const updates: Partial<Shipment> = {};

  // Randomly update cost
  if (Math.random() < 0.3) {
    updates.cost = shipment.cost + (Math.random() - 0.5) * 10;
  }

  // Randomly update ETA
  if (Math.random() < 0.2) {
    updates.eta = addDays(shipment.eta, Math.floor(Math.random() * 3) - 1);
  }

  // Randomly update status
  if (Math.random() < 0.1) {
    updates.status = statuses[Math.floor(Math.random() * statuses.length)];
  }

  return { ...shipment, ...updates };
}