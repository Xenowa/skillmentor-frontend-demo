import { Button } from "../ui/button";

const Card = () => {
  return (
    <div className="flex flex-col gap-2 bg-black text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        dolorem explicabo asperiores? Iste facilis et aliquid possimus totam
        voluptatibus sit. Voluptatibus officia rem id, fugiat non porro ratione
        earum alias?
      </p>
      <Button variant="secondary">Click Me</Button>
    </div>
  );
};

export default Card;
