const Profile = ({name, profile: {job, date}}) =>{
    return(
        <>
            <h1 className="profile__job">{job}</h1>
            <p className="profile__name">{name}</p>
            <p className="profile__date">{date}</p>
        </>
    )
}

export default Profile;