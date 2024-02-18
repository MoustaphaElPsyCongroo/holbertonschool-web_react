import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const selectCourseThunkCaller = (index) => {
  return (dispatch) => {
    dispatch(selectCourse(index));
  };
};

export const unselectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

export const unselectCourseThunkCaller = (index) => {
  return (dispatch) => {
    dispatch(unselectCourse(index));
  };
};
