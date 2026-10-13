import FishTableRow from "./FishTableRow";
 
const FishTable = ({ fishData }) => (
  <table>
    <tbody>
      {fishData.map((fish) => (
        <FishTableRow
          key={fish.name}
          name={fish.name}
          image={fish.image}
          description={fish.description}
        />
      ))}
    </tbody>
  </table>
);
 
export default FishTable