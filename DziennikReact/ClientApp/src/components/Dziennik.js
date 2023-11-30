import { Search } from "./Search";
import { useState } from 'react';
import { Table } from './Table/Table';
import { AddButton } from "./AddButton";

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
            <div className="row">
                <Search loadTable={loadTable} />
                <AddButton />
            </div>
            {data ? 
                <Table className="table table-bordered align-middle" data={data} />
            : <></> }
        </>
    )
}