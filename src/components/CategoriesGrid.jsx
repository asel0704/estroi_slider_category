export function CategoriesGrid({ categories }) {
  return (categories?.map((category) => category.name))
}
