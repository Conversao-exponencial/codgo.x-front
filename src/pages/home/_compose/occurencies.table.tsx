import { Button } from "@/components/ui/button"
import { DataTableProps, OccurenciesDataTable } from "./occurencies.grid"
import {  getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import dateBetweenFilterFn from "./utils"




export function OccurenciesTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        filterFns:{
            dateBetweenFilterFn: dateBetweenFilterFn,
          },
    })

  return (
    <div>
      <div className="rounded-md border">
        <OccurenciesDataTable columns={columns} data={data}/>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
