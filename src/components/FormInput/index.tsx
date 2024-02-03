// FormInput.tsx
import React from 'react';
import {
  useForm,
  SubmitHandler,
  useController,
  Control,
} from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  FormErrorMessage,
} from '@chakra-ui/react';

interface FormInputProps {
  label: string;
  name: string;
  type: 'text' | 'number' | 'select' | 'date';
  options?: string[];
  control: Control;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  options = [],
  control,
}) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required: 'This field is required' }, // Add your validation rules here
  });

  return (
    <FormControl isInvalid={invalid}>
      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
        {label}
      </FormLabel>
      {type === 'text' && (
        <>
          <Input
            {...field}
            borderRadius="15px"
            mb="24px"
            fontSize="sm"
            type="text"
            placeholder={label}
            size="lg"
          />
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </>
      )}
      {type === 'number' && (
        <>
          <Input
            {...field}
            borderRadius="15px"
            mb="24px"
            fontSize="sm"
            type="number"
            placeholder={label}
            size="lg"
          />
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </>
      )}
      {type === 'select' && (
        <>
          <Select
            {...field}
            borderRadius="15px"
            mb="24px"
            fontSize="sm"
            placeholder={label}
            size="lg"
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </>
      )}
      {type === 'date' && (
        <>
          <Input
            {...field}
            borderRadius="15px"
            mb="24px"
            fontSize="sm"
            type="date"
            placeholder={label}
            size="lg"
          />
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </>
      )}
    </FormControl>
  );
};

export default FormInput;
