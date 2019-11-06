import React from 'react';

const HomePage = () => (
    <div>
        <div className="homepage-header">
            <h1>Welcome to BookSmart!</h1>
        </div>
        <div>
            <div className="log-in-boxes">
                <form>
                    <h3>Staff log-in:</h3>
                    <label>Staff username: </label>
                    <input type="text" placeholder="Username" /><br></br>
                    <label>Staff Password: </label>
                    <input type="text" placeholder="Password" />
               </form>
            </div>
        </div>
    </div>
)

export default HomePage;