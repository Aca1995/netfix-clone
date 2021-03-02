import { useState, useEffect, useContext } from "react";
import { SelectProfileContainer } from "./profiles";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";

export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("series");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              {/* <Header.Dropdown> */}
              <Header.Group>
                <Header.Picture src={user.photoURL} />
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink onClick={() => firebase.auth().signOut()}>
                  Sign out
                </Header.TextLink>
              </Header.Group>
              {/* </Header.Dropdown> */}
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
