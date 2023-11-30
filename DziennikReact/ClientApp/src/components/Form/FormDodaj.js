import { SzkolaForm } from "./SzkolaForm";
import { KlasaForm } from "./KlasaForm";
import { NauczycielForm } from "./NauczycielForm";
import { UczenForm } from "./UczenForm";

export const FormDodaj = ({ type }) => {
    
    if (type === 'szkola') {
        return <SzkolaForm />
    }
    else if (type === 'klasa') {
        return <KlasaForm />
    }
    else if (type === 'nauczyciel') {
        return <NauczycielForm />
    }
    else if (type === 'uczen') {
        return <UczenForm />
    }
    else {
        return <h1 className="text-center text-danger"> Coś poszło nie tak! </h1>
    }
    
}