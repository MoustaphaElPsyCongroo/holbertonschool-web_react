import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("<BodySectionWithMarginBottom />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("should render correctly a BodySection component with correct props", () => {
    const bodySectionWithMarginBottom = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>Hello world</p>
      </BodySectionWithMarginBottom>
    );

    expect(bodySectionWithMarginBottom.find(BodySection)).toHaveLength(1);
    expect(bodySectionWithMarginBottom.find(BodySection).prop("title")).toBe(
      "test title"
    );
    expect(
      bodySectionWithMarginBottom.find(BodySection).prop("children")
    ).toStrictEqual(<p>Hello world</p>);
  });
});
