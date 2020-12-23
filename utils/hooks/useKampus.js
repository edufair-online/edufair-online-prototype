import { getAllKampus } from "@/utils/helpers/kampusHelpers";
import { useState, useEffect } from "react";

const useKampus = () => {
  const [kampus, setKampus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getter = async () => {
    const kampus = await getAllKampus()
      .then((data) => {
        setKampus(data);
        return data;
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
    setLoading(false);
    return { kampus };
  };

  useEffect(() => {
    getter();
    console.log(kampus);
  }, []);

  return { kampus, loading, error, refetch: getter };
};
export { useKampus };
