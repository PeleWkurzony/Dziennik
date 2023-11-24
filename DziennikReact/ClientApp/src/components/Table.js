import { TableUczen } from './TableUczen';
import { TableNauczyciel } from './TableNauczyciel';
import { TableKlasa } from './TableKlasa';
import { TableSzkola } from './TableSzkola';

export const Table = ({ data, className }) => {
    
    console.log(data);
    
    if (data.Type == "szkola") {
        return <TableSzkola className={className} data={data} />
    }
    else if (data.Type == "klasa") {
        return <TableKlasa className={className} data={data} />
    }
    else if (data.Type == "nauczyciel") {
        return <TableNauczyciel className={className} data={data} />
    }
    else if (data.Type == "uczen") {
        return <TableUczen className={className} data={data} />
    }
    else {
        return "Something went wrong!";
    }
}