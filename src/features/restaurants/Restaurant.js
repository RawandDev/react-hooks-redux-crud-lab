import React from "react";
import { useDispatch } from "react-redux";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { restaurantRemoved } from "./restaurantsSlice";

function Restaurant({ restaurant }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(restaurantRemoved(restaurant.id));
  }
  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={handleDelete}>Delete Restaurant</button>
        <ReviewsContainer restaurantId={restaurant.id} />
      </li>
    </div>
  );
}

export default Restaurant;
