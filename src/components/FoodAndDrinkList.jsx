const FoodAndDrinkList = ({ fdl }) => {
  return fdl.map((fan, index) => (
    <span key={index}>
      <span className="label label-warning"> {fan}</span>
      &nbsp;
    </span>
  ));
};

export default FoodAndDrinkList;
