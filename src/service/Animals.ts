import { faker } from "@faker-js/faker";

const results = [...new Array(100)].map(() => {
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
  // fake delay
  await new Promise((res) => setTimeout(res, 1000));

  const { query } = params;
  const lowercaseQuery = query.toLowerCase();

  return results.filter(
    (animal) =>
      lowercaseQuery &&
      (animal.type.toLowerCase().includes(lowercaseQuery) ||
        animal.title.toLowerCase().includes(lowercaseQuery))
  );
};
