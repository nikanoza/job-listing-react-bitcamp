import Remove from "../assets/icon-remove.svg";

const Filters = ({ jobs, updateFilterArray }) => {
  const buttonRemoveHandler = (index) => {
    const copy = [...jobs];
    copy.splice(index, 1);
    updateFilterArray(copy);
  };

  const clearHandler = () => {
    props.updateFilterArray([]);
  };
  return (
    <div className="filters">
      <div className="choice-btns">
        {jobs.map((button, index) => {
          return (
            <button className="filter-btn" key={button.value}>
              <h3>{button.value}</h3>
              <div
                className="remove-icon-box"
                onClick={() => buttonRemoveHandler(index)}
              >
                <img src={Remove} alt="" />
              </div>
            </button>
          );
        })}
      </div>
      <button className="clear-btn" onClick={clearHandler}>
        Clear
      </button>
    </div>
  );
};

export default Filters;
