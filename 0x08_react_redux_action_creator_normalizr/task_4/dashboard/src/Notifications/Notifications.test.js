import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  describe("When displayDrawer prop true", () => {
    let notifications;

    beforeEach(() => {
      notifications = shallow(<Notifications displayDrawer={true} />);
    });

    afterEach(() => {
      notifications = null;
    });

    // it('renders three NotificationItem element', () => {
    //   expect(notifications.find(NotificationItem)).toHaveLength(3);
    // });

    it("renders the correct text", () => {
      expect(notifications.find("p").text()).toBe(
        "No new notification for now"
      );
    });

    // it('its first NotificationItem element renders the right html', () => {
    //   const notifications = shallow(<Notifications displayDrawer={true} />);
    //   expect(notifications.find(NotificationItem).first().html()).toMatch(/New course available/);
    // });

    it("renders a menuItem", () => {
      expect(notifications.find('[className^="menuItem"]')).toHaveLength(1);
    });

    it("renders a div.Notifications", () => {
      expect(notifications.find('[className^="notifications"]')).toHaveLength(
        1
      );
    });
  });

  describe("When displayDrawer prop false (default)", () => {
    let notifications;

    beforeEach(() => {
      notifications = shallow(<Notifications />);
    });

    afterEach(() => {
      notifications = null;
    });

    it("renders a menuItem", () => {
      expect(notifications.find('[className^="menuItem"]')).toHaveLength(1);
    });

    it("doesn't render a div.Notifications", () => {
      expect(notifications.find(".Notifications")).toHaveLength(0);
    });
  });

  describe("When listNotifications prop null or empty", () => {
    let notificationsNull;
    let notificationsEmpty;

    beforeEach(() => {
      notificationsNull = shallow(<Notifications displayDrawer={true} />);
      notificationsEmpty = shallow(
        <Notifications displayDrawer={true} listNotifications={[]} />
      );
    });
    it("renders correctly", () => {
      expect(notificationsNull.find("p").text()).toBe(
        "No new notification for now"
      );
      expect(notificationsEmpty.find("p").text()).toBe(
        "No new notification for now"
      );
    });
  });

  describe("handleDisplayDrawer and handleHideDrawer props", () => {
    let notifications;
    const handleDisplayDrawerMock = jest.fn();
    const handleHideDrawerMock = jest.fn();

    beforeEach(() => {
      notifications = shallow(
        <Notifications
          handleDisplayDrawer={handleDisplayDrawerMock}
          handleHideDrawer={handleHideDrawerMock}
          displayDrawer={true}
        />
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
      jest.restoreAllMocks();
    });

    it("clicking on the menuItem calls handleDisplayDrawer", () => {
      const menuItem = notifications.find('[className^="menuItem"]');
      menuItem.simulate("click");
      expect(handleDisplayDrawerMock).toHaveBeenCalled();
    });

    it("clicking on the Close button calls handleHideDrawer", () => {
      const closeButton = notifications.find('[aria-label="Close"]');
      closeButton.simulate("click");
      expect(handleHideDrawerMock).toHaveBeenCalled();
    });
  });
});
