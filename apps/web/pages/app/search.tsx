import React from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import { useRouter } from "next/router";

import WebAppLayout from "../../components/Layout/WepAppLayout";
import { ROUTES } from "../../utils/utils";
import Logo from "../../../web/public/images/logo.svg";
import SearchIcon from "../../../web/public/images/icon-search.svg";
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import MainAppSearch from "../../components/search/MainAppSearch";

const Search = () => {
  const router = useRouter();

  return (
    <>
      <header>
        <div className="container">
          <div className="shape" id="moon"></div>
        </div>
      </header>
      <section className="search-ticker-container">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-xl-8 mx-auto">
              <div className="logo-center">
                <Logo />
              </div>
              <MainAppSearch />
              <p className="trending-flow">
                Whats trending: <button type="button">ITC</button>{" "}
                <button type="button">TENOR</button>{" "}
                <button type="button">APPLE</button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Search.getLayout = function getLayout(page: React.ReactElement) {
  return <WebAppLayout>{page}</WebAppLayout>;
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Search);
