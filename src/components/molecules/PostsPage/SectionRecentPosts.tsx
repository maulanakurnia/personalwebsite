import { Text, Box, BoxProps } from "@chakra-ui/react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

interface recentPostsProps extends BoxProps {
  recentPosts: any;
}

export const SectionRecentPosts: React.FC<recentPostsProps> = ({
  recentPosts,
  ...props
}) => (
  <Box
    borderTopWidth={["1px", "0"]}
    minW="100%"
    px={{ xs: 0, lg: "15px" }}
    py="10px"
    {...props}
  >
    <Text as="span" fontSize={["20px", "15px"]} fontWeight="700">
      Artikel Terbaru
    </Text>
    <Box mt="0.3em">
      {recentPosts.map((p, index) => (
        <Link href={p.slug} key={index}>
          <Text
            _hover={{ color: "blue.500", cursor: "pointer" }}
            as="span"
            display="block"
            fontSize="15px"
          >
            {p.title}
          </Text>
        </Link>
      ))}
    </Box>
    <Link href="/blog">
      <Text
        _hover={{ color: "blue.500", cursor: "pointer" }}
        as="span"
        display="flex"
        fontSize="15px"
        justifyContent={{ xs: "flex-end", md: "flex-start", lg: "flex-end" }}
        mt="1em"
        pt="0.2em"
      >
        Selengakapnya
        <Text as="span" mt="0.35em">
          <MdKeyboardArrowRight />
        </Text>
      </Text>
    </Link>
  </Box>
);
