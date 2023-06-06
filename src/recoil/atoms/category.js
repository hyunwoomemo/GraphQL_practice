import { atom } from "recoil";

export const majorCategoryState = atom({
  key: 'majorCategoryState',
  default: 'all',
});

export const middleCategoryState = atom({
  key: 'middleCategoryState',
  default: 'all',
});