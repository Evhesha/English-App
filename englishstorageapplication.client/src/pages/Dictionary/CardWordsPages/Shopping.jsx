import 'bootstrap/dist/css/bootstrap.min.css';
import ToLinkButton from '../../../Components/Buttons/ToLinkButton/ToLinkButton';

function Shopping(){
    return<>
        <ToLinkButton link={"/topics-page"} placeholder={"Topics"} />
        <h1>Shopping page</h1>
    </>
}

export default Shopping;