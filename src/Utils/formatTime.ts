// date fns import
import { format, getTime, formatDistanceToNow } from 'date-fns';

export function fDate(date: string | number | Date, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: string | number | Date, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: string | number | Date): number {
  return date ? getTime(new Date(date)) : 0;
}

export function fToNow(date: string | number | Date): string {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}
