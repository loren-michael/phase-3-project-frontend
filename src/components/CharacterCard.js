import React from 'react';

function CharacterCard({ character }) {
    // const icon = "https://www.dndbeyond.com/avatars/10/0/636336416778392507.jpeg"
    
    // let image = (icon) => {
    //     if (character.character_class === "Barbarian") {
    //         let icon = "https://www.dndbeyond.com/avatars/10/0/636336416778392507.jpeg"
    //     } else if (character.character_class === "Bard") {
    //         const icon = "https://www.dndbeyond.com/avatars/10/1/636336416923635770.jpeg"
    //     } else if (character.character_class === "Cleric") {
    //         let icon = "https://www.dndbeyond.com/avatars/10/2/636336417054144618.jpeg"
    //     } else if (character.character_class === "Druid") {
    //         icon = "https://www.dndbeyond.com/avatars/10/3/636336417152216156.jpeg"
    //     } else if (character.character_class === "Fighter"){
    //         icon = "https://www.dndbeyond.com/avatars/10/4/636336417268495752.jpeg"
    //     } else if (character.character_class === "Monk") {
    //         icon = "https://www.dndbeyond.com/avatars/10/5/636336417372349522.jpeg"
    //     } else if (character.character_class === "Paladin") {
    //         icon = "https://www.dndbeyond.com/avatars/10/6/636336417477714942.jpeg"
    //     } else if (character.character_class === "Ranger") {
    //         icon = "https://www.dndbeyond.com/avatars/10/7/636336417569697438.jpeg"
    //     } else if (character.character_class === "Rogue") {
    //         icon = "https://www.dndbeyond.com/avatars/10/8/636336417681318097.jpeg"
    //     } else if (character.character_class === "Sorcerer") {
    //         icon = "https://www.dndbeyond.com/avatars/10/9/636336417773983369.jpeg"
    //     } else if (character.character_class === "Warlock") {
    //         icon = "https://www.dndbeyond.com/avatars/10/12/636336422983071263.jpeg"
    //     } else if (character.character_class === "Wizard") {
    //         icon = "https://www.dndbeyond.com/avatars/10/11/636336418370446635.jpeg"
    //     } else {
    //         icon = "https://preview.redd.it/ilt93aicmbf31.png?width=256&format=png&auto=webp&s=1a1b20f4364c68398df8738257b89dbe620dfebb"
    //     }
    // }   
    
    
    return (
        <div>
            <div className="char-card">
                <h4>{character.name}</h4>
                <img alt="icon" src={character.icon}></img>
            </div>
        </div>
    )
};

export default CharacterCard;


// Barbarian: https://www.dndbeyond.com/avatars/10/0/636336416778392507.jpeg
// Bard: https://www.dndbeyond.com/avatars/10/1/636336416923635770.jpeg
// Cleric:  https://www.dndbeyond.com/avatars/10/2/636336417054144618.jpeg
// Druid: https://www.dndbeyond.com/avatars/10/3/636336417152216156.jpeg
// Fighter:  https://www.dndbeyond.com/avatars/10/4/636336417268495752.jpeg
// Monk:  https://www.dndbeyond.com/avatars/10/5/636336417372349522.jpeg
// Paladin:  https://www.dndbeyond.com/avatars/10/6/636336417477714942.jpeg
// Ranger:  https://www.dndbeyond.com/avatars/10/7/636336417569697438.jpeg
// Rogue:  https://www.dndbeyond.com/avatars/10/8/636336417681318097.jpeg
// Sorcerer:  https://www.dndbeyond.com/avatars/10/9/636336417773983369.jpeg
// Warlock:  https://www.dndbeyond.com/avatars/10/12/636336422983071263.jpeg
// Wizard:  https://www.dndbeyond.com/avatars/10/11/636336418370446635.jpeg
