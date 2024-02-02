// CrudForm.tsx
import Card from '@/components/Card';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Button, Grid, GridItem, VStack } from '@chakra-ui/react';
import FormInput from '@/components/FormInput';

interface FormData {
  name: string;
  logo: string;
  email: string;
  subdomain: string;
  domain: string;
  status: string;
  date: string;
  description: string;
}

const CrudForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    logo: '',
    email: '',
    subdomain: '',
    domain: '',
    status: '',
    date: '',
    description: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., dispatch an action)
    console.log('Form submitted with data:', formData);
    // Reset form after submission if needed
    setFormData({
      name: '',
      logo: '',
      email: '',
      subdomain: '',
      domain: '',
      status: '',
      date: '',
      description: '',
    });
  };

  return (
    <Box pt={20}>
      <Card>
        <VStack spacing="4" align="stretch" textAlign='end'>
          <form onSubmit={handleSubmit}>
            <Grid
              templateColumns={{
                sm: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(2, 1fr)',
              }}
              gap={4}
            >
              <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
                <FormInput
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  type="text"
                />
              </GridItem>

              <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
                <FormInput
                  label="Logo"
                  name="logo"
                  value={formData.logo}
                  onChange={handleChange}
                  placeholder="Your logo URL"
                  type="text"
                />
              </GridItem>

              <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
                <FormInput
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  type="text"
                />
              </GridItem>

              <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
                <FormInput
                  label="Subdomain"
                  name="subdomain"
                  value={formData.subdomain}
                  onChange={handleChange}
                  placeholder="Your subdomain"
                  type="text"
                />
              </GridItem>

              <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
                <FormInput
                  label="Domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  placeholder="Your domain"
                  type="text"
                />
              </GridItem>

              <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
                <FormInput
                  label="Status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  placeholder="Your status"
                  type="select"
                  options={['Active', 'Inactive']}
                />
              </GridItem>

              <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
                <FormInput
                  label="Date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Your date"
                  type="date"
                />
              </GridItem>

              <GridItem colSpan={{ sm: 1, md: 1, lg: 1 }}>
                <FormInput
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Your description"
                  type="text"
                />
              </GridItem>
            </Grid>

            <Button w='10%' type="submit" colorScheme="teal" ml='auto'>
              Submit
            </Button>
          </form>
        </VStack>
      </Card>
    </Box>
  );
};

export default CrudForm;
