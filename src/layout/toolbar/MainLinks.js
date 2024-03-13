import { Link } from 'react-router-dom'

function MainLinks() {

    const linksData = [
        {
            id: 1,
            path: '/',
            name: 'Home'
        },
        {
            id: 2,
            path: 'services',
            name: 'Services'
        },
        {
            id: 3,
            path: 'insurance',
            name: 'Insurance'
        },
        {
            id: 4,
            path: 'reviews',
            name: 'Reviews'
        }
    ]

    return(
        <div className='toolbar__mainlinks'>
            {linksData.map((linksObj) => {
                return(
                    <Link className='toolbar__mainlinks--button' to={linksObj.path} key={linksObj.id}>
                        {linksObj.name}
                    </Link>
                )
            })}
        </div>
    )
}

export default MainLinks;