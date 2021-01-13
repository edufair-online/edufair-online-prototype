import { getPageTitle, getAllPagesInSpace } from "notion-utils";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import Head from "next/head";
import { Box, useColorMode } from "@chakra-ui/react";

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  // const rootNotionPageId = "067dd719a912471ea9a3ac10710e7fdf";
  // const rootNotionSpaceId = "fde5ac74-eea3-4527-8f00-4482710e1af3";
  const rootNotionPageId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID;
  const rootNotionSpaceId = process.env.NEXT_PUBLIC_NOTION_SPACE_ID;
  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    notion.getPage.bind(notion)
  );

  const paths = Object.keys(pages).map((pageId) => `/blog/${pageId}`);
  console.log(paths);
  return {
    paths,
    fallback: true,
  };
}

const blogPost = ({ recordMap }) => {
  if (!recordMap) {
    return null;
  }
  const title = getPageTitle(recordMap);
  const { colorMode } = useColorMode();

  console.log(title, recordMap);
  return (
    <Box w="full">
      <Head>
        <title>{title}</title>
      </Head>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        darkMode={colorMode === "dark"}
      />
    </Box>
  );
};

export default blogPost;
