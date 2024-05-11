import { useState } from "react";
import Form from "../Form/Form";
import InfoList from "../InfoList/InfoList";

const Home = () => {
  const [infos, setInfos] = useState<Record<string, string | number>[]>([]);

  return (
    <div className="m-4 p-4">
      <Form setInfos={setInfos} />
      <InfoList infos={infos} setInfos={setInfos} />
    </div>
  );
};

export default Home;
