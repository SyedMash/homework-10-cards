/* eslint-disable @next/next/no-img-element */
interface CardProps {
  title: string;
  description: string;
  price: number;
  imageSrc: string;
}

const Card = ({ title, description, price, imageSrc }: CardProps) => {
  return (
    <div className="w-[90%] md:w-[450px] border border-gray-300 p-4 rounded-lg bg-gray-200">
      <div className="flex justify-center">
        <img
          className="w-[450px] h-[300px] object-cover rounded-lg mb-5"
          src={imageSrc}
          alt="product"
        />
      </div>
      <h1 className="text-center text-3xl font-bold">{title}</h1>
      <p className="text-center text-xl font-semibold my-2">{description}</p>
      <p className="text-center text-2xl font-bold">${price}</p>
      <div className="flex justify-center w-full mt-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
