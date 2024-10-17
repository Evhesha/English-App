function ListGroupElement({ name, email, password }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div> <p>
            {name} {email} {password}
                </p>
            </div>
            <div>
                <button type="button" className="btn btn-primary"><i class="bi bi-pencil"></i> Edit</button>
                <button type="button" className="btn btn-danger"><i class="bi bi-trash3"></i> Delete</button>
            </div>
        </li>
    );
}

export default ListGroupElement;
