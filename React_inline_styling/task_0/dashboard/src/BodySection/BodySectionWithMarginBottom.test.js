import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("<BodySectionWithMarginBottom />", () => {
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
