import { Recipe } from 'src/types';

const baseUrl = 'http://localhost:3000';

const getAllRecipes = async (): Promise<Recipe[]> => {
  const data = (await fetch(`${baseUrl}/recipes`));
  if (!data.ok) {
    throw Error('Could Not Fetch Data');
  }

  // eslint-disable-next-line no-return-await
  return await data.json();
};

export default {
  getAllRecipes,
};
