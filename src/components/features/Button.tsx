import { Link } from "react-router-dom";

type Props = {
  link: string;
  index?: number;
  children: string;
};

export default function Button({ index, link, children }: Props) {
  return (
    <button
      key={index}
      className="bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-800 focus:scale-95"
    >
      <Link to={link}>{children}</Link>
    </button>
  );
}
