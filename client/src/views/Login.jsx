import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { css } from 'emotion'
import { styles } from '../Styles'
import { Link } from 'react-router-dom'
import { FaLock } from 'react-icons/fa'
import ForgotPasswordPopup from '../components/ForgotPasswordPopup'

export default function Login({ history }) {
    const [forgot, setForgot] = useState(false)
    const [securityQuestion, setSecurityQuestion] = useState(null)
    const [user, setUser] = useState("Marysa")
    const [pass, setPass] = useState("")
    const creds = {
        "username": user,
        "password": pass
    }

    useEffect(() => {
    localStorage.removeItem('token')
    axios
        .get('https://mg-photography-backend.herokuapp.com/api/security/Marysa')
        .then(res => setSecurityQuestion(res.data.security_question))
        .catch(err => console.log(err))
    },[])

    const login = e => {
        e.preventDefault()
        axios
            .post('https://mg-photography-backend.herokuapp.com/api/admin', creds)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                history.push('/admin_access')
            })
            .catch(err => console.log(err))
    }

    const passHandler = e => {
        setPass(e.target.value)
    }

    const viewSite = () => {
        history.push('/')
    }
    // return (
    //     <div>
    //         <h2>Admin Login</h2>
            // <form onSubmit={e => login(e)}>
            //     <input type='password' placeholder='password' value={pass} onChange={e => passHandler(e)} />
            // </form>
    //         <button onClick={viewSite}>View Site</button>
    //     </div>
    // )
    return (
        <body className={css({
            color: 'rgb(65, 79, 87)',
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: '14pt',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.2rem',
            textTransform: 'uppercase',
            boxSizing: 'border-box'
        })}>
            <div className={css({
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                // perspective: '1000px',
                // position: 'relative',
                // minHeight: '100%',
                zIndex: 2,
                // padding: '1.5rem',
                // height: '94.72vh',
                height: '100vh',
                background: `${styles.main_background_color}`
            })}>
                {forgot ? <ForgotPasswordPopup securityQuestion={securityQuestion} setForgot={setForgot} history={history} /> : null}
                <section className={css({
                    transformOrigin: '50% 50%',
                    transform: 'rotateX(0deg)',
                    cursor: 'default',
                    maxWidth: '480px',
                    width: '100%',
                    opacity: 0.95,
                    // position: 'relative',
                    // textAlign: 'center',
                    transition: 'opacity 1s ease 0s, transform 1s ease 0s',
                    padding: '3rem 3rem 3rem',
                    borderRadius: '4px',
                    // height: '575px',
                    backgroundColor: `${styles.card_background_color}`,
                    '@media (max-width: 600px)': {
                        padding: '3rem 1.5rem',
                    },
                    '@media (max-width: 550px)': {
                        padding: '3rem .5rem',
                        width: '90%',
                        // height: '575px'
                    },
                    '@media (max-width: 500px)': {
                        padding: '3rem 0rem',
                        width: '85%'
                    },
                    '@media (max-width: 470px)': {
                        // height: '525px'
                    },
                    '@media (max-width: 400px)': {
                        // height: '480px'
                    },
                    '@media (max-width: 385px)': {
                        // height: '450px'
                    },
                })}>
                    <header className={css({
                        display: 'block',
                        verticalAlign: 'baseline',
                        margin: '0px',
                        padding: '0px',
                        borderWidth: '0px',
                        borderStyle: 'initial',
                        borderColor: 'initial',
                        borderImage: 'initial',
                        font: 'inherit'
                    })}>
                        <h1 className={css({
                            fontSize: '3.5rem',
                            letterSpacing: '0.22rem',
                            margin: '0px 0px .525rem',
                            fontWeight: 100,
                            color: `${styles.display_name_color}`,
                            // color: 'rgb(65, 79, 87)',
                            // fontFamily: "'Parisienne', cursive",
                            fontFamily: "'Great Vibes', cursive",
                            // fontFamily: "'Sacramento', cursive",
                            // fontFamily: "'Dancing Script', cursive",
                            // fontFamily: "'Indie Flower', cursive",
                            // fontFamily: "'Rock Salt', cursive", /* favorite */
                            // fontFamily: "'Amatic SC', cursive",
                            textTransform: 'none',
                            '-webkit-touch-callout': 'none',
                                '-webkit-user-select': 'none',
                                '-khtml-user-select': 'none',
                                '-moz-user-select': 'none',
                                '-ms-user-select': 'none',
                                'user-select': 'none',
                            '@media (max-width: 505px)': {
                                fontSize: '3.1rem'
                            },
                            '@media (max-width: 470px)': {
                                fontSize: '2.1rem'
                            },
                            '@media (max-width: 350px)': {
                                fontSize: '1.8rem'
                            },
                        })}>
                            {/* Marysa <span className={css({ color: '#41cc66'})}>Garcia</span> */}
                            {`Sign In`}
                        </h1>
                        <form onSubmit={e => login(e)}>
                            <input type='password' placeholder='password' value={pass} onChange={e => passHandler(e)} className={css({
                                height: '25px',
                                width: '35%',
                                minWidth: '150px',
                                borderRadius: '5px',
                                border: 'none',
                                textAlign: 'center',
                                outline: 'none',
                                color: `${styles.icon_color_hover}`,
                                fontWeight: 'bold',
                                "::placeholder" : {
                                    color: `${styles.profile_picture_border_color}`,
                                    textTransform: 'uppercase',
                                    fontWeight: '300',
                                    letterSpacing: '1.5px'
                                }
                            })} />
                        </form>
                        <div onClick={() => setForgot(true)} className={css({
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '.6rem',
                            marginTop: '15px',
                            justifyContent: 'center',
                            transition: '.4s',
                            "&:hover" : {
                                color: `${styles.view_gallery_text_color_hover}`,
                                cursor: 'pointer'
                            }
                        })}>
                            <h4 className={css({
                                marginRight: '5px'
                            })}>Forgot Password?</h4>
                            <FaLock />
                        </div>
                        <ul onClick={viewSite} className={css({ 
                            margin: '15px 0px 0rem',
                            width: '100%',
                            marginLeft: '0px',
                            display: 'flex',
                            // cursor: 'default',
                            paddingLeft: '0px',
                            listStyle: 'none',
                            // marginBlockStart: '1rem',
                            // marginBlockEnd: '1rem',
                            // marginInlineStart: '0px',
                            // marginInlineEnd: '0px',
                            // paddingInlineStart: '40px',
                            textSlign: 'center',
                            '-webkit-touch-callout': 'none',
                            '-webkit-user-select': 'none',
                            '-khtml-user-select': 'none',
                            '-moz-user-select': 'none',
                            '-ms-user-select': 'none',
                            'user-select': 'none',
                            
                        })}> 
                            <li className={css({
                                margin: '0 auto',
                                paddingLeft: '0px',
                                verticalAlign: 'middle',
                                padding: '0px 0px 0px 0.75rem',
                                display: 'list-item',
                                textAlign: '-webkit-match-parent',
                                '@media (max-width: 385px)': {
                                    padding: '0px 0px 0px 0px'  
                                },
                            })}>
                                <Link className={css({
                                    '-webkit-appearance': 'none',
                                    display: 'inline-block',
                                    height: '2.75rem',
                                    lineHeight: '2.75rem',
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    whiteSpace: 'nowrap',
                                    color: `${styles.view_gallery_text_color} !important`,
                                    transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                    padding: '0px 1.5rem',
                                    borderRadius: '4px',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: `${styles.view_gallery_border_color}`,
                                    borderImage: 'initial',
                                    textDecoration: 'none',
                                    "&:hover": {
                                        color: `${styles.view_gallery_text_color_hover} !important`,
                                        border: `1px solid ${styles.view_gallery_border_color_hover} !important`
                                        // color: '#648f63 !important',
                                        // border: '1px solid #648f63 !important'
                                    },
                                    '@media (max-width: 470px)': {
                                        width: '75%',
                                        margin: '0 auto',
                                        fontSize: '.9rem',
                                    }
                                })}>View Site</Link>
                            </li>
                        </ul>
                        
                </header>
                </section>
                <footer className={css({
                    zIndex: 1,
                    alignSelf: 'flex-end',
                    width: '100%',
                    color: `${styles.footer_color}`,
                    cursor: 'default',
                    textAlign: 'center',
                    padding: '1.5rem 0px 0px',
                    display: 'block',
                    verticalAlign: 'baseline',
                    margin: '0px',
                    borderWidth: '0px',
                    borderStyle: 'initial',
                    borderColor: 'initial',
                    borderImage: 'initial',
                    font: 'inherit'
                })}>
                    <ul className={css({
                        fontSize: '0.9rem',
                        margin: '0px',
                        padding: '0px',
                        listStyle: 'none',
                        '-webkit-touch-callout': 'none',
                        '-webkit-user-select': 'none',
                        '-khtml-user-select': 'none',
                        '-moz-user-select': 'none',
                        '-ms-user-select': 'none',
                        'user-select': 'none',
                    })}>
                        <li className={css({
                            borderLeft: '0px',
                            display: 'inline-block',
                            lineHeight: 1,
                            margin: '0px 0px 0px 0.45rem',
                            padding: '0px 0px 0px 0.85rem',
                        })}>
                            <span>©</span>{`${styles.footer}`}
                        </li>
                        <li className={css({
                            display: 'inline-block',
                            lineHeight: 1,
                            margin: '0px 0px 0px 0.45em',
                            padding: '0px 0px 0px 0.85rem',
                            borderLeft: `1px solid ${styles.footer_line_color}`
                        })}>
                            {`${styles.footer_year}`}
                        </li>
                    </ul>
                </footer>
            </div>
        </body>
    )
}
