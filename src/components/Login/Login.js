import { useState } from "react";
export function Login() {

    // const handleSubmit = (e) => {
    //     console.log('rami');
    //     e.preventDefault();
    // }

    const [user, setUser] = useState(null)
    const [mail, setMail] = useState('yariv@nerdeez.com')
    const [pass, setPass] = useState('12345678')

    const handleMailChange = (e) => {
        setMail(e.target.value);
    }

    const handlePassChange = (e) => {
        setPass(e.target.value);
    }

    const handleSubmit = (e) => {
        // 
        console.log('this will run when submitting the form');
        e.preventDefault();



        setUser({ firstName: 'rami1', lastName: 'sssss' })

        const data = {
            email: mail,
            password: pass
        };

        fetch('https://academeez-login-ex.herokuapp.com/api/users/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setUser(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }

    return (
        <form onSubmit={handleSubmit}>
            Email:
            <input
                type="email"
                name="email"
                value={mail}
                placeholder="Enter your email"
                onChange={handleMailChange}
            />
                
            
            Passport:<input
                type="password"
                name="passport"
                value={pass}
                placeholder="Enter your passport"
                onChange={handlePassChange}
            />
            <button type="submit">SendUserFromForm</button>

            {/* hello rami you are now logged in  */}

            {
                user && <h1>Hello {user.firstName} you are now logged in, your id is {user.id}
                    your createdAt is {user.createdAt} </h1>

            }
            {/* <button type="submit">GetUserFromServer</button> */}
        </form>
    )
}
