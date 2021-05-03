import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./GlobalStyles";
import {
  HomeContainer,
  HomeContent,
  HomeContentText,
  HomeTitle,
  HomeTitleText,
  HomeSubTitle,
  HomeText,
  HomeBtn,
} from "./Home.styles";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username, isAdmin } = props;
  return (
    <div>
      <HomeContainer>
        <HomeContent>
          <HomeContentText>
            <HomeTitle>
              <HomeSubTitle>
                {isAdmin
                  ? `Welcome Admin ${username}!`
                  : `Welcome ${username}!`}
              </HomeSubTitle>
              <HomeTitleText>Tickets for NYC Events</HomeTitleText>
              <HomeText>
                From concerts to Broadway shows, we have all of the tickets
                you'll need to see your favorite local band or to make your
                vacation memorable.
              </HomeText>
              <Button primary big bigFont bigRadius>
                <Link to="/products">Events </Link>
              </Button>
            </HomeTitle>
          </HomeContentText>
        </HomeContent>
      </HomeContainer>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    isAdmin: state.auth.isAdmin,
  };
};

export default connect(mapState)(Home);
