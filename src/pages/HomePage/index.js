import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getSuggestions } from "../../actions/SuggestionsActions";

import { getQuery } from "../../utils";

import routes from "../../routes";

import Autocomplete from "../../components/Autocomplete";

function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const suggestions = useSelector((state) => state.suggestions);

  const { photos } = routes;

  const onSearch = useCallback(
    (photo) => {
      history.push({ pathname: `${photos}/${photo}` });
    },
    [history, photos]
  );

  return (
    <div className="home-page">
      <section className="search-section">
        <h1>Images search app</h1>
        <p>
          The internet's source of{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://unsplash.com/license"
          >
            freely-usable images.
          </a>
        </p>
        <p>Powered by creators everywhere.</p>
        <Autocomplete
          suggestions={
            suggestions.data?.autocomplete?.length > 0
              ? getQuery(suggestions.data.autocomplete)
              : []
          }
          getSuggestion={(suggestion) => {
            onSearch(suggestion);
          }}
          getLetters={(letters) =>
            letters.length >= 3 && dispatch(getSuggestions(letters))
          }
          leftIconName="magnifying_glass"
          rightIconName="close"
        />
        <p>Trending: lorem, ipsum, dolor,</p>
      </section>

      <div className="author">
        Background photo was take by ->{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://unsplash.com/@maxcorr77"
        >
          massimiliano corradini
        </a>
      </div>
    </div>
  );
}

export default HomePage;
