import Card from "../../components/Card"

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'DevOps',
        picture: "../../assets/defaultUserPicture.png"
    },
    {
        name: 'John Doe',
        jobTitle: 'Développeur frontend',
        picture: "../../assets/defaultUserPicture.png"
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeur Fullstack',
        picture: "../../assets/defaultUserPicture.png"
    }
]

function Freelances() {
    return (
        <div>
            <h1>Freelances 👨🏾‍💻👨🏾‍💻👨🏾‍💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
    )
}

export default Freelances