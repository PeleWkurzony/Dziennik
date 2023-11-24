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
            .then(res => res.json())
            .then(data => { setData(data) });
    }
    
    return (
        <>
            <Search loadTable={loadTable} />
            {data ? data.map((value, index) => 
                <Table className="table table-bordered table-hover" key={index} data={value} />
            ) : <></> }
        </>
    )
}