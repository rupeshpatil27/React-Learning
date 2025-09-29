import { useQueries } from "@tanstack/react-query";
import { fetchPostsByUserId, fetchUserById } from "../api/user";
import { useState } from "react";

const availableUserIds = [1, 2, 3, 4, 5];

const UserPostsPageDynamic = () => {
  const [selectedUserIds, setSelectedUserIds] = useState([1]);

  const toggleUserSelection = (id) => {
    setSelectedUserIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const queries = useQueries({
    queries: selectedUserIds.flatMap((id) => [
      {
        queryKey: ["user", id],
        queryFn: () => fetchUserById(id),
        enabled: !!id,
      },
      {
        queryKey: ["posts", id],
        queryFn: () => fetchPostsByUserId(id),
        enabled: !!id,
      },
    ]),
  });

  const results = {};

  selectedUserIds.forEach((id, index) => {
    results[id] = {
      user: queries[index * 2].data,
      userLoading: queries[index * 2].isLoading,
      userError: queries[index * 2].error,
      posts: queries[index * 2 + 1].data?.posts,
      postsLoading: queries[index * 2 + 1].isLoading,
      postsError: queries[index * 2 + 1].error,
    };
  });

  return (
    <div className="container">
      <h1 className="title">Dynamic Parallel: Users & Posts</h1>

      <div className="selector">
        <label>Select Users:</label>
        <div className="user-checkboxes">
          {availableUserIds.map((id) => (
            <label key={id}>
              <input
                type="checkbox"
                checked={selectedUserIds.includes(id)}
                onChange={() => toggleUserSelection(id)}
              />
              User #{id}
            </label>
          ))}
        </div>
      </div>

      {selectedUserIds.length === 0 ? (
        <p>Please select at least one user.</p>
      ) : (
        selectedUserIds.map((id) => {
          const data = results[id];
          return (
            <div key={id} className="card-container">
              <div className="card">
                <h2>User #{id} Info</h2>
                {data.userLoading ? (
                  <p className="loading">Loading user...</p>
                ) : data.userError ? (
                  <p className="error">Error loading user.</p>
                ) : (
                  <>
                    <p>
                      <strong>Name:</strong> {data.user.firstName}{" "}
                      {data.user.lastName}
                    </p>
                    <p>
                      <strong>Email:</strong> {data.user.email}
                    </p>
                    <p>
                      <strong>Company:</strong> {data.user.company?.name}
                    </p>
                  </>
                )}
              </div>

              <div className="card">
                <h2>User #{id} Posts</h2>
                {data.postsLoading ? (
                  <p className="loading">Loading posts...</p>
                ) : data.postsError ? (
                  <p className="error">Error loading posts.</p>
                ) : (
                  <ul className="posts-list">
                    {data.posts.map((post) => (
                      <li key={post.id} className="post-item">
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default UserPostsPageDynamic;
