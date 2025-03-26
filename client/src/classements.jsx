import { useEffect, useState } from "react";

function ClassementPage() {
    const [classement, setClassement] = useState([]);
    const sexe = "M";

    useEffect(() => {
        getClassement();
    }, []); 

    const getClassement = async () => {
        try {
            const response = await fetch("http://localhost:3000/classementVoie", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sexe : sexe })
            });
    
            const data = await response.json();
            console.log(data);
            setClassement(data);
        } catch (error) {   
            console.error("Erreur:", error);
        }
    };

    return (
        <div>
            <h1>Page de classements</h1>
            <div>
                {classement.map((climber) => (
                    <Climber key={climber.climberId} climber = {climber} />
                    ))}
            </div>
        </div>
    );
}

function Climber({ climber }) {
    return (
        <div>
            <p>Nom : {climber.name} - Points : {climber.score} </p>
        </div>
    );
}

export default ClassementPage;