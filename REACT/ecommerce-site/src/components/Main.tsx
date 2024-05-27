import AppliedFilters from "./main-body/AppliedFilters"
import Products from "./main-body/Products"
import Sorting from "./main-body/Sorting"
import '../css/Main-body/Main.css'

const Main = () => {
  return (
    <>
      <div className="Main-Parent">
        <section className="filters">
          <Sorting/>
        </section>
        <section className="products">
          <AppliedFilters />
          <Products />
        </section>
      </div>
    </>
  )
}

export default Main