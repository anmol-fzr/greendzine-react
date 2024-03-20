import { useEffect, useState } from "react";
import { IUser } from "@/types";
import { UserCard } from "@/components";

const baseClassName =
  "h-[60px] bg-black border border-white text-white placeholder-gray-400 w-full rounded-2xl placeholder-grey-fade pl-5 outline-none focus:outline-none w-full max-w-md !mx-auto";
const List = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState("");
  const filtered = users.filter(({ firstName }) =>
    firstName.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const getData = () => {
      fetch(
        "https://dummyjson.com/users?limit=25&select=firstName,age,email,phone",
      )
        .then((res) => res.json())
        .then((res) => {
          setUsers(res.users);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <div className="pt-12 flex flex-col items-center ">
      <div className="space-y-6 my-6">
        <img className="h-[90px] w-[90px]" src="/main-logo.png" />
      </div>
      <input
        className={baseClassName}
        placeholder="Search by Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-col gap-4 p-4 md:flex-row md:flex-wrap">
        {filtered.map(({ firstName, age, id, phone, email }) => (
          <UserCard key={id} {...{ firstName, age, phone, email, id }} />
        ))}
      </div>
    </div>
  );
};

export { List };
