import React from 'react';

import {
  Box,
  HStack,
  Text,
  Image,
  Spacer,
  Divider,
  Stack,
} from '@chakra-ui/react';
import { GiCapitol } from 'react-icons/gi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaMapSigns, FaMapMarkerAlt, FaMap } from 'react-icons/fa';

const Card = (props) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="xl">
      <Image src={props.Flag} w="100%" borderRadius="lg" objectFit="fit" />
      <Divider pt="1" />

      <Box p="5">
        <Stack>
          <HStack>
            <HStack>
              <FaMapMarkerAlt />
              <Text fontSize="xl">Name:</Text>
            </HStack>
            <Spacer />
            <Text fontSize="xl" fontWeight="bold">
              {props.Name}
            </Text>
          </HStack>
          <Divider pt="4" />
          <HStack>
            <HStack>
              <GiCapitol />
              <Text fontSize="xl">Capital:</Text>
            </HStack>
            <Spacer />
            <Text fontSize="xl" fontWeight="bold">
              {props.Capital}
            </Text>
          </HStack>
          <Divider pt="4" />

          <HStack>
            <HStack>
              <FaMapSigns />
              <Text fontSize="xl">Continent:</Text>
            </HStack>
            <Spacer />
            <Text fontSize="xl" fontWeight="bold">
              {props.Continent}
            </Text>
          </HStack>
          <Divider pt="3" />
          <HStack>
            <HStack>
              <BsFillPeopleFill />
              <Text fontSize="xl">Population:</Text>
            </HStack>
            <Spacer />
            <Text fontSize="xl" fontWeight="bold">
              {props.Population}
            </Text>
          </HStack>
          <Divider pt="3" />
          <HStack>
            <HStack>
              <FaMap />
              <Text fontSize="xl">Area:</Text>
            </HStack>
            <Spacer />
            <Text fontSize="xl" fontWeight="bold">
              {props.Area}
            </Text>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Card;
