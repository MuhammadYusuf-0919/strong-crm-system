// FormInput.tsx
import React, { ChangeEvent } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';

interface FormInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder: string;
  type: 'text' | 'number' | 'select' | 'date';
  options?: string[];
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type,
  options = [],
}) => (
  <FormControl>
    <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
      {label}
    </FormLabel>
    {type === 'text' && (
      <Input
        borderRadius='15px'
        mb='24px'
        fontSize='sm'
        type="text"
        placeholder={placeholder}
        size='lg'
        name={name}
        value={value}
        onChange={onChange}
      />
    )}
    {type === 'number' && (
      <Input
        borderRadius='15px'
        mb='24px'
        fontSize='sm'
        type="number"
        placeholder={placeholder}
        size='lg'
        name={name}
        value={value}
        onChange={onChange}
      />
    )}
    {type === 'select' && (
      <Select
        borderRadius='15px'
        mb='24px'
        fontSize='sm'
        placeholder={placeholder}
        size='lg'
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    )}
    {type === 'date' && (
      <Input
        borderRadius='15px'
        mb='24px'
        fontSize='sm'
        type="date"
        placeholder={placeholder}
        size='lg'
        name={name}
        value={value}
        onChange={onChange}
      />
    )}
  </FormControl>
);

export default FormInput;
