import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | اپلیکیشن آب و هوا`;
  }, []);
};

export default useTitle;
