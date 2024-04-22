import { useRouteError } from "react-router-dom";

export default function ErrorPage () {
    const error = useRouteError()
    console.error(error);

    return (
        <>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.data ||error.error.message}</i>
            </p>
        </>
    )
}