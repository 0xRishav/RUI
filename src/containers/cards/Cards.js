import { NormalVideoCard, ProductCard, TextVideoCard } from "../../components";

const Cards = () => {
  return (
    <div>
      <h1 className="component-title">Cards</h1>
      <h3>Product Card</h3>
      <ProductCard />
      <h3>Video Card</h3>
      <div className="component-row">
        <TextVideoCard />
        <NormalVideoCard />
      </div>
    </div>
  );
};

export default Cards;
