import jsonData from './categories-hero.list.json';
import CategoryItem from '../category-item/category-item.component';
import './categories-hero.styles.scss';

const CategoriesHero = () => {
    return (
    <div className="categories-hero-container">
    {jsonData.map((category) =>
      (
        <CategoryItem key={category.id} category={category} />
      )
    )}
  </div>
    );
}

export default CategoriesHero;