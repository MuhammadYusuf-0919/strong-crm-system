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
import { fetchEntity } from '@/redux/crudSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import { RootState } from '@/redux';
import { setConfig } from '@/redux/configSlice';
import { FormData } from '@/types';

interface CrudTableProps {
  config: {
    entity: string;
    captions: string[];
    DATATABLE_TITLE: string;
  };
}

const CrudTable: React.FC<CrudTableProps> = ({ config }) => {
  const { entity, captions, DATATABLE_TITLE } = config;
  const dispatch = useDispatch();
  const textColor = useColorModeValue('gray.700', 'white');
  const data: FormData[] = useSelector((state: RootState) => state.crud.data);
  const status = useSelector((state: string) => state.crud.status);
  const error = useSelector((state: boolean) => state.crud.error);
  const handleConfig = () => {
    dispatch(setConfig({ ...config, create: true }));
  };

  React.useEffect(() => {
    dispatch(fetchEntity(entity));
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

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
            {DATATABLE_TITLE}
          </Text>
          <Button
            as={Link}
            to={`/${entity}/${'create'}`}
            type="submit"
            bg="teal.300"
            w="100px"
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
            onClick={handleConfig}
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
              {data &&
                data.map((row: FormData) => (
                  <TablesTableRow
                    row={row}
                    config={config}
                    key={`${row.email}-${row.name}`}
                  />
                ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CrudTable;
