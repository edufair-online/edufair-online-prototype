import { useRouter } from "next/router";

const kampusDetail = () => {
  const router = useRouter();
  const { kampusId } = router.query;
  return <div>This is a kampus detail for {kampusId}</div>;
};

export default kampusDetail;
