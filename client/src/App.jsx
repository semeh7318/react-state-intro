import FishTable from "./FishTable";
 
const App = () => {
  const fishData = [
    {
      name: 'Goldfish',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzKGEhuU7uhhGwwSOmFgxuYl8lwAcKkvVAD0q9zarz9aAeDZYpVDuKuuEAzebb9etJJI32S75q8U5tU0cvlZETLnp0m_8tyt08atl4A&s=10',
      description: 'Everyone\'s first pet'
    },
    {
      name: 'Pufferfish',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuu8WEDwhyR7LaYttZzwhFZzh4RqxDKZYg54QayqmXcaTAzFnukl8CQ4l6lcKvjYpUinRRa2yJkSJt_fsZ_70JOMcst4LEz06Lj-0sA&s=10',
      description: 'So puffy!'
    },
    {
      name: 'Tuna',
      image: 'http://tinyurl.com/zgs7z2s',
      description: 'Why are these things so huge? THey\'re terrifying.'
    }
  ];
 
  return (
    <FishTable fishData={fishData} />
  )
}
 
export default App