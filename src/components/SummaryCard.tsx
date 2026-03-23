interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function SummaryCard({ title, value, icon: Icon, trend }: SummaryCardProps) {
  return (
    <div className="card summary-card">
      <div className="card-content">
        <div>
          <p className="summary-title">{title}</p>
          <p className="summary-value">{value}</p>
          {trend && (
            <p className={`trend-indicator ${trend.isPositive ? 'positive' : 'negative'}`}>
              {trend.isPositive ? '▲' : '▼'} {Math.abs(trend.value)}% from last month
            </p>
          )}
        </div>
        <div className="summary-icon">
          <Icon className="icon-large" />
        </div>
      </div>
    </div>
  );
}