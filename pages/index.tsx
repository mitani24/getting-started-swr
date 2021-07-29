import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {[1, 2, 3].map((id) => {
        const path = `/user/${id}`;
        return (
          <p key={id}>
            <Link href={path}>
              <a>{path}</a>
            </Link>
          </p>
        );
      })}
    </div>
  );
}
