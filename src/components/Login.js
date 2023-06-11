import React, {useState} from 'react'

const Login = () => {
    const [name,setName]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [errorMsg, setErrorMsg] = useState([{
        emailErorr: "",
        passwordError:""
    }])
    const database = [
        {
            id: 1,
            name:"abdelkarim",
            email: "aityousef@gmail.com",
            password: "123456"
        },
        {
            id: 2,
            name:"ali baba",
            email: "ali.baba@gmail.com",
            password: "ali baba"
        }
    ];
    const handleLogin = (e) => {
        e.preventDefault();
        const existUser = database.find(user => user.email === email)
        if (existUser) {
            if (existUser.password === password) {
                setErrorMsg({emailErorr:""})
                setIsLogin(true)
                setName(existUser.name)
            }
            else {
                setErrorMsg({passwordError:"mot de passe incorrect"})
               
            }
        } else {
            setErrorMsg({emailErorr:"Email invalid"})
        }
      
            

    }
    return (
        <div className="d-flex justify-content-center">
          {!isLogin && <form className="form border p-5 w-75 row g-3 m-5">
                <h1 className="left alert alert-info d-flex justify-content-center">Connexion</h1><br/><br/><hr/>
                <label className="form-label" htmlFor="email"><strong>Email :</strong></label>
                <input value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} />
                <strong className="text-danger text-canter text-capitalize">{errorMsg.emailErorr}</strong>
                <label type="text" className="form-label" htmlFor="password"><strong>Password :</strong></label>
                <input value={password} type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                
                <strong className="text-danger text-canter text-caitalize">{errorMsg.passwordError} </strong>

                
                
                
                <button onClick={handleLogin}   className="btn btn-lg btn-primary"> Se Connecter </button>



            </form>}

            {isLogin && <div className="container d-flex justify-content-center m-5 p-5 w-100  ">
                <h4 className="text-capitalize mx-5 alert alert-light"><strong className='alert alert-success'>Acceuil {name}</strong>
                    <button onClick={() => setIsLogin(false)} className="btn btn-danger mx-5">Log Out</button>
                </h4>
                
            </div>}
        </div>
    )
}
export default Login;