import useTitle from "../../../Services/useTitle";

function PageNotFound() {

    useTitle('Page Not Found');

    return (
        <div className="PageNotFound">
            <h1>404</h1>
            < img src='https://cdn.dribbble.com/users/1665077/screenshots/10738715/media/90712c2d7fd869e9d7586a108024d62c.gif' alt='pageNotFound' />
        </div>
    )
}
export default PageNotFound;