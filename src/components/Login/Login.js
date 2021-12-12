export function Login(){

const handleSubmit = (e) => {
    console.log('rami');
    e.preventDefault();
}

return (
    <form onSubmit={handleSubmit}>
            Email:<input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email">
                    </input>
            Passport:<input 
                        type="password" 
                        name="passport" 
                        placeholder="Enter your passport">
                    </input>
                    <button type="submit" >Login</button>
        </form>
)
}
