import { TableKlasa } from "./TableKlasa";

export const TableSzkola = ({ data, className }) => {

    return (
        <table className={className}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nazwa</th>
                    <th>Lista Klas</th>
                    <th>Średnia Punktów</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(data) ? data.map((value, index) =>
                    <tr key={index}>
                        <td>{value.Id}</td>
                        <td>{value.Nazwa}</td>
                        <td>{value.ListaKlas ? value.ListaKlas.map((value, index) =>
                            <TableKlasa className={className} key={index} data={value} />
                        ) : ""}</td>
                        <td>{value.SredniaPunktow}</td>
                    </tr>
                ) :
                    <tr>
                        <td>{data.Id}</td>
                        <td>{data.Nazwa}</td>
                        <td>{data.ListaKlas ? data.ListaKlas.map((value, index) =>
                            <TableKlasa className={className} key={index} data={value} />
                        ) : ""}</td>
                        <td>{data.SredniaPunktow}</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}