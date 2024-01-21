import Card from "../../components/Card"

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'DevOps',
        picture: "C:\\Users\\User\\Documents\\X2026\\X2 2022-2023\\Stage de découverte\\IPM (Internship Projects Manager)\\static app\\X\\IPM\\media\\defaultUserPicture.png",
    },
    {
        name: 'John Doe',
        jobTitle: 'Développeur frontend',
        picture: "C:\\Users\\User\\Documents\\X2026\\X2 2022-2023\\Stage de découverte\\IPM (Internship Projects Manager)\\static app\\X\\IPM\\media\\defaultUserPicture.png",
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeur Fullstack',
        picture: "C:\\Users\\User\\Documents\\X2026\\X2 2022-2023\\Stage de découverte\\IPM (Internship Projects Manager)\\static app\\X\\IPM\\media\\defaultUserPicture.png",
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