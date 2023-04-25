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
