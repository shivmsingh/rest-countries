import axios from 'axios';
import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  Button,
  FormControl,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import Card from './Card';
import Footer from './Footer';

const CountryData = () => {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
      setCountryData((countryData) => [response.data, ...countryData]);
      console.log(countryData);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
    setCountryName('');
  };
  return (
    <VStack py="4">
      <Heading as="h1" size="2xl" lineHeight="taller">
        REST Countries
      </Heading>
      <Box w={['95%', '90%', '80%', '80%', '40%']}>
        <form onSubmit={handleSubmit}>
          <Stack direction={['column', 'row', 'row', 'row']}>
            <FormControl isRequired>
              <InputGroup size="lg">
                <InputLeftAddon children="Country" />
                <Input
                  type="text"
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                  required
                  autoFocus
                />
              </InputGroup>
            </FormControl>
            <Button
              leftIcon={<FaSearch />}
              size="lg"
              colorScheme="pink"
              type="submit"
            >
              Search
            </Button>
          </Stack>
        </form>
      </Box>
      <Box w={['95%', '90%', '90%', '80%', '80%']}>
        <SimpleGrid spacing={[5, 5, 10]} mt="5" columns={[1, 1, 1, 2, 3]}>
          {countryData.map((prop) => (
            <Card
              key={prop[0].name.official}
              Flag={prop[0].flags.svg}
              Name={prop[0].name.common}
              Capital={prop[0].capital[0] || prop[1].capital[0]}
              Continent={prop[0].region}
              Population={prop[0].population}
              Area={prop[0].area}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </VStack>
  );
};

export default CountryData;
