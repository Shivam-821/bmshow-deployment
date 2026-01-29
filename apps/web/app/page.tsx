import prisma from "@repo/db/client";

export default async function HomePage() {
  const user = await prisma.user.findFirst();

  return (
    <div>
      <p>{user?.email}</p>
      <p>{user?.password}</p>
    </div>
  );
}
