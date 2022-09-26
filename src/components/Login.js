import React from 'react';

function Login() {




    return (
        <div id="login_box">
            <h4>Please Log In To Continue:</h4>
            <form>
                <div>Username: </div><input type="text" />
                <div>Password: </div><input type="password" />
            </form>
            <br></br>
            <button type="submit">Submit</button>
        </div>
    )
};

export default Login;