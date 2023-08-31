export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>You Should Add Some Things in Your Packing List 🚀</em>
      </p>
    );

  const numItem = items.length;
  const itemLeft = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemLeft / numItem) * 100);
  return (
    <>
      {percentage === 100 ? (
        <p className="stats">
          <em>You are all packed ✈ </em>
        </p>
      ) : (
        <footer className="stats">
          <em>
            💼 You have {numItem} items on your list, and you already packed{" "}
            {itemLeft} ({percentage}%){" "}
          </em>
        </footer>
      )}
    </>
  );
}
