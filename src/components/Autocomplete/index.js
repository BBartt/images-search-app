import React, { useState } from "react";
import Button from "../Button";

const Autocomplete = ({
  suggestions = [],
  getSuggestion,
  noDataText = "",
  leftIconName = "",
  leftIconColor = "",
  rightIconName = "",
  rightIconColor = "",
  defaultValue = "",
}) => {
  const [state, setState] = useState({
    activeOption: -1,
    filteredOptions: [],
    showOptions: false,
    userInput: defaultValue,
  });
  const [error, setError] = useState(noDataText);

  const onChange = (e) => {
    const userInput = e.currentTarget.value;

    const filteredOptions = suggestions?.filter(
      (suggestion) =>
        suggestion?.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setState({
      activeOption: -1,
      filteredOptions,
      showOptions: true,
      userInput,
    });
  };

  const onSelectOption = (e) => {
    const userInput = e.currentTarget.innerText;
    setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput,
    });
    getSuggestion && getSuggestion(userInput);
  };

  const onKeyUp = (e) => {
    const { activeOption, filteredOptions } = state;
    const userInput = e.target.value;
    const selected = userInput.length > 0 && filteredOptions[activeOption];
    setError(noDataText);

    if (e.keyCode === 13) {
      if (userInput.length > 0) {
        setState({
          ...state,
          filteredOptions: [],
          showOptions: false,
          userInput: selected || userInput,
        });
        getSuggestion && getSuggestion(selected || userInput);
      } else {
        setError("Searched phrase can't be empty :).");
        setState({
          ...state,
          filteredOptions: [],
          showOptions: true,
        });
      }
    } else if (e.keyCode === 38) {
      if (activeOption <= -1) return;
      setState({ ...state, activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) return;
      setState({ ...state, activeOption: activeOption + 1 });
    }
  };

  const handleReset = () => {
    setError(noDataText);
    setState({
      activeOption: -1,
      filteredOptions: [],
      showOptions: false,
      userInput: "",
    });
  };

  const handleClick = () => {
    getSuggestion && getSuggestion(state.userInput);
  };

  let optionList;
  if (state.showOptions) {
    if (state.filteredOptions.length && state.userInput.length >= 3) {
      optionList = (
        <ul className="options">
          {state.filteredOptions.map((optionName, index) => {
            let className = index === state.activeOption ? "option-active" : "";
            return (
              <li
                onClick={onSelectOption}
                className={className}
                key={optionName}
              >
                {optionName}
              </li>
            );
          })}
        </ul>
      );
    } else if (state.userInput.length >= 3 || state.userInput.length === 0) {
      optionList = <div className="no-options">{error || "No results :("}</div>;
    }
  }

  return (
    <div className="autocomplete-component">
      {leftIconName && (
        <Button
          iconColor={leftIconColor}
          icon={leftIconName}
          className="icon-left"
          onClick={handleClick}
        />
      )}

      <input
        type="text"
        className={`input${leftIconName && " padding-left-50"}`}
        onChange={onChange}
        onKeyUp={onKeyUp}
        value={state.userInput}
        placeholder="Search free high-resolution photos"
        autoFocus
      />

      {rightIconName && state.userInput.length > 0 && (
        <Button
          iconColor={rightIconColor}
          icon={rightIconName}
          className="icon-right"
          onClick={handleReset}
        />
      )}

      {optionList}
    </div>
  );
};

export default Autocomplete;
