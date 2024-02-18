import { selectCourse, unselectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("courseActionCreators", () => {
  describe("selectCourse action", () => {
    it("should return a correct object", () => {
      expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
    });
  });

  describe("unselectCourse action", () => {
    it("should return a correct object", () => {
      expect(unselectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
  });
});
