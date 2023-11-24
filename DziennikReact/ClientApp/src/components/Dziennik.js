import { Search } from "./Search";
import { useState } from 'react';
import { Table } from './Table';

export const Dziennik = () => {
    
    const [data, setData] = useState();
    
    const loadTable = (type, id) => {
        let request = "/" + type;
        if (id != null) {
            request += "?id=" + id;
        }
        let data = fetch(request)
            .then(res => { return res.json() })
            .then(data => { setData(data) });
    }
    
    return (
        <>
            <Search loadTable={loadTable} />
            {data ? 
                <Table className="table table-bordered table-hover" data={data} />
            : <></> }
        </>
    )
}