import { useParams, useSearchParams } from "react-router";

export default function ParamsPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  console.log("Search Params:", searchParams.toString());

  return (
    <section>
      <h1>ParamsPage</h1>
      <p>Page number is {id}</p>
      <p>search params are: {searchParams.get("course")}</p>
    </section>
  );
}
