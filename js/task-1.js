// Znalezienie wszystkich elementów li z klasą item wewnątrz ul#categories
const categoriesList = document.querySelectorAll("#categories .item");

// Wypisanie liczby kategorii
console.log(`Number of categories: ${categoriesList.length}`);

// Iteracja przez każdą kategorię
categoriesList.forEach((category) => {
  // Znalezienie tekstu nagłówka <h2>
  const categoryTitle = category.querySelector("h2").textContent;

  // Znalezienie liczby elementów <li> w każdej kategorii
  const itemsCount = category.querySelectorAll("ul li").length;

  // Wypisanie wyników w konsoli
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
});
