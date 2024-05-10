import deleteIcon from "../../assets/delete.svg";
import viewIcon from "../../assets/view.svg";

type infoProps = {
  data: Record<string, string | number>;
  handleDelete: (elm: number) => void;
};

const Info = ({ data, handleDelete }: infoProps) => {
  return (
    <div className="flex items-center mt-8">
      <div className="self-baseline mt-[0.2rem] border-2 border-secondary rounded-[0.63rem] h-[2.4rem]"></div>
      <div className="mx-2 flex-grow">
        <p className="font-medium text-lg">{data.title}</p>
        <p className="font-semibold text-sm">{data.description}</p>
        <p className="text-xs text-dark-gray">{data.date}</p>
      </div>
      <div className="flex m-2 gap-4">
        <img src={viewIcon} alt="view" />
        <img
          src={deleteIcon}
          alt="delete"
          onClick={() => handleDelete(data.id as number)}
        />
      </div>
    </div>
  );
};

export default Info;
