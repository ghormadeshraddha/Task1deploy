import React from "react";
import { Text, Heading, Flex, Box } from "@chakra-ui/react";

export default function ForEmployersLogo({ rework, ai = "ai", ...props }) {
  return (
    <Box {...props}>
      <Flex gap="4px" alignItems="center" flexWrap="wrap">
        <Heading
          size="lg"
          as="h1"
          color="white.A700_01"
          pl="7px"
          letterSpacing="-0.71px"
          fontFamily="Outfit"
          fontSize="35.5px"
          borderColor="deep_purple.600"
          borderWidth="1px"
          borderStyle="solid"
          borderRadius="5px"
        >
          <Heading size="lg" as="span" color="white.A700_01" fontFamily="Actor">r</Heading>
          <Heading size="lg" as="span" color="white.A700_01" bfontFamily="Actor" letterSpacing="2.84px">
            e
          </Heading>
          <Heading size="lg" as="span" color="white.A700_01" fontFamily="Actor" fontWeight={400}>
            work
          </Heading>
        </Heading>
        <Text size="xs" color="white.A700_01" mb="4px" fontFamily="Gilroy-Regular" fontSize="11.43px" alignSelf="end">
          {ai}
        </Text>
      </Flex>
    </Box>
  );
}
