import React from 'react';

function CharacterCard({ character }) {
    return (
        <div>Character Card
            <div class="char-card">
                <h3>{character.name}</h3>
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
