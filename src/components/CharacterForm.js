import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CharacterForm({ userId, setCharacters }) {
    // const id = localStorage.getItem('user_id')
    const navigate = useNavigate();
    // const history = useHistory();
    const [newCharacter, setNewCharacter] = useState({
        name: "",
        race: "Dwarf",
        character_class: "Barbarian",
        level: 1,
        icon: "https://dnd.dragonmag.com/wp-content/uploads/sites/587/2020/08/rozilla74-ampersand-1.jpg",
        game_id: 1,
        user_id: userId
    });

    function handleClassChange() {
        const selection = newCharacter.character_class;
        if (selection === "Barbarian") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/0/636336416778392507.jpeg"})
        } else if (selection === "Bard") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/1/636336416923635770.jpeg"})
        } else if (selection === "Cleric") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/2/636336417054144618.jpeg"})
        } else if (selection === "Druid") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/3/636336417152216156.jpeg"})
        } else if (selection === "Fighter") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/4/636336417268495752.jpeg"})
        } else if (selection === "Monk") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/5/636336417372349522.jpeg"})
        } else if (selection === "Paladin") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/6/636336417477714942.jpeg"})
        } else if (selection === "Ranger") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/7/636336417569697438.jpeg"})
        } else if (selection === "Rogue") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/8/636336417681318097.jpeg"})
        } else if (selection === "Sorcerer") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/9/636336417773983369.jpeg"})
        } else if (selection === "Warlock") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/12/636336422983071263.jpeg"})
        } else if (selection === "Wizard") {
            setNewCharacter({...newCharacter, icon: "https://www.dndbeyond.com/avatars/10/11/636336418370446635.jpeg"})
        }
    }
    
    function updateCharacters() {
        fetch(`http://localhost:9292/${userId}/characters`)
            .then(r => r.json())
            .then(characters => setCharacters(characters))
    }

    function handleNewChar(e) {
        e.preventDefault();
        handleClassChange();
        fetch(`http://localhost:9292/characters`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCharacter)
        })
        .then(updateCharacters())
        .then(navigate(`/${userId}/characters`))
    }

    return (
        <div>
            <br></br>
            <h4>Create a new character</h4>
            <form onSubmit={handleNewChar}>
                <label>Character Name: </label>
                <input type="text" name="name" value={newCharacter.name} onChange={e => setNewCharacter({...newCharacter, name: e.target.value})} />
                <br></br>
                <label>Race (Choose one): </label>
                <select name="race" value={newCharacter.race} onChange={e => setNewCharacter({...newCharacter, race: e.target.value})}>
                    <option>Dwarf</option>
                    <option>Dragonborn</option>
                    <option>Elf</option>
                    <option>Gnome</option>
                    <option>Halfling</option>
                    <option>Human</option>
                    <option>Tiefling</option>
                </select>
                <br></br>
                <label>Class (Choose one): </label>
                <select name="character-class" value={newCharacter.character_class} onChange={e => setNewCharacter({...newCharacter, character_class: e.target.value})}>
                    <option>Barbarian</option>
                    <option>Bard</option>
                    <option>Cleric</option>
                    <option>Druid</option>
                    <option>Fighter</option>
                    <option>Monk</option>
                    <option>Paladin</option>
                    <option>Ranger</option>
                    <option>Rogue</option>
                    <option>Sorcerer</option>
                    <option>Warlock</option>
                    <option>Wizard</option>
                </select>
                <br></br>
                <label>Level: </label>
                <select name="level" value={newCharacter.level} onChange={e => setNewCharacter({...newCharacter, level: e.target.value})} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                </select>
                <br></br>
                <br></br>
                <button type="Submit">Submit New Character</button>
            </form>
            <br></br>
            
        </div>
    )
};

export default CharacterForm;