export const TableUczen = ({ data, className }) => {
    
    let plec = "";
    if (data.Plec == 0){
        plec = "Mężczyzna";
    }
    else if (data.Plec == 1) {
        plec = "Kobieta";
    }
    else {
        plec = "Inna";
    }
    
    return (
        <table className={className}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Płeć</th>
                    <th>Punkty</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.Id}</td>
                    <td>{data.Imie}</td>
                    <td>{data.Nazwisko}</td>
                    <td>{plec}</td>
                    <td>{data.Punkty}</td>
                </tr>
            </tbody>
        </table>
    )
}