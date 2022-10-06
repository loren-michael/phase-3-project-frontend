import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CharacterForm({ currentUser, handleAddCharacter }) {
    const navigate = useNavigate();
    const userId = currentUser.id
    const [newCharacter, setNewCharacter] = useState({
        name: "",
        race: "",
        level: 1,
        game_id: 1,
        user_id: userId
    });

    function handleNewChar(e) {
        e.preventDefault();
    }

    function handleClassChange(e) {
        const selection = e.target.value;
        setNewCharacter({character_class: e.target.value});
        if (selection === "Barbarian") {
            setNewCharacter({icon: "https://www.dndbeyond.com/avatars/10/0/636336416778392507.jpeg"})
        } else if (selection === "Bard") {
            setNewCharacter({icon: ""})
        } else if (selection === "Cleric") {
            setNewCharacter({icon: ""})
        } else if (selection === "Druid") {
            setNewCharacter({icon: ""})
        } else if (selection === "Fighter") {
            setNewCharacter({icon: ""})
        } else if (selection === "Monk") {
            setNewCharacter({icon: ""})
        } else if (selection === "Paladin") {
            setNewCharacter({icon: ""})
        } else if (selection === "Ranger") {
            setNewCharacter({icon: ""})
        } else if (selection === "Rogue") {
            setNewCharacter({icon: ""})
        } else if (selection === "Sorcerer") {
            setNewCharacter({icon: ""})
        } else if (selection === "Warlock") {
            setNewCharacter({icon: ""})
        } else if (selection === "Wizard") {
            setNewCharacter({icon: ""})
        }
    }

    return (
        <div>
            <br></br>
            <h4>Create a new character</h4>
            <form onSubmit={handleNewChar}>
                <label>Character Name: </label>
                <input type="text" value={newCharacter.name} onChange={e => setNewCharacter({...newCharacter, name: e.target.value})} />
                <br></br>
                <label>Race (Choose one): </label>
                <select value={newCharacter.race} onChange={e => setNewCharacter({race: e.target.value})}>
                    <option></option>
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
                <select value={newCharacter.character_class} onChange={handleClassChange}>
                    <option></option>
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
            </form>
            <br></br>
            <button type="Submit">Submit New Character</button>
        </div>
    )
};

export default CharacterForm;