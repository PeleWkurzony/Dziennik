export const AddButton = () => {
    
    const addButtonClick = () => {
        window.location.href = "/dodaj";
    }
    
    return (
        <div className="col-1 row">
            <button 
                onClick={addButtonClick}
                style={{width: "35px", marginTop: "30px"}} 
                className="btn btn-primary mr-auto mb-auto text-center">+</button>
        </div>
    )
}