import { useState } from "react";
 
const FishTableRow = ({ name, image, description }) => {
  const [showDescription, setShowDescription] = useState(true);
 
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
 
  return (
    <tr>
      <td
        className="fish-name"
        onClick={toggleDescription}
        style={{ cursor: 'pointer' }}
      >
        {name}
      </td>
      <td>
        <img src={image} alt={name} />
      </td>
      <td className="fish-description">
        {showDescription && description}
      </td>
    </tr>
  )
}
 
export default FishTableRow