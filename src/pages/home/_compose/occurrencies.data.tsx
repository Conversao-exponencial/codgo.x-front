
import { ColumnDef } from '@tanstack/react-table';
import { OcorrunciesDataGrid } from './occurrencies.types';
import { DatePickerWithRange } from '@/components/ui/date-picker-with-range';
import { isValidDate } from './utils';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { DebouncedInput } from '@/components/ui/debounce-input';
import { DateRange } from 'react-day-picker';


export const columns: ColumnDef<OcorrunciesDataGrid>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <div>
        <h2>Id</h2>
        <DebouncedInput
          value={(column.getFilterValue() ?? '') as number}
          onChange={value => column.setFilterValue(value)}
          placeholder="Filtrar ID..."
        />
      </div>
    ),
    filterFn: 'includesString',
  },
  {
    accessorKey: 'tipo',
    header: ({ column }) => (
      <div>
        <h2>Tipo de Ocorrência</h2>
        <DebouncedInput
          value={(column.getFilterValue() ?? '') as string}
          onChange={value => column.setFilterValue(value)}
          placeholder="Filtrar tipo..."
        />
      </div>
    ),
    filterFn: 'includesString',
  },
  {
    id: "Data",
    header: ({ column }) => {
      const onChange=(value: DateRange | undefined) => {
        if (isValidDate(value)) {
          column.setFilterValue(() => [
            value?.from,
            value?.to,
          ]);
        }
      }
      return (
        <>
          <Button
          variant="ghost"
          className="pb-0"
          onClick={() => column.toggleSorting()}
            >
            Ocorreu em / Agendado para
            <ArrowUpDown className='ml-2' size={15}/>
          </Button>
          <DatePickerWithRange onDateSelect={onChange} />
        </>
      );
    },
    filterFn: "dateBetweenFilterFn",
    sortingFn: "datetime",
    accessorFn: (row) => row.ocorreu_em || row.agendado_para || '',
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (!value) return '';
      const datePart = value.split('T')[0];
      const [year, month, day] = datePart.split('-');
      return `${day}/${month}/${year}`;
    },
  },
  {
    accessorKey: 'transportador_name',
    header: ({ column }) => (
      <div>
        <h2>Transportador</h2>
        <DebouncedInput
          value={(column.getFilterValue() ?? '') as string}
          onChange={value => column.setFilterValue(value)}
          placeholder="Filter Transportador..."
        />
      </div>
    ),
    filterFn: 'includesString',
  },
  {
    accessorKey: 'transportador_cnpj',
    header: ({ column }) => (
      <div>
        <h2>CNPJ/CPF do Transportador</h2>
        <DebouncedInput
          value={(column.getFilterValue() ?? '') as string}
          onChange={value => column.setFilterValue(value)}
          placeholder="Filtrar CNPJ/CPF..."
        />
      </div>
    ),
    filterFn: 'includesString',
  }
];
