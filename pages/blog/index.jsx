import { NotionRenderer } from "react-notion-x";
import { getPageTitle } from "notion-utils";
import { NotionAPI } from "notion-client";

import Head from "next/head";

import { Box, useColorMode } from "@chakra-ui/react";
const notion = new NotionAPI();

export const getStaticProps = async () => {
  const pageId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID;
  const recordMap = await notion.getPage(pageId);
  return {
    props: {
      recordMap,
    },
  };
};

const blogPost = ({ recordMap }) => {
  const title = getPageTitle(recordMap);
  console.log(recordMap);
  const { colorMode } = useColorMode();
  return (
    <Box w="full">
      <Head>
        <title>{title}</title>
      </Head>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={colorMode === "dark"}
      />
    </Box>
  );
};
export default blogPost;
