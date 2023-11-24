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
                {Array.isArray(data) ? data.map((value, index) =>
                    <tr key={index}>
                        <td>{value.Id}</td>
                        <td>{value.Imie}</td>
                        <td>{value.Nazwisko}</td>
                        <td>{value.Przedmiot}</td>
                    </tr>
                ) :
                    <tr>
                        <td>{data.Id}</td>
                        <td>{data.Imie}</td>
                        <td>{data.Nazwisko}</td>
                        <td>{data.Przedmiot}</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}