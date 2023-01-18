import { CATEGORIES_ACTION_TYPES } from "./category-types";
import { getCategoriesAndDocuments } from "../../utils/firebase";

export const fetchCategoriesStart = () => ({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START });

export const fetchCategoriesSucess = (categoriesArray) => ({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categoriesArray });

export const fetchCategoriesFail = (error) => ({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, payload: error });

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    dispatch(fetchCategoriesSucess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFail(error));
  }
}