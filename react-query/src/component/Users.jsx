import { useQueries } from "@tanstack/react-query";

const Users = () => {
  const userIds = ["1", "2"];

  const userQueries = useQueries({
    queries: userIds.map((id) => {
      return {
        queryKey: ["user", id],
        queryFn: () => async () => {
          const data = await fetch(`https://dummyjson.com/users/${id}`).then(
            (res) => res.json()
          );
        },
      };
    }),
  });

  return <div>{JSON.stringify(userQueries)}</div>;
};

export default Users;

