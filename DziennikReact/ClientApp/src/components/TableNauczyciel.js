export const TableNauczyciel = ({ data, className }) => {
    
    return (
        <table className={className}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Przedmiot</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.Id}</td>
                    <td>{data.Imie}</td>
                    <td>{data.Nazwisko}</td>
                    <td>{data.Przedmiot}</td>
                </tr>
            </tbody>
        </table>
    )
}