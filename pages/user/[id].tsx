import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { User } from "../api/user/[id]";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Content = (user?: User, error?: Error) => {
  if (error) return <div>failed to load</div>;
  if (!user) return <div>loading...</div>;
  return <div>hello, {user.name}!</div>;
};

export default function UserComponent() {
  const router = useRouter();
  const { id } = router.query;

  const { data: user, error } = useSWR<User, Error>(`/api/user/${id}`, fetcher);

  return (
    <div>
      <h1>User {id}</h1>

      {Content(user, error)}

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
