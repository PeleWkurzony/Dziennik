import { useState, useEffect } from 'react';
import { FormDodaj } from "./FormDodaj";

export const Dodaj = () => {
    
    const [type, setType] = useState();

    useEffect(() => {
        selectChange();
    }, []);
    
    const selectChange = () => {
        setType(
            document.querySelector('#dodajSelect').value
        );
    }
    
    return (
        <>  
            <div className="row mb-3">
                <button className="btn btn-primary col-1 mt-3" style={{height: "35px", width: "80px", marginLeft: "10px"}} onClick={() => {window.location.href = "/"}}> Powrót </button>
                <h1 className="text-center col-11"> Dodaj do bazy danych </h1>
            </div>
            <select onChange={selectChange} id="dodajSelect" className="form-select">
                <option value="szkola">Szkoła</option>
                <option value="klasa">Klasa</option>
                <option value="nauczyciel">Nauczyciel</option>
                <option value="uczen">Uczen</option>
            </select>
            <FormDodaj type={type} />
        </>
    )
}