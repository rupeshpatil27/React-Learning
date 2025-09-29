import { useQueries } from "@tanstack/react-query";
import { fetchPostsByUserId, fetchUserById } from "../api/user";
import { useState } from "react";

const UserPostsPageManual = () => {
  const [userId, setUserId] = useState(1);

  const results = useQueries({
    queries: [
      {
        queryKey: ["user", userId],
        queryFn: () => fetchUserById(userId),
        enabled: !!userId,
      },
      {
        queryKey: ["posts", userId],
        queryFn: () => fetchPostsByUserId(userId),
        enabled: !!userId,
      },
    ],
  });

  const [userQuery, postsQuery] = results;

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = userQuery;

  const {
    data: posts,
    isLoading: postsLoading,
    error: postsError,
  } = postsQuery;

  return (
    <div className="container">
      <h1 className="title">User & Posts Viewer</h1>

      <div className="selector">
        <label htmlFor="user-select">Select User:</label>
        <select
          id="user-select"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((id) => (
            <option key={id} value={id}>
              User #{id}
            </option>
          ))}
        </select>
      </div>

      <div className="card-container">
        {/* User Info */}
        <div className="card">
          <h2>User Info</h2>
          {userLoading ? (
            <p className="loading">Loading user...</p>
          ) : userError ? (
            <p className="error">Error loading user.</p>
          ) : user ? (
            <>
              <p>
                <strong>Name:</strong> {user.firstName} {user.lastName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Company:</strong> {user.company?.name}
              </p>
            </>
          ) : null}
        </div>

        {/* Posts */}
        <div className="card">
          <h2>User Posts</h2>
          {postsLoading ? (
            <p className="loading">Loading posts...</p>
          ) : postsError ? (
            <p className="error">Error loading posts.</p>
          ) : posts?.posts && posts?.posts.length > 0 ? (
            <ul className="posts-list">
              {posts?.posts.map((post) => (
                <li key={post.id} className="post-item">
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPostsPageManual;