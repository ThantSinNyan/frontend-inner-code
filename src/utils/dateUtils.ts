
export function formatDate(dateStr: string | Date): string {
  if (!dateStr) return '';
  const date = typeof dateStr === 'string' ? new Date(dateStr) : dateStr;

  const day = String(date.getDate()).padStart(2, '0'); 
  const month = date.toLocaleString('en-GB', { month: 'short' }); 
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
