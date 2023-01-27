import dummyEdemamData, {
  EdemamResponse,
} from '../../__tests__/utils/dummyData';

const getID = (uri: string): string => {
  return uri.split('recipe_')[1];
};

export default getID;
