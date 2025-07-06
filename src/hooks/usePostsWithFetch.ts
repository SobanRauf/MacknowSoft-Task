import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchPostsWithFetch } from "../api/postAPI";

export default function usePostsWithFetch() {
  const [postsWithFetch, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPostsWithFetch();
        setPosts(data);
      } catch (err) {
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);
  return { postsWithFetch, loading, error };
}
