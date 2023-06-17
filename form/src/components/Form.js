import './form.css'
import React from "react"
import {useState} from 'react'

const Form = ({user}) => {
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formuláio")
        console.log(name)
        console.log(email)
        console.log(bio)
        console.log(role)

        setName("");
        setEmail("");
        setBio("")
        setRole("")
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="div-name">
                    <label>Name: 
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                </div>
                <div className="div-email">
                    <label>Email: 
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                </div>
                <div className="div-password">
                    <label>Password: 
                        <input type="text" name="password" />
                    </label>
                </div>
                <div className="div-password">
                    <label>Confirm password: 
                        <input type="text" name="confirmPassword" />
                    </label>
                </div>
                <div className='div-textArea'>
                    <label>
                        <textarea name='bio' placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                    </label>
                </div>
                <div className='div-select'>
                    <label>
                        <span>Função no sistema </span>
                        <select name='role'  value={role} onChange={(e) => setRole(e.target.value)}> 
                            <option value="user">Usuário</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </label>
                </div>
            <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Form;