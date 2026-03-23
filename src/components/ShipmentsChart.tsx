import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shipment } from '../types';
import { format, subDays } from 'date-fns';

interface ShipmentsChartProps {
  shipments: Shipment[];
}

export function ShipmentsChart({ shipments }: ShipmentsChartProps) {
  // Generate chart data for the last 7 days
  const chartData = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), 6 - i);
    const dayShipments = shipments.filter(s =>
      format(s.departureDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
    return {
      date: format(date, 'MMM dd'),
      shipments: dayShipments.length,
      cost: dayShipments.reduce((sum, s) => sum + s.cost, 0),
    };
  });

  return (
    <div className="card chart-card">
      <h3>Shipments Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="shipments"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: '#3b82f6' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}