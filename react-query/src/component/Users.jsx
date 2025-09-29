import {useQuery } from "@tanstack/react-query";

const Users = () => {
  const postQuery = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const data = await fetch(`https://dummyjson.com/post/1`).then(
        (res) => res.json()
      );
    },
  });
  const commentQuery = useQuery({
    queryKey: ["comment"],
    queryFn: async () => {
      const data = await fetch(`https://dummyjson.com/post/1/comments`).then(
        (res) => res.json()
      );
    },
  });

  return (
    <div>
      {JSON.stringify(postQuery)}
      {JSON.stringify(commentQuery)}
    </div>
  );
};

export default Users;
