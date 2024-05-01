function Benefit({ title, description, icon }) {
  return (
    <div className="flex flex-col gap-2 md:w-[45%] items-center my-5">
      <div className="p-3 bg-yellow_200 rounded-full">
        <img src={icon} alt={title} className="h-6 w-6" />
      </div>
      <h1 className="font-semibold text-2xl md:3xl text-center">{title}</h1>
      <p className="text-gray_500 text-lg text-xl text-center">{description}</p>
    </div>
  );
}

export default Benefit;
