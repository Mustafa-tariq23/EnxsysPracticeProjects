import '../css/BreadCrums/BreadCrums.css';

const BreadCrums = () => {
  return (
    <>
      <div className="BreadCrums">
        <h3 className="Home">Home</h3>
        <p className="indicator">{`>`}</p>
        <h3 className="Browse">Browse Products</h3>
      </div>
    </>
  );
};

export default BreadCrums;