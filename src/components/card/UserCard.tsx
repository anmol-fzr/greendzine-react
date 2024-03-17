import { IUser } from "@/types";

type Props = IUser;

const UserCard = ({ firstName, age, id, email, phone }: Props) => {
  return (
    <div
      className={`p-4 rounded-xl bg-[#38383880] relative md:max-w-sm w-[300px] ${id % 2 === 0 ? "ml-auto mr-0" : "ml-0 mr-auto"} md:m-0 `}
    >
      <div className="border border-white/50 rounded-full aspect-square h-6 flex items-center justify-center text-center w-6 absolute top-4 right-4">
        {id}
      </div>
      <Bar lable="Emp ID" value={id} />
      <Bar lable="Name" value={firstName} />
      <Bar lable="Age" value={age} />
      <Bar lable="Email" value={email} />
      <Bar lable="Phone" value={phone} />
    </div>
  );
};

type BarProps = { lable: string; value: string | number };

const Bar = ({ lable, value }: BarProps) => (
  <div className="flex gap-2">
    <p className="text-white/50">{lable}: </p>
    <p> {value}</p>
  </div>
);

export { UserCard };
