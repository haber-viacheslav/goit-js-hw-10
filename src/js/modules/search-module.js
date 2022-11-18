import { refs } from './refs';

export default function onSearch(e) {
  const searchQuery = e.currentTarget.value;
  console.log(searchQuery);
}
