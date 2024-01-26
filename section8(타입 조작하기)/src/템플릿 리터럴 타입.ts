type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

// type ColoredAnimal = `red-dog` | 'red-cat' | 'red-chicken' | 'black-dog' ... 너무많아~;
type ColoredAnimal = `${Color}-${Animal}`;
