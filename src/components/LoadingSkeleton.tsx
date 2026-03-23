export function LoadingSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton-line short" />
      <div className="skeleton-line medium" />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="card skeleton-card">
      <div className="skeleton-row">
        <div className="skeleton-main">
          <div className="skeleton-line tiny" />
          <div className="skeleton-line large" />
          <div className="skeleton-line small" />
        </div>
        <div className="skeleton-icon" />
      </div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="card table-skeleton">
      <div className="table-header">
        <div className="skeleton-line medium" />
      </div>
      <div className="table-body">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="table-row-skeleton">
            <div className="skeleton-line short" />
            <div className="skeleton-line short" />
            <div className="skeleton-line short" />
            <div className="skeleton-line tiny" />
          </div>
        ))}
      </div>
    </div>
  );
}