import { TableUczen } from './TableUczen';
import { TableNauczyciel } from './TableNauczyciel';
import { TableKlasa } from './TableKlasa';
import { TableSzkola } from './TableSzkola';

export const Table = ({ data, className }) => {
    
    console.log(data);
    
    if (data == null) {
        return <h1 className="text-center mt-5"> Coś poszło nie tak!" </h1>
    }
    else if (data.length < 1) {
        return <h1 className="text-center mt-5"> Nie znaleziono danych! </h1>
    }
    
    if (data[0].Type == "szkola") {
        return <TableSzkola nested={false} className={className} data={data} />
    }
    else if (data[0].Type == "klasa") {
        return <TableKlasa nested={false} className={className} data={data} />
    }
    else if (data[0].Type == "nauczyciel") {
        return <TableNauczyciel nested={false} className={className} data={data} />
    }
    else if (data[0].Type == "uczen") {
        return <TableUczen nested={false} className={className} data={data} />
    }
    else {
        return <h1 className="text-center mt-5"> Coś poszło nie tak!" </h1>
    }
}