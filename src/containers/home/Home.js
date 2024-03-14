import { useEffect } from 'react'

import ReviewsPreview from "./ReviewsPreview";

function Home() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0})
      }, [])


    return(
        <div>
            <div>Home Landing</div>
            <div>Expertise. Comprehensive Eye Care. Compassion.</div>
            <div>Services Offered (cards)</div>

            <ReviewsPreview />

        </div>
    )
}

export default Home;