import { useNavigate } from "react-router";

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Form submitted!");
    console.log("Form data:", event);

    navigate("/");
  };

  return (
    <section>
      <h1>DASHBOARD PAGE</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-black text-white"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-black text-white"
          />
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
}
