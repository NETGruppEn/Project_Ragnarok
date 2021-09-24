import spinner from "../../../shared/images/spinner.gif"

export const DisplayLoading = () => {
    return (
        <div>
            <h2>Loading.....</h2>
      <img src={spinner} alt="Spinner" />
        </div>
    )
}