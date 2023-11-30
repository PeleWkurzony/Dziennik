import { useState } from 'react';
import { SelectFromDB } from "./SelectFromDB";
import { FormControls } from "./FormControls";

export const UczenForm = () => {
    const [imie, setImie] = useState();
    const [nazwisko, setNazwisko] = useState();
    const [plec, setPlec] = useState(0);
    const [punkty, setPunkty] = useState();
    const [klasa, setKlasa] = useState();
    
    const onSubmit = () => {
        console.log(imie, nazwisko, plec, punkty, klasa);
        const uczen = {
            "Imie": imie,
            "Nazwisko": nazwisko,
            "Plec": plec,
            "Punkty": punkty,
            "Klasa": klasa,
            "Typ": "uczen"
        };
        
        const json = JSON.stringify(uczen);
        fetch('/dodaj', {
            method: "PUT",
            body: json
        })
            .then(res => res.text())
            .then((text) => { console.log(text) });
    }
    
    return (
        <form className="m-4 border-3">
            <label htmlFor="imieInput" className="form-label">Imię</label>
            <input id="imieInput" className="form-control" placeholder="Wpisz imię" 
                onChange={(e) => {setImie(e.target.value)}}
            />
            
            <label htmlFor="nazwiskoInput" className="form-label">Nazwisko</label>
            <input id="nazwiskoInput" className="form-control" placeholder="Wpisz nazwisko"
               onChange={(e) => {setNazwisko(e.target.value)}}
            />
            
            <label htmlFor="plecSelect" className="form-label">Płeć</label>
            <select id="plecSelect" className="form-select" onChange={(e) => {setPlec(e.target.value)}}>
                <option value="0">Mężczyzna</option>
                <option value="1">Kobieta</option>
                <option value="2">Inne</option>
            </select>
            
            <label htmlFor="punktyInput" className="form-label">Punkty</label>
            <input type="number" id="punktyInput" className="form-control" placeholder="Wybierz ilość punktów"
               onChange={(e) => {setPunkty(e.target.value)}}
            />
            
            <label htmlFor="klasaSelect" className="form-label">Klasa</label>
            <SelectFromDB id="klasaSelect" type="klasa" onChange={(e) => {setKlasa(e.target.value)}} />
            <FormControls onSubmit={onSubmit} />
        </form>
    )
}