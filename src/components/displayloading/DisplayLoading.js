import './DisplayLoading.css';

/**
 * DisplayLoading is a component that shows that something is loading when it is used
 * @returns A loading text with a spinning pokéball
 */
const DisplayLoading = () => {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      <div className="spinner"/>
    </div>
  );
};

export default DisplayLoading;
