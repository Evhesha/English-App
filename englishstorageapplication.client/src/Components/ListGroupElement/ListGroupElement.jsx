function ListGroupElement({ name, email, password }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" style={{ border: '2px solid #ccc', borderRadius: '5px', marginBottom: '10px', padding: '10px' }}>
            <div> 
            <div style={{ flex: 1 }}> 
                <p><b>Name: </b> {name}</p>
            </div>
            <div style={{ flex: 1 }}>
                <p><b>Email: </b> {email}</p>
            </div>
            <div style={{ flex: 1 }}>
                <p><b>Password: </b> {password}</p>
            </div>
            </div>
            <div>
                <button type="button" className="btn btn-primary"><i class="bi bi-pencil"></i> Edit</button>
                <button type="button" className="btn btn-danger"><i class="bi bi-trash3"></i> Delete</button>
            </div>
        </li>
    );
}

export default ListGroupElement;
