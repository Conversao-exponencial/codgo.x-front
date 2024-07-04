import { columns } from "./_compose/occurrencies.data"
import { mockData } from "./mock";
import { OccurenciesTable } from "./_compose";

export default function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <OccurenciesTable columns={columns} data={mockData} />
    </div>
  )
}
