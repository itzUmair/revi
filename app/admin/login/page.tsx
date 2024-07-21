import LoginForm from "@/components/LoginForm";

function page() {
  return (
    <main>
      {process.env.DB_HOST}

      {process.env.DB_USER}
      {process.env.DB_PASSWORD}
      {process.env.DB_NAME}
      {process.env.DB_CONNECTION_URL}
      <LoginForm />
    </main>
  );
}

export default page;
