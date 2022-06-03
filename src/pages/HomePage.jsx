import {useEffect, useState} from "react";
import {fetchCategories} from "../fetchers/fetchCategories";
import {CategoriesGrid} from "../components/CategoriesGrid";
import {Container} from "../components/Container";

export const HomePage = () => {
  const [categories, setCategories] = useState()

  useEffect(() => {
    fetchCategories().then(setCategories)
  }, [])

  return (
    <Container>
      <CategoriesGrid categories={categories[3].childCategories} />
    </Container>
  )
}
