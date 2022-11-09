import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const userInput = form.username;
        const passwordInput = form.password;

        localStorage.setItem("current-user", userInput.value);
        localStorage.setItem("current-password", passwordInput.value);

        navigate(`/profile/${userInput.value}`);
    }

    return (
        <div id="login">
            <form id="card" onSubmit={handleSubmit}>
                <div className="card-header">
                    <h1>Login</h1>
                </div>
                <div className="card-content">
                    <div className="card-content-area">
                        <label> E-mail:</label>
                        <input type="text" name="username" required/>
                    </div>
                    <div class="card-content-area">
                        <label> Password:</label>
                        <input type="password" name="password" required/>
                    </div>   
                </div>
                 <div className="card-footer">
                     <button type="submit">login</button>
                </div>
              </form>
            </div>
    );
}

export { LoginPage };