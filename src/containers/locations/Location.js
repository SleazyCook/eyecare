import { useEffect } from 'react'

import Overview from "./Overview";
import Office from "./Office";
import Store from "./Store";
import Form from "./Form";

function Location() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0})
      }, [])

    return(
        <div>
            <Overview />
            <Office />
            <Store />
            <Form />
        </div>
    )
}

export default Location;