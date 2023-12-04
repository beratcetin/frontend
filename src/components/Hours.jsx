const Hours = ({ saatler: hoursList }) => {
      return hoursList.map((hour, index) => (
          <p key={index}>{hour.days}: {hour.open}-{hour.close}</p>
      ));
    }
  
  export default Hours;
  