import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductRating = ({ rating }) => {
  return (
    <Rating
      style={{ maxWidth: 100 }}
      value={rating}
      readOnly={true}
      itemStyles={{
        itemShapes: Star,
        activeFillColor: "#ffb700",
        inactiveFillColor: "#A0A0A0",
      }}
    />
  );
};

export default ProductRating;
