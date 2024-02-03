// CrudForm.tsx
import React from 'react';
import { FormData } from '@/types';
import { RootState } from '@/redux';
import Card from '@/components/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addEntity, updateEntity } from '@/redux/crudSlice';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

const CrudForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    entity,
    create,
    update,
    editValue,
    initialState,
    ADD_NEW_ENTITY,
    crudForm: FormElements,
  } = useSelector((state: RootState) => state.config);
  const [loading, setLoading] = React.useState(false);
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: create ? initialState : editValue,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data: FormData) => {
    try {
      setLoading(true); 

      if (update) {
        await dispatch(updateEntity({ entityName: entity, data }));
      } else if (create) {
        await dispatch(addEntity({ entityName: entity, data }));
      }

      reset(initialState);
      navigate(`/${entity}`);
    } catch (error) {
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Box pt={20}>
      <Card>
        <VStack spacing="4" align="stretch" textAlign="end">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Text fontSize="xl" fontWeight="bold" mb={10} display="flex">
              {ADD_NEW_ENTITY}
            </Text>
            <FormElements config={{ control, errors }} />
            <Button
              mt={10}
              w="100px"
              ml="auto"
              type="submit"
              colorScheme="teal"
              isLoading={loading}
              disabled={!isDirty || loading}
            >
              {create
                ? loading
                  ? 'Creating...'
                  : 'Create'
                : loading
                ? 'Updating...'
                : 'Update'}
            </Button>
          </form>
        </VStack>
      </Card>
    </Box>
  );
};

export default CrudForm;
