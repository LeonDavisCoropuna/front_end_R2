export const TitlePage: React.FC<{
  title: string;
}> = ({ title }) => {
  return <h2 className="w-full p-1 pl-2 text-md bg-slate-300">{title}</h2>;
};

export default TitlePage;
