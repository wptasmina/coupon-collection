import { useLoaderData } from "react-router-dom";
import Card from "../components/Card/Card";


export default function AboutPage() {
  const card = useLoaderData();
  return (
    <div className="w-11/12 mx-auto my-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
      {card.map((service, i) => (
        <Card key={i} service={service}></Card>
      ))}
    </div>
  );
}
