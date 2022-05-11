const App = () => {
  const items = ["Item A", "Item B", "Item C", "Item D"];
  const [showMore, setShowMore] = useState();
  return (
    <div class="justify-center text-center h-screen items-center flex    ">
      
      <div>
        <button onClick={() => setShowMore((s) => !s)}>toggle show more</button>
        {showMore
          ? items.map((it) => <p key={it}>{it}</p>)
          : items.slice(0, 1).map((it) => <p key={it}>{it}</p>)}
      </div>

    </div>
  )
}