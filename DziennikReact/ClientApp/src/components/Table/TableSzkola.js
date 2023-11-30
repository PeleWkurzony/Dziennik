import { TableKlasa } from "./TableKlasa";
import { RemoveTableButton } from "./RemoveTableButton";

export const TableSzkola = ({ data, className }) => {

    return (
        <table className={className}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nazwa</th>
                    <th>Lista Klas</th>
                    <th>Średnia Punktów</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(data) ? data.map((value, index) =>
                    <tr key={index}>
                        <td>{value.Id}</td>
                        <td>{value.Nazwa}</td>
                        <td>{value.ListaKlas ? value.ListaKlas.map((value, index) =>
                            <TableKlasa nested={true} className={className} key={index} data={value} />
                        ) : ""}</td>
                        <td>{value.SredniaPunktow}</td>
                        <RemoveTableButton id={value.Id} type={value.Type} />
                    </tr>
                ) :
                    <tr>
                        <td>{data.Id}</td>
                        <td>{data.Nazwa}</td>
                        <td>{data.ListaKlas ? data.ListaKlas.map((value, index) =>
                            <TableKlasa nested={true} className={className} key={index} data={value} />
                        ) : ""}</td>
                        <td>{data.SredniaPunktow}</td>
                        <RemoveTableButton id={data.Id} type={data.Type} />
                    </tr>
                }
            </tbody>
        </table>
    )
}