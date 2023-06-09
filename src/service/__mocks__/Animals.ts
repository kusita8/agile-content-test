import { faker } from "@faker-js/faker";

export const getAnimal = () => {
  const type = faker.animal.type() as keyof typeof faker.animal;

  return {
    type: faker.animal.type(),
    id: faker.datatype.uuid(),
    url: faker.internet.url(),
    title: faker.animal[type](),
    description: faker.lorem.sentences(),
    image: faker.image.animals(644, 362, true),
  };
};

const results = [...new Array(2)].map(() => {
  const type = faker.animal.type() as keyof typeof faker.animal;

  return {
    type,
    id: faker.datatype.uuid(),
    url: faker.internet.url(),
    title: faker.animal[type](),
    description: faker.lorem.sentences(),
    image: faker.image.animals(644, 362, true),
  };
});

export const getAnimals = async (params: Record<string, string>) => {
  const { query } = params;
  const lowercaseQuery = query.toLowerCase();

  return results.filter(
    (animal) =>
      lowercaseQuery &&
      (animal.type.toLowerCase().includes(lowercaseQuery) ||
        animal.title.toLowerCase().includes(lowercaseQuery))
  );
};
