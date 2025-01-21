const topDesserts = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind Blowing Taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50"
  },
  {
    id: "3",
    title: "Chocolate Mousse",
    description: "Unexplored Flavor",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00",
  },
];

function App() {
  const listItems = topDesserts.map(dessert => {
    console.log("DESSERT ",dessert)
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })
   return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
  );
}

// const topDesserts = data.map(dessert => {
//   return {
//     content: `${dessert.title} - ${dessert.description} - ${dessert.image}`,
//     price: dessert.price,
//   }
// })

export default App;