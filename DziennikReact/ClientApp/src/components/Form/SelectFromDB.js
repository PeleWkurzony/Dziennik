import { useState, useEffect } from "react";

export const SelectFromDB = ({ id, type, onChange}) => {
    
    const [list, setList] = useState([]);
    useEffect(() => {
        if (type == 'szkola') {
            fetch('/szkola')
                .then(res => res.json())
                .then((data) => {
                    setList(data);
                });
        }
        else if (type == 'klasa') {
            fetch('/klasa')
                .then(res => res.json())
                .then((data) => {
                   setList(data); 
                });
        }
    }, []);
    
    return (
        <select id={id} className="form-select" onChange={onChange}>
            <option>Wybierz</option>
            {list.map((value, index) => 
                <option key={index} value={value.Id}>{value.Nazwa}</option>
            )}
        </select>
    )
}