import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("<BodySection />", () => {
  it("should render the children and one h2 element", () => {
    const bodySection = shallow(<BodySection title="test title" />);
    expect(bodySection.find("h2")).toHaveLength(1);

    const bodySectionWithChildren = shallow(
      <BodySection>
        <p>Hello world</p>
      </BodySection>
    );
    expect(bodySectionWithChildren.find("p").text()).toBe("Hello world");
  });
});
