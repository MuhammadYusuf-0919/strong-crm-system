import React from 'react';
import {
  Grid,
  Input,
  GridItem,
  FormLabel,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

interface EmployeeProps {
  config: {
    control: any;
    errors: any;
  };
}

const Employee: React.FC<EmployeeProps> = ({ config }) => {
  const { control, errors } = config;
  return (
    <Grid
      templateColumns={{
        sm: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(2, 1fr)',
      }}
      gap={6}
    >
      {/* Name */}
      <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
        <FormControl isInvalid={errors.name}>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Name
          </FormLabel>
          <Controller
            name="name"
            control={control}
            rules={{
              required: 'Name is required',
            }}
            render={({ field: { value, onChange } }) => (
              <Input
                size="lg"
                type="text"
                fontSize="sm"
                borderRadius="15px"
                value={value}
                variant="outline"
                placeholder="Leonard"
                onChange={onChange}
                isInvalid={Boolean(errors.name)}
              />
            )}
          />
          {errors.name && (
            <FormErrorMessage>{errors.name.message}</FormErrorMessage>
          )}
        </FormControl>
      </GridItem>

      {/* Email */}
      <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
        <FormControl isInvalid={errors.email}>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Email
          </FormLabel>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field: { value, onChange } }) => (
              <Input
                size="lg"
                fontSize="sm"
                borderRadius="15px"
                value={value}
                type="email"
                variant="outline"
                placeholder="example@example.com"
                onChange={onChange}
                isInvalid={Boolean(errors.email)}
              />
            )}
          />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>
      </GridItem>

      {/* Address */}
      <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
        <FormControl isInvalid={errors.address}>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Address
          </FormLabel>
          <Controller
            name="address"
            control={control}
            rules={{
              required: 'Address is required',
            }}
            render={({ field: { value, onChange } }) => (
              <Input
                size="lg"
                type="text"
                fontSize="sm"
                borderRadius="15px"
                value={value}
                variant="outline"
                placeholder="123 Main Street, City"
                onChange={onChange}
                isInvalid={Boolean(errors.address)}
              />
            )}
          />
          {errors.address && (
            <FormErrorMessage>{errors.address.message}</FormErrorMessage>
          )}
        </FormControl>
      </GridItem>

      {/* Job */}
      <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
        <FormControl isInvalid={errors.job}>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Job
          </FormLabel>
          <Controller
            name="job"
            control={control}
            rules={{
              required: 'Job is required',
            }}
            render={({ field: { value, onChange } }) => (
              <Input
                size="lg"
                type="text"
                fontSize="sm"
                borderRadius="15px"
                value={value}
                variant="outline"
                placeholder="Software Engineer"
                onChange={onChange}
                isInvalid={Boolean(errors.job)}
              />
            )}
          />
          {errors.job && (
            <FormErrorMessage>{errors.job.message}</FormErrorMessage>
          )}
        </FormControl>
      </GridItem>

      {/* Contact */}
      <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
        <FormControl isInvalid={errors.contact}>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Contact
          </FormLabel>
          <Controller
            name="contact"
            control={control}
            rules={{
              required: 'Contact is required',
              pattern: {
                value: /^\+?998?\s?-?(90|91|93|94|95|98|99|33|97|71)\s?-?(\d{3})\s?-?(\d{2})\s?-?(\d{2})$/,
                message: 'Invalid contact number',
              },
            }}
            render={({ field: { value, onChange } }) => (
              <Input
                size="lg"
                fontSize="sm"
                borderRadius="15px"
                value={value}
                type="tel"
                variant="outline"
                placeholder="1234567890"
                onChange={onChange}
                isInvalid={Boolean(errors.contact)}
              />
            )}
          />
          {errors.contact && (
            <FormErrorMessage>{errors.contact.message}</FormErrorMessage>
          )}
        </FormControl>
      </GridItem>

      {/* Age */}
      <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
        <FormControl isInvalid={errors.age}>
          <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Age
          </FormLabel>
          <Controller
            name="age"
            control={control}
            rules={{
              required: 'Age is required',
              min: {
                value: 18,
                message: 'Age must be a positive number',
              },
              max: {
                value: 100,
                message: 'Age must be less than 2',
              },
            }}
            render={({ field: { value, onChange } }) => (
              <Input
                size="lg"
                fontSize="sm"
                borderRadius="15px"
                value={value}
                type="number"
                variant="outline"
                placeholder="30"
                onChange={onChange}
                isInvalid={Boolean(errors.age)}
              />
            )}
          />
          {errors.age && (
            <FormErrorMessage>{errors.age.message}</FormErrorMessage>
          )}
        </FormControl>
      </GridItem>
    </Grid>
  );
};

export default Employee;
