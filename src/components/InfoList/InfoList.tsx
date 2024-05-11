import { useEffect, useState } from "react";
import Info from "../Info/Info";
import { regularFetch } from "../../api/constant";

const InfoList = ({ infos, setInfos }: any) => {
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    regularFetch("Task", "GET", null).then((res: any) => {
      setInfos(res);
    });
  }, [isDelete]);

  const handleDelete = (id: number) => {
    regularFetch(`Task/${id}`, "DELETE", null).then((res) => {
      console.log(res);
      setIsDelete((prev) => !prev);
    });
  };

  return (
    <div>
      {infos.map((info: any) => {
        return <Info key={info.id} data={info} handleDelete={handleDelete} />;
      })}
    </div>
  );
};

export default InfoList;
