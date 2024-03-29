import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="bg-red-500/70 h-full w-full flex items-center justify-center rounded-xl">
      <ClipLoader size={150} />
    </div>
  );
};

export default Loading;
