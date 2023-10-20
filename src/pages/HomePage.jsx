import productsData from '../localData/productsData.json';
export const HomePage = () => {
  return (
    <div className="home-page">
      {/* `${productsData.map(data => <ul><li>${data.name}</li></ul>)}` */}
      <ul>
        {productsData.map((data) => (
          <li key={data.productId}>
            <div>
              <h3>{data.name}</h3>
              <p>{data.description.slice(0, 10).padEnd(13, '.')}</p>
              <span>{data.price} €</span>
              <p>{data.category}</p>
              <p>{data.manufacturer}</p>
              <p>{data.material}</p>
              <p>{data.color}</p>
              <img src={data.imageUrl} alt={`${data.name} image`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
