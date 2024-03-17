const stats = [
  {
    label: "Productivity on Monday",
    value: 4,
  },
  {
    label: "Productivity on Tuesday",
    value: 92,
  },
  {
    label: "Productivity on Wednesday",
    value: 122,
  },
  {
    label: "Productivity on Thrusday",
    value: 93,
  },
  {
    label: "Productivity on Friday",
    value: 89,
  },
  {
    label: "Productivity on Saturday",
    value: 98,
  },
];

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="space-y-6 max-w-screen-md m-auto">
        <p className="bg-[#1A2C2C99] h-[45px]  items-center px-4 flex justify-center text-xl text-center rounded-3xl">
          Employee Productivity Dashboard
        </p>
        <div className="bg-[#1A2C2C99] rounded-2xl">
          {stats.map(({ label, value }) => (
            <div className="p-4 space-y-2">
              <div className="flex justify-between">
                <p>{label}</p>
                <p className="text-green-light">{value}%</p>
              </div>
              <div className="h-[10px] bg-green-fade/25 rounded-3xl">
                <div
                  style={{ width: value * 2 + 20 }}
                  className="h-[10px] bg-green-dark border border-green-light rounded-3xl "
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Home };
