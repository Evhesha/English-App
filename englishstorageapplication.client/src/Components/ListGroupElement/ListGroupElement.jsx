function ListGroupElement({name}, {secondName}) {

    return <>
        <li class="list-group-item">
            {name} 
            {secondName} 
            <button type="button" class="btn btn-primary">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>    
        </li>
    </>
}

export default ListGroupElement;