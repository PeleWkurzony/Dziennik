import { useEffect } from 'react';

export const Search = ({ loadTable }) => {

    useEffect(() => {
        onChange();
    }, []);
    
    const onChange = () => {
        loadTable(
            document.querySelector('#selectType').value,
            document.querySelector('#searchInput').value
        );
    }
    
    return (
        <div className="row">
            <div className="mb-3 col">
                <label htmlFor="searchInput" className="form-label">ID</label>
                <input onChange={onChange} type="number" className="form-control" id="searchInput"
                       placeholder="ID" />
            </div>
            <div className="mb-3 col">
                <label htmlFor="selectType" className="form-label"> Typ </label>
                <select onChange={onChange} className="form-select" id="selectType">
                    <option value="szkola"> Szkoły </option>
                    <option value="klasa"> Klasy </option>
                    <option value="nauczyciel"> Nauczyciele </option>
                    <option value="uczen"> Uczniowie </option>
                </select>
            </div>
        </div>
    )
}