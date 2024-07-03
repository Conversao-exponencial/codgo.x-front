import { columns } from "./_compose/occurrencies.data"
import { OccurenciesTable } from "./_compose/occurencies.table"

export default function DemoPage() {
    const data = [
        {
          id: 3232323232,
          transportador_name: "Transportador XYZ",
          tipo: "Ocorrência de Tipo 1",
          transportador_cnpj: "12.345.678/0001-99",
          ocorreu_em: "2023-07-01T12:00:00Z",
        },
        {
          id: 3232323233,
          transportador_name: "Transportador ABC",
          tipo: "Ocorrência de Tipo 2",
          transportador_cnpj: "98.765.432/0001-00",
          agendado_para: "2023-07-04T16:00:00Z"
        }
      ];
  return (
    <div className="container mx-auto py-10">
      <OccurenciesTable columns={columns} data={data} />
    </div>
  )
}
