import { useEffect } from "react";

function useTitle(title) {

    useEffect(() => {
        document.title = 'My App | ' + title
    }, [title])

}
export default useTitle;