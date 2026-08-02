import { cn } from "@/lib/utils";

interface Column<T> {
  key: string;
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface Props<T> {
  columns: Column<T>[];
  rows: T[];
  keyField: keyof T;
  emptyMessage?: string;
}

export function AdminTable<T extends Record<string, unknown>>({ columns, rows, keyField, emptyMessage = "No records found." }: Props<T>) {
  return (
    <div className="overflow-x-auto rounded-xl border border-black/10">
      <table className="min-w-full divide-y divide-black/5">
        <thead className="bg-offwhite">
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5 bg-white">
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-10 text-center text-sm text-muted">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr key={String(row[keyField])} className={cn(i % 2 === 0 ? "bg-white" : "bg-offwhite/40")}>
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-sm text-ink">
                    {col.render ? col.render(row) : String(row[col.key as keyof T] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
