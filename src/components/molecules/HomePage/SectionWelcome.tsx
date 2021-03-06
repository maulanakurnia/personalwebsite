import { Container, Box, Text } from "@chakra-ui/react";
import { WavingHand } from "atoms/wavingHand";

export const SectionWelcome = () => (
  <Container>
    <Box
      display="flex"
      fontSize="30px"
      fontWeight="600"
      justifyContent="center"
      mt={10}
      transform="skewY(-6deg)"
    >
      <WavingHand /> Hai
    </Box>
    <Text fontSize={["14px", "16px"]} mt={5} textAlign="center">
      Selamat datang di website pribadi saya, disini saya membagikan beberapa
      source code dan terkadang menulis beberapa tulisan.
    </Text>
  </Container>
);
