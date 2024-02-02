import { getDateRange } from '@/@core/utils/get-daterange';

interface UserProfile {
  billTo?: string;
  createdBy?: string;
  country?: string;
  address?: string;
  fullName?: string;
  companyName?: string;
  companyEmail?: string;
  email?: string;
  username?: string;
}

interface ClientData {
  id?: string;
  total?: string;
  balance?: string;
  dueDate?: string;
  issuedDate?: string;
  details?: { service: string }[];
  address?: string;
  companyName?: string;
  fullName?: string;
  username?: string;
  companyEmail?: string;
  serviceName?: string;
  statusName?: string;
  categoryName?: string;
}

export const visuallyHidden: React.CSSProperties = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
};

export function emptyRows(page: number, rowsPerPage: number, arrayLength: number): number {
  const total = page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
  return total;
}

function descendingComparator(a: any, b: any, orderBy: string): number {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order: 'asc' | 'desc', orderBy: string): (a: any, b: any) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface FilterArgument {
  dates: string[];
  value: string;
  search: string;
  authData: UserProfile[];
  tableData: ClientData[];
  userProfile: (id: string, data: UserProfile[]) => UserProfile | undefined;
  clientsData: UserProfile[];
  serviceValue: string;
  getComparator: (order: 'asc' | 'desc', orderBy: string) => (a: any, b: any) => number;
}

export function applyFilter(filterArgument: FilterArgument): ClientData[] {
  const {
    dates,
    value,
    search,
    authData,
    tableData,
    userProfile,
    clientsData,
    serviceValue,
    getComparator,
  } = filterArgument;

  // Stabilize tableData to prevent re-ordering issues during filtering
  const stabilizedThis = tableData?.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = getComparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  if (search || dates.length > 0 || serviceValue) {
    const queryLowered = search.toLowerCase();
    const service = serviceValue.toLowerCase();

    return tableData.filter((item) => {
      const client = userProfile(item.billTo, clientsData);
      const simple = userProfile(item.createdBy, authData);

      const isInDateRange = () => {
        if (!dates.length) return true;

        const [start, end] = dates;
        const range = getDateRange(start, end);
        const invoiceDate = new Date(item.issuedDate);

        return range.some((date) => {
          const rangeDate = new Date(date);
          return (
            invoiceDate.getFullYear() === rangeDate.getFullYear() &&
            invoiceDate.getDate() === rangeDate.getDate() &&
            invoiceDate.getMonth() === rangeDate.getMonth()
          );
        });
      };

      const includesService = (str: string | undefined) => str && str?.toLowerCase().includes(service);
      const includesQuery = (str: string | undefined) => str && str?.toLowerCase().includes(queryLowered);
      const includesServices = (details: { service: string }[] | undefined) =>
        details?.some((detail) => includesService(detail.service));

      const queryMatches = [
        client?.country,
        client?.address,
        client?.fullName,
        client?.companyName,
        client?.companyEmail,
        simple?.fullName,
        simple?.email,
        simple?.username,
        item?.email,
        item?.address,
        item?.fullName,
        item?.username,
        item?.companyName,
        item?.companyEmail,
        item?.serviceName,
        item?.statusName,
        item?.categoryName,
        String(item.id),
        String(item?.total),
        String(item.balance),
        item?.dueDate,
      ].some((field) => includesQuery(field));

      const src =
        includesServices(item?.details) ||
        includesService(item?.address) ||
        includesService(item?.companyName);

      return queryMatches && (isInDateRange() && queryMatches && src) && (queryMatches || src);
    });
  }

  // Filter based on status
  if (value) {
    if (value === 'all') {
      return tableData;
    } else {
      return tableData.filter((item) => item.status === value);
    }
  }

  return stabilizedThis.map((el) => el[0]);
}
