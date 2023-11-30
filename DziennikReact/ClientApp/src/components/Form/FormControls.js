export const FormControls = ({ onSubmit }) => {
    return (
        <div className="mt-2">
            <button className="btn btn-primary" style={{marginRight: "10px"}} onClick={onSubmit}> Dodaj </button>
            <input type="reset" className="btn btn-primary" value="Wyczyść" />
        </div>
    )
}