import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  // create our own data structure with title of the genre
  const slides = selectionFilter({ series, films });
  console.log(slides);

  return <BrowseContainer slides={slides} />;
}
