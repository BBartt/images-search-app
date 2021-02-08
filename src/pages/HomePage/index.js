import React from "react";
import Autocomplete from "../../components/Autocomplete";

function HomePage() {
  return (
    <div className="home-page">
      <section className="search-section">
        <h1>Unsplash</h1>
        <p>
          The internet's source of{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://unsplash.com/license"
          >
            freely-usable images
          </a>
          .
        </p>
        <p>Powered by creators everywhere.</p>
        <Autocomplete
          suggestions={["red", "white", "blue", "lorem ipsum", "lorem"]}
          getSuggestion={(suggestion) => console.log(suggestion)}
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
