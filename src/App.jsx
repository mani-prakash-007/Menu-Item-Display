import { HardCodeCard } from "./component/HardCodeCard";
import { MenuCard } from "./card/MenuCard";
function App() {
  const allMenuDetails = [
    {
      name: "Classic Caesar Salad",
      price: "$ 12.49",
      description:
        "Crisp romaine lettuce tossed with our house-made Caesar dressing, topped with shaved Parmesan, croutons, and grilled chicken breast.",
      image: "bg-salad",
    },
    {
      name: "Margherita Pizza",
      price: "$ 15.99",
      description:
        "A traditional Italian pizza topped with fresh mozzarella, vine-ripened tomatoes, and aromatic basil leaves on a thin, crispy crust.",
      image: "bg-pizza",
    },
    {
      name: "Beef Tenderloin Steak",
      price: "$ 32.99",
      description:
        "A succulent 8 oz. beef tenderloin steak cooked to your liking, served with a side of roasted garlic mashed potatoes and seasonal vegetables.",
      image: "bg-beef",
    },
    {
      name: "Chocolate Lava Cake",
      price: "$ 8.99",
      description:
        "A decadent chocolate cake with a molten center, served warm with a scoop of vanilla ice cream and a drizzle of raspberry sauce.",
      image: "bg-cake",
    },
  ];
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-black text-center p-5 ">
          Menu Items
        </h1>
        <div className=" flex flex-wrap justify-evenly">
          <HardCodeCard />
          {allMenuDetails.map((data) => {
            const name = data[Object.keys(data)[0]];
            const price = data[Object.keys(data)[1]];
            const description = data[Object.keys(data)[2]];
            const image = data[Object.keys(data)[3]];
            return (
              <MenuCard
                dishName={name}
                dishPrice={price}
                dishDescription={description}
                dishImage={image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
