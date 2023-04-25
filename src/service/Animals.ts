import { faker } from "@faker-js/faker";

export const getAnimals = async (params: Record<string, string>) => {
  // fake delay
  await new Promise((res) => setTimeout(res, 1000));

  const { query } = params;

  const type = faker.animal.type() as keyof typeof faker.animal;

  return [...new Array(100)]
    .map(() => ({
      type: faker.animal.type(),
      id: faker.datatype.uuid(),
      url: faker.internet.url(),
      title: faker.animal[type](),
      description: faker.lorem.sentences(),
      image: faker.image.animals(644, 362, true),
    }))
    .filter(
      (animal) =>
        query &&
        animal.type.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
};
