import User from '../../User/User';
import useFetch from '../../../Services/useFetch';
import appConfig from '../../../Config/appConfig';

function Users() {

    const img01 = 'https://randomuser.me/api/portraits/med/men/93.jpg';
    const img02 = 'https://randomuser.me/api/portraits/med/men/50.jpg';

    const [users, error, loading] = useFetch(appConfig.users);

    if (error) {
        return <span>Error!!!</span>
    }

    if (loading) {
        return <span>Loading...</span>
    }


    return (

        <div className="Users">
            {/* Props  */}
            {users.map(tobj => <User name={tobj.name} image={tobj.id % 2 === 0 ? img01 : img02} position={tobj.company.name} />)}

            {/* <User name='Rasmus Sakala' image={img01} position='Worker' /> */}
            {/* <User name='Alex Ruiz' image={img02} position='CEO' /> */}
            <br />
            {/* <Timer /> */}
        </div>
    )
}
export default Users;