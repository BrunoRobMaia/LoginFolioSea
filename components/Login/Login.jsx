import './Login.css'
import Logo from '../Imagens/Logo.svg'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { HiOutlineAtSymbol } from 'react-icons/hi'
import { BsGoogle, BsFacebook, BsDiscord } from 'react-icons/bs'
import { Checkbox } from '@mui/material'
import styled from '@emotion/styled'


const Login = () => {

    const Button = styled.button`
        background-color: #0057ff;
        font-size: 16px;
        padding: 1em;
        color: white;
        border-radius: 20px;
        border: none;
        cursor: pointer;
    `


    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const passwordIcon = showPassword ? <FaRegEyeSlash /> : <FaRegEye />;

    return (
        <div className='login'>
            <div>
                <img className='logo' src={Logo} alt="Logo do Folio sea" />
            </div>
            <div className='cadastro'>

                <div>
                    <h1 className='titulo'>Login</h1>
                </div>

                <div className='barra'></div>

                <div className='label'>
                    <label className='label_name'>Nome de Usuário</label>
                    <div className='input-wrapper'>
                        <input className='input_style' type="text" placeholder='Ex: use256' />
                        <HiOutlineAtSymbol className='svg_button' />
                    </div>
                </div>

                <div className='label'>

                    <label className='label_name'>Senha</label>
                    <div className="input-wrapper">
                        <input className='input_style' type={showPassword ? 'text' : 'password'} />
                        <button className='svg_button' onClick={toggleShowPassword}>{passwordIcon}</button>
                    </div>

                </div>

                <div className='checkbox'>
                    <div className='checkbox_con'>
                        <Checkbox size='small' />
                        <p>Manter Conexão</p>
                    </div>
                    <div className='senha_esquecida'>
                        <p>Esqueceu a senha?</p>
                    </div>
                </div>

                <div>
                    <Button className='boton'>Login</Button>
                </div>

                <div className='sociais_texto'>
                    <p>Realizar login com</p>
                </div>

                <div className='sociais'>

                    <BsGoogle />
                    <BsFacebook />
                    <BsDiscord />
                </div>

                <div className='conta'>
                    <p className='conta_texto'>Você não tem conta?</p>
                    <a href="" className='link'><p className='botao_conta'>Criar conta</p></a>
                </div>

            </div>
        </div>
    )
}

export { Login }