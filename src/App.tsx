import { useShipments } from './hooks/useShipments';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { SummaryCard } from './components/SummaryCard';
import { ShipmentsTable } from './components/ShipmentsTable';
import { ShipmentsChart } from './components/ShipmentsChart';
import { CardSkeleton, TableSkeleton } from './components/LoadingSkeleton';
import { Package, DollarSign, Truck, Clock } from 'lucide-react';

function App() {
  const { shipments, isLoading } = useShipments();

  const totalShipments = shipments.length;
  const totalCost = shipments.reduce((sum, s) => sum + s.cost, 0);
  const avgWeight = shipments.reduce((sum, s) => sum + s.weight, 0) / shipments.length;
  const inTransitCount = shipments.filter(s => s.status === 'in-transit').length;

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-main">
        <Header />

        <main className="main-content">
          <div className="summary-grid">
            {isLoading ? (
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            ) : (
              <>
                <SummaryCard
                  title="Page Views"
                  value={totalShipments}
                  icon={Package}
                  trend={{ value: 15.8, isPositive: true }}
                />
                <SummaryCard
                  title="Total Revenue"
                  value={`$${totalCost.toFixed(2)}`}
                  icon={DollarSign}
                  trend={{ value: 34, isPositive: false }}
                />
                <SummaryCard
                  title="Bounce Rate"
                  value={`${(avgWeight * 0.1).toFixed(1)}%`}
                  icon={Truck}
                  trend={{ value: 24.2, isPositive: true }}
                />
                <SummaryCard
                  title="Total Subscribers"
                  value={inTransitCount}
                  icon={Clock}
                  trend={{ value: 8.3, isPositive: true }}
                />
              </>
            )}
          </div>

          <section className="content-grid">
            <div className="content-table">
              {isLoading ? <TableSkeleton /> : <ShipmentsTable shipments={shipments} />}
            </div>
            <div className="content-chart">
              {isLoading ? (
                <div className="chart-placeholder" />
              ) : (
                <ShipmentsChart shipments={shipments} />
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;