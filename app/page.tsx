import BlogSummary from "./components/BlogSummary";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import MoreSearches from "./components/MoreSearches";
import CategoriesSlider from "./components/categoriesSlider/CategoriesSlider";
import PropertiesList from "./components/propertiesList/PropertiesList";

export default function Home() {
  return (
    <div className="">
      <Container>
        <HomeBanner />
        <CategoriesSlider />
        <PropertiesList />
        <MoreSearches />
        <BlogSummary />
      </Container>
    </div>
  );
}
