import Card from "./components/Card";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center  gap-2  pt-2">
      <Card
        title="Product 1"
        description="Description 1"
        price={10}
        imageSrc="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card
        title="Product 2"
        description="Description 2"
        price={20}
        imageSrc="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <Card
        title="Product 3"
        description="Description 3"
        price={30}
        imageSrc="https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </main>
  );
}
