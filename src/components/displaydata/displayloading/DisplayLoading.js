import spinner from "../../../shared/images/spinner.gif"

/**
 * DisplayLoading is a component that shows that something is loading when it is used.
 * @returns A loading text with a spinner gif.
 */
export const DisplayLoading = () => {
    return (
        <div>
            <h2>Loading.....</h2>
      <img src={spinner} alt="Spinner" />
        </div>
    )
}