import Card from "../../components/Card"
import styled from "styled-components"

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

const CardsContainer = styled.div`
        display: grid;
        gap: 24px;
        grid-template-rows: 350px 350px;
        grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
    return (
        <div>
            <h1>Freelances 👨🏾‍💻👨🏾‍💻👨🏾‍💻</h1>
            <CardsContainer>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances