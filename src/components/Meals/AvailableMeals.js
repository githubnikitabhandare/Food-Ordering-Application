import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Fried Momos",
    description: "These crispy Momos attain their lovely texture!",
    price: 50,
  },
  {
    id: "m2",
    name: "Tandoori Momos",
    description: " Momos is very famous and is loved by almost everyone!",
    price: 60,
  },
  {
    id: "m3",
    name: "Steamed Momos",
    description: "These thickly wrapped Momos are stuffed to the core with Paneer, Vegetables and Soya Chunks.",
    price: 55,
  },
  {
    id: "m4",
    name: "Chocolate Momos",
    description: "This is for the sweet tooth fanatics out there.",
    price: 65,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
