import categories from '../localData/categoryTable.json';
import colors from '../localData/colorsTable.json';
import manufacturers from '../localData/manufacturersTable.json';
import materials from '../localData/materialsTable.json';

const testProduct = {
  productId: 1,
  name: 'cubilia curae',
  description:
    'lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer',
  price: 280.15,
  category: 7,
  manufacturer: 1,
  material: 1,
  color: 6,
  size: {
    high: 43,
    width: 120,
    depth: 29,
  },
  quantity: 105,
  imageUrl: 'http://dummyimage.com/124x100.png/dddddd/000000',
  promotion: false,
};

export const cleanSingleProduct = (productValue) => {
  const { category, color, manufacturer, material } = productValue;
  const cleanProductData = {
    ...structuredClone(productValue),
    category: categories[category],
    color: colors[color],
    manufacturer: manufacturers[manufacturer],
    material: materials[material],
  };

  return cleanProductData;
};

export const cleanAllProducts = (allProductsValue) => {
  const cleanProducts = allProductsValue.map((product) =>
    cleanSingleProduct(product)
  );
  return cleanProducts;
};
