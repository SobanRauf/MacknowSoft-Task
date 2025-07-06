import axios from "axios";

export const fetchPosts = async () => {
  const [postsRes, usersRes] = await Promise.all([
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10"),
    axios.get("https://jsonplaceholder.typicode.com/users"),
  ]);

  return postsRes.data.map((post: any, index: number) => ({
    id: post.id,
    title: post.title,
    description: post.body,
    image: `https://picsum.photos/500/300?random=${index + 1}`,
    user: `https://i.pravatar.cc/150?img=${index + 1}`,
    userName: usersRes.data[index]?.name || "User",
    likes: Math.floor(Math.random() * 5000),
    comments: Math.floor(Math.random() * 1000),
    shares: Math.floor(Math.random() * 2000),
  }));
};


export const fetchPostsWithFetch = async () => {
    const [postsRes, usersRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=10"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);
  
    if (!postsRes.ok || !usersRes.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const posts = await postsRes.json();
    const users = await usersRes.json();
  
    return posts.map((post: any, index: number) => ({
      id: post.id,
      title: post.title,
      description: post.body,
      image: `https://picsum.photos/500/300?random=${index + 1}`,
      user: `https://i.pravatar.cc/150?img=${index + 1}`,
      userName: users[index]?.name || "User",
      likes: Math.floor(Math.random() * 5000),
      comments: Math.floor(Math.random() * 1000),
      shares: Math.floor(Math.random() * 2000),
    }));
  };
  