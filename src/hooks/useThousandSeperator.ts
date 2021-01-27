import { useState, useEffect } from "react";

const useThousandSeperator = (value: string) => {
  const [seperatedStr, setSeperatedStr] = useState(value);

  useEffect(() => {
    setSeperatedStr(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  }, [value]);

  return seperatedStr;
};

export default useThousandSeperator;
