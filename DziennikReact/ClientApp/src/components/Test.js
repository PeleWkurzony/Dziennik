import { useEffect } from "react";

export const Test = () =>  {
    
    useEffect(() => {
        fetch('nauczyciel?id=1').then(
            (res) => {
                console.log(res.text())
            })
    })
    
    return 'test';
}