import { setConfig } from '@/redux/configSlice';
import { deleteEntity } from '@/redux/crudSlice';
import { FormData } from '@/types';
import {
  Avatar,
  Badge,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Iconify from '../icon';

function TablesTableRow(props: FormData) {
  const dispatch = useDispatch();
  const { row, config } = props;
  const {entity} = config
  const { id, job, name, email, contact, address, status, age } = row;
  const textColor = useColorModeValue('gray.700', 'white');
  const bgStatus = useColorModeValue('gray.400', '#1a202c');
  const colorStatus = useColorModeValue('white', 'gray.400');
  const handleConfig = () => {
    dispatch(setConfig({ ...config, update: true, editValue: row, create: false, }));
  };

  const handleDelete = () => {
    dispatch(deleteEntity({ entityName: entity, id }));
  }
  return (
    <Tr>
      <Td minWidth={{ sm: '250px' }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar
            src="/assets/img/avatars/avatar1.png"
            w="50px"
            borderRadius="12px"
            me="18px"
          />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {job}
        </Text>
      </Td>
      <Td>
        <Text fontSize="sm" color="gray.400" fontWeight="normal">
          {address}
        </Text>
      </Td>
      <Td>
        <Text fontSize="sm" color="gray.400" fontWeight="normal">
          {contact}
        </Text>
      </Td>
      {/* <Td>
        <Badge
          bg={status === 'Online' ? 'green.400' : bgStatus}
          color={status === 'Online' ? 'white' : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td> */}
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {age}
        </Text>
      </Td>
      <Td>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<Iconify icon="solar:menu-dots-bold" />}
          />
          <MenuList>
            <MenuItem as={Link} to={`/${entity}/${"edit"}`} onClick={handleConfig}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
