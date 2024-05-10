import { useEffect, useState } from "react";
import Info from "../Info/Info";
import useFetch from "./hooks/useFetch";

const InfoList = () => {
  const [infos, setInfos] = useState<Record<string, string | number>[]>([]);
  useEffect(() => {
    console.log("before");
    const data: Record<string, string | number>[] = useFetch(
      "http://localhost:5004/Task",
      "GET"
    );
    console.log("after");
    setInfos(data);
  }, []);

  const handleDelete = (id: number) => {};

  return (
    <div>
      {infos.map((info) => {
        return <Info key={info.id} data={info} handleDelete={handleDelete} />;
      })}
    </div>
  );
};

export default InfoList;
