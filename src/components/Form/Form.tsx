import { useState } from "react";
import { regularFetch } from "../../api/constant";

const Form = ({ setInfos }: any) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const handleSubmit = () => {
    const date = new Date();
    const newInfo = {
      // id: 2,
      title: title,
      description: description,
      details: details,
      date: date.toLocaleDateString(),
    };
    regularFetch("Task", "POST", newInfo).then((res) => {
      console.log(res);
      setInfos((prev: any) => [...prev, res]);
    });
  };

  return (
    <div className="flex flex-wrap mb-10">
      <input
        className="w-full h-9 border-2 rounded-lg border-light-gray p-3 mb-3 placeholder:text-dark-gray"
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="w-full h-9 border-2 rounded-lg border-light-gray p-3 mb-3 placeholder:text-dark-gray"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <textarea
        className="w-full border-2 rounded-lg border-light-gray p-3 mb-3 placeholder:text-dark-gray resize-none"
        placeholder="details"
        rows={5}
        onChange={(e) => setDetails(e.target.value)}
        required
      />
      <button
        className="border-2 border-violet-500 w-[7rem] p-2 font-bold rounded-lg text-violet-500 mr-5"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <select className="border-2 border-violet-500 w-[7rem] p-2 font-bold rounded-lg text-violet-500">
        <option>Newest</option>
        <option>Oldest</option>
        <option>A - Z</option>
      </select>
    </div>
  );
};

export default Form;
