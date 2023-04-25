import './User.css';

function User(props) {

    return (
        <div className="User">
            <img src={props.image} alt={props.name} />
            <h6>{props.name}</h6>
            <hr />
            <span>{props.position}</span>
        </div>
    )
}

export default User;