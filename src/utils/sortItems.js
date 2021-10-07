const sortByNumberComparator = (first, second, order) =>
  order === 'ASC' ? first - second : second - first;

const sortByStringComparator = (first, second, order) =>
  order === 'ASC' ? first.localeCompare(second) : second.localeCompare(first);

export const sortItems = (items, by) => {
  return items.sort((a, b) => sortByStringComparator(a.name, b.name, by));
};
