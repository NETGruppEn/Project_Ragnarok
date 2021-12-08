import './DisplayLoading.css';

/**
 * DisplayLoading is a component that shows that something is loading when it is used.
 * @returns A loading text with a spinner gif.
 */
const DisplayLoading = () => {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      <div className="spinner"/>
      {/* <img src={spinner} alt="Spinner" /> */}
    </div>
  );
};

export default DisplayLoading;
