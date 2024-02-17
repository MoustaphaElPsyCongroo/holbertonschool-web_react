import { getFullYear, getFooterCopy } from "../utils/utils";
import { UserContext, user } from "../App/AppContext";

function Footer() {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <>
          <p>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
          {user.isLoggedIn && (
            <p>
              <a href="#">Contact us</a>
            </p>
          )}
        </>
      )}
    </UserContext.Consumer>
  );
}

export default Footer;
