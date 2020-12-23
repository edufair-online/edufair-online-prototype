import { getKampus } from "@/utils/helpers/kampusHelpers";
import { getAllEvent } from "@/utils/helpers/eventHelpers";
import { useState, useEffect } from "react";

const useEvent = (kampusId) => {
  const [kampus, setKampus] = useState();
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getter = async () => {
    // get kampus details
    const kampus = await getKampus(kampusId)
      .then((data) => {
        setKampus(data);
        return data;
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });

    // get events from this kampus
    const events = await getAllEvent(kampusId)
      .then((data) => {
        setEvents(data);
        return data;
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
    setLoading(false);
    return { kampus, events };
  };

  useEffect(() => {
    kampusId && getter();
  }, [kampusId]);

  return { kampus, events, loading, error, refetch: getter };
};
export { useEvent };
