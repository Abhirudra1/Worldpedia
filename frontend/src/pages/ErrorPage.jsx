import { NavLink, useRouteError } from "react-router-dom"

export default function ErrorPage() {

    const error = useRouteError()
  return (
    <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.data}</i><br />
            <i>{error.statusText || error.message} </i>
        </p>
        <NavLink to="/">
            <button>Go to home</button>
        </NavLink>
    </div>
  )
}
