import { Shipment } from '../types';
import { format } from 'date-fns';

interface ShipmentsTableProps {
  // TO-DO: create interface for Shipments search
  shipments: Shipment[];
  onSort?: (key: keyof Shipment) => void;
}

export function ShipmentsTable({ shipments }: ShipmentsTableProps) {
  return (
    <div className="card table-card">
      <div className="table-header">
        <h3>Newest Shipments</h3>
      </div>
      <div className="table-scroll">
        <table className="shipment-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Carrier</th>
              <th>ETA</th>
              <th>Status</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {shipments.slice(0, 10).map((shipment, index) => (
              <tr key={shipment.id} className={index % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td>{shipment.id}</td>
                <td>{shipment.origin.city}, {shipment.origin.state}</td>
                <td>{shipment.destination.city}, {shipment.destination.state}</td>
                <td>{shipment.carrier}</td>
                <td>{format(shipment.eta, 'MMM dd, yyyy')}</td>
                <td>
                  <span className={`status-badge status-${shipment.status.replace('-', '')}`}>
                    {shipment.status}
                  </span>
                </td>
                <td>${shipment.cost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}