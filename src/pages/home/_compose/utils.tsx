/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterFn } from '@tanstack/react-table';

export const dateBetweenFilterFn: FilterFn<any> = (row, columnId, value) => {
  const date = new Date(row.getValue(columnId)) ;
  const [start, end] = value; 
  if ((start || end) && !date) return false;
  if (start && !end) {
    return date.getTime() >= start.getTime();
  } else if (!start && end) {
    return date.getTime() <= end.getTime();
  } else if (start && end) {
    return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
  } else return true;
};

export function isValidDate(d: any) {
  const parsedDate = new Date(d);
  return parsedDate instanceof Date && !Number.isNaN(parsedDate);
}


dateBetweenFilterFn.autoRemove;

export default dateBetweenFilterFn;
