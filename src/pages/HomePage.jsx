import {useEffect, useMemo, useState} from "react";
import {fetchCategories} from "../fetchers/fetchCategories";
import {CategoriesGrid} from "../components/CategoriesGrid";
import {Container} from "../components/Container";
import {useSearchParams} from "react-router-dom";


function findNode(id, category) {
  if (category.id === id) {
    return category
  }
  if (category.childCategories) {
    for (let childCategory of category.childCategories) {
      const node = findNode(id, childCategory);
      if (node) {
        return node;
      }
    }
  }
}

export const HomePage = () => {
  const [category, setCategory] = useState()
  const [ searchParams ] = useSearchParams()
  const categoryId = searchParams.get('categoryId')

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategory({
        name: 'Главная',
        id: undefined,
        childCategories: categories,
      })
    })
  }, [])

  const currentCategory = useMemo(() => {
    if (!categoryId || !category) return category
    return findNode(+categoryId, category)
  }, [category, categoryId])

  console.log(currentCategory)


  return (
    <Container style={{ marginTop: '20px' }}>
      <CategoriesGrid categories={currentCategory?.childCategories} />
    </Container>
  )
}
