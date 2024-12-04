import useFetch from "./useFetchCustom";

const DashBoard = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="text-center">
      <h1 className="text-center text-2xl py-5 font-semibold fixed z-30 bg-slate-200 block w-full  ">
        Building Custom Hook - "useFetch"
      </h1>

      <div className="pt-20 ">
        {data &&
          data.length &&
          data?.map((item, index) => (
            <p key={index}>
              {item?.id} {item?.title}
            </p>
          ))}
      </div>
    </div>
  );
};

export default DashBoard;
