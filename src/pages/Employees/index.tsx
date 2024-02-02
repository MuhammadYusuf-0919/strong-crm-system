// Chakra imports
import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from '@/components/Card';
import CardBody from '@/components/Card/CardBody.js';
import CardHeader from '@/components/Card/CardHeader.js';
import TablesTableRow from '@/components/Tables/TablesTableRow';
import { useEffect } from 'react';
import { fetchEmployees } from '@/redux/employeeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface Employee {
  name: string;
  logo: string;
  email: string;
  subdomain: string;
  domain: string;
  status: string;
  date: string;
}

function Employees() {
  const dispatch = useDispatch();
  const textColor = useColorModeValue('gray.700', 'white');

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const data = useSelector(
    (state: { employees: { data: Employee[] } }) => state.employees.data
  );

  const captions: string[] = [
    'Name',
    'Logo',
    'Email',
    'Subdomain',
    'Domain',
    'Status',
    'Date',
  ];
  console.log(data);
  return (
    <Box pt={20}>
      <Card overflowX={{ sm: 'scroll', xl: 'hidden' }}>
        <CardHeader
          p="6px 0px 22px 0px"
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
        >
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Employees
          </Text>
          <Button
            as={Link}
            to="/employee/create"
            type="submit"
            bg="teal.300"
            w="10%"
            h="45"
            mb="20px"
            size="md"
            color="white"
            _hover={{
              bg: 'teal.200',
            }}
            _active={{
              bg: 'teal.400',
            }}
          >
            Create
          </Button>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                {captions.map((caption, idx) => (
                  <Th
                    color="gray.400"
                    key={idx}
                    ps={idx === 0 ? '0px' : undefined}
                  >
                    {caption}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {data.map((row) => (
                <TablesTableRow
                  key={`${row.email}-${row.name}`}
                  name={row.name}
                  logo={row.logo}
                  email={row.email}
                  subdomain={row.subdomain}
                  domain={row.domain}
                  status={row.status}
                  date={row.date}
                />
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Employees;
