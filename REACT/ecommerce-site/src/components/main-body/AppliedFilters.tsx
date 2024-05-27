import '../../css/Main-body/AppliedFilters/AppliedFilters.css'

const AppliedFilters = () => {
  return (
    <>
      <div className="sortBy">
        <p className="result">
          Showing <span>9</span> results from <span>37</span> for{" "}
          <span>"tops"</span>
        </p>
        <div className="SortOptions">
          <p>Sort by</p>
          <button type="button">
            Popularity <img src="/assets/chevron-down.png" alt="down" />
          </button>
        </div>
      </div>
      <div className="SelectedFilters">
        <p>Applied Filters: </p>
        <div className="buttons">
          <button>
            Top <img src="/assets/x.png" alt="x" />
          </button>
          <button>
            $20 - $100 <img src="/assets/x.png" alt="x" />
          </button>
          <button>
            Medium <img src="/assets/x.png" alt="x" />
          </button>
        </div>
      </div>
    </>
  );
}

export default AppliedFilters