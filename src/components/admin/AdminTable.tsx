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
  const cell = (row: T, col: Column<T>) => (col.render ? col.render(row) : String(row[col.key as keyof T] ?? ""));
  // Columns with a label become labelled rows on mobile; unlabelled columns
  // (e.g. an actions column) render as a full-width footer.
  const labelled = columns.filter((c) => c.label);
  const unlabelled = columns.filter((c) => !c.label);

  return (
    <>
      {/* Desktop / tablet: table */}
      <div className="hidden overflow-x-auto rounded-xl border border-black/10 md:block">
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
                      {cell(row, col)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile: cards */}
      <div className="space-y-3 md:hidden">
        {rows.length === 0 ? (
          <p className="rounded-xl border border-black/10 bg-white px-4 py-10 text-center text-sm text-muted">{emptyMessage}</p>
        ) : (
          rows.map((row) => (
            <div key={String(row[keyField])} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
              <dl className="space-y-2.5">
                {labelled.map((col) => (
                  <div key={col.key} className="flex items-start justify-between gap-4">
                    <dt className="flex-none text-xs font-medium uppercase tracking-wide text-muted">{col.label}</dt>
                    <dd className="min-w-0 break-words text-right text-sm text-ink">{cell(row, col)}</dd>
                  </div>
                ))}
              </dl>
              {unlabelled.length > 0 && (
                <div className="mt-4 border-t border-black/5 pt-3">
                  {unlabelled.map((col) => (
                    <div key={col.key}>{cell(row, col)}</div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
