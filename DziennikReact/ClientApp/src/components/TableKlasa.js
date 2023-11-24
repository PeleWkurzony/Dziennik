﻿import { TableUczen } from "./TableUczen";
import { TableNauczyciel } from "./TableNauczyciel";

export const TableKlasa = ({ data, className }) => {

    return (
        <table className={className}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nazwa</th>
                    <th>Lista Uczniów</th>
                    <th>Wychowawca</th>
                    <th>Średnia Punktów</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.Id}</td>
                    <td>{data.Nazwa}</td>
                    <td>{data.ListaUczniow ? data.ListaUczniow.map((value, index) => 
                        <TableUczen className={className} key={index} data={value} />
                    ) : ""}</td>
                    <td> <TableNauczyciel className={className} data={data.Wychowawca} /> </td>
                    <td>{data.SredniaPunktow}</td>
                </tr>
            </tbody>
        </table>
    )
}