import { TableUczen } from "./TableUczen";
import { TableNauczyciel } from "./TableNauczyciel";
import { RemoveTableButton } from "./RemoveTableButton";

export const TableKlasa = ({ data, className, nested }) => {

    return (
        <table className={className}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nazwa</th>
                    <th>Lista Uczniów</th>
                    <th>Wychowawca</th>
                    <th>Średnia Punktów</th>
                    {nested ? "" : <th></th>}
                </tr>
            </thead>
            <tbody>
                {Array.isArray(data) ? data.map((value, index) =>
                    <tr key={index}>
                        <td>{value.Id}</td>
                        <td>{value.Nazwa}</td>
                        <td>{value.ListaUczniow ? value.ListaUczniow.map((value, index) =>
                            <TableUczen nested={true} className={className} key={index} data={value} />
                        ) : ""}</td>
                        <td> <TableNauczyciel nested={true} className={className} data={value.Wychowawca} /> </td>
                        <td>{value.SredniaPunktow}</td>
                        {nested ? "" :
                            <RemoveTableButton id={value.Id} type={value.Type} />
                        }
                    </tr>
                ) :
                    <tr>
                        <td>{data.Id}</td>
                        <td>{data.Nazwa}</td>
                        <td>{data.ListaUczniow ? data.ListaUczniow.map((value, index) =>
                            <TableUczen nested={true} className={className} key={index} data={value} />
                        ) : ""}</td>
                        <td> <TableNauczyciel nested={true} className={className} data={data.Wychowawca} /> </td>
                        <td>{data.SredniaPunktow}</td>
                        {nested ? "" :
                            <RemoveTableButton id={data.Id} type={data.Type} />
                        }
                    </tr>
                }
            </tbody>
        </table>
    )
}