const Shimmer = () => {
  return (
    <div className="flex  flex-wrap gap-9 justify-center mt-4">
      {Array.from({ length: 20 }).map((num, index) => (
        <div key={index}>
          <div className="w-56 h-80 shadow p-3 bg-gray-200 rounded "></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
