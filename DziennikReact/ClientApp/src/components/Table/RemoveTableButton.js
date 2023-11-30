
export const RemoveTableButton = ({ id, type }) => {
    
    const redirect = () => {
        fetch(`/usun?type=${type}&id=${id}`, {method: 'DELETE'})
            .then(res => window.location.href = "/");
    }
      
    return ( 
        <td>
            <button className="btn btn-outline-danger" onClick={redirect}>X</button>
        </td>
    )
}