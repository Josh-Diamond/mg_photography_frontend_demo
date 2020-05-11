import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
import { styles } from '../Styles'
import { AiFillPicture } from 'react-icons/ai'
import imagePreviewPopup from '../components/ImagePreviewPopup'
import ImagePreviewPopup from '../components/ImagePreviewPopup'
import axiosWithAuth from '../components/axiosWIthAuth'
import axios from 'axios'
import ResetSuccess from '../components/ResetSuccess'
import MatchFields from '../components/MatchFields'
import ResetFailure from '../components/ResetFailure'
import PassRequiredFields from '../components/PassRequiredFields'
import { TiArrowBack } from 'react-icons/ti'

export default function ResetPassword({ history }) {
    const [match, setMatch] = useState(false)
    const [resetSuccess, setResetSuccess] = useState(false)
    const [resetFailure, setResetFailure] = useState(false)
    const [validation, setValidation] = useState(false)

    const [formData, setFormData] = useState({
        password: '',
        repassword: ''
    })
    
    useEffect(() => {
        setPassword({username: "Marysa", password: formData.password})
    },[formData])

    const [password, setPassword] = useState(null)

    const formHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        if(formData.password === '' || formData.repassword === ''){
            setValidation(true)
        } 
        if(formData.password === formData.repassword){
            // setPassword({password: formData.password})
                e.preventDefault()
                axiosWithAuth()
                    .delete('https://mg-photography-backend.herokuapp.com/api/user/Marysa')
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
                axiosWithAuth()
                    .post('https://mg-photography-backend.herokuapp.com/api/user/', password)
                    .then(res => setResetSuccess(true))
                    .catch(err => setResetFailure(true))
                }
        if(formData.password !== '' && formData.repassword !== '' && formData.password !== formData.repassword) {
            setMatch(true)
        }
    }
    
    const goBack = () => {
        history.goBack()
    }
    return (
        <>
        <div onClick={goBack} className={css({
                        color: '#e6e6e6',
                        transition: '.4s',
                        textDecoration: 'none',
                        position: 'absolute',
                        display: 'flex',
                        marginTop: '10px',
                        cursor: 'pointer',
                        "&:hover": {
                            color: '#41cc66',
                        }
                    })}>
                <TiArrowBack className={css({
                    marginLeft: '10px',
                    fontSize: '2.5rem'
                })} />
                </div>

        <div className={css({
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)',
            '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
            })}>
                { validation ? <PassRequiredFields setValidation={setValidation} formData={formData} /> : null}
                { match ? <MatchFields setMatch={setMatch} setFormData={setFormData} /> : null}
                { resetFailure ? <ResetFailure setResetFailure={setResetFailure} /> : null}
                { resetSuccess ? <ResetSuccess setResetSuccess={setResetSuccess} history={history} /> : null }
                {/* <h1 className={css({
                     color: '#41cc66',
                     fontFamily: "'Great Vibes', cursive",
                     fontSize: '5rem',
                     textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                     paddingTop: '25px',
                     '@media (max-width: 550px)': {
                         fontSize: '3rem'
                     }
                })}>
                    Add Photo
                </h1> */}
                {/* test */}
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
                        width: '95%'
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
                    '@media (max-width: 450px)': {
                        overflowY: 'scroll',
                        paddingTop: '35px',
                        paddingBottom: '0px'
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
                            paddingBottom: '5px',
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
                            {`Password Reset`}
                        </h1>
                        <form onSubmit={submitHandler} className={css({
                            maxWidth: '350px',
                            // border: '1px solid red',
                            margin: '0 auto',
                            // '@media (max-width: 450px)': {
                            //     padding: '0 10px'
                            // },
                        })} >
                            {/* Password */}
                            <div className={css({
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                margin: '5px 0',
                                '@media (max-width: 450px)': {
                                    flexDirection: 'column',
                                    padding: '5px 10px'
                                },
                            })}>
                                <div className={css({
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                })}>
                                    <label htmlFor='password' className={css({
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px',
                                        '@media (max-width: 450px)': {
                                            alignSelf: 'flex-start',
                                            paddingBottom: '5px'
                                        },
                                    })}>Password <span className={css({
                                        color: '#41cc66'
                                    })}>*</span> </label>
                                    
                                </div>
                                <input type='password' placeholder='enter password' value={formData.password} id='password' name='password' onChange={formHandler} className={css({
                                    height: '25px',
                                    width: '60%',
                                    minWidth: '150px',
                                    borderRadius: '5px',
                                    border: 'none',
                                    textAlign: 'center',
                                    outline: 'none',
                                    color: `${styles.icon_color_hover}`,
                                    fontWeight: 'bold',
                                    '@media (max-width: 450px)': {
                                        width: '100%'
                                    },
                                    '@media (min-width: 450px)': {
                                        marginLeft: '-230px'
                                    },
                                    "::placeholder" : {
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px'
                                    }
                                })} />
                            </div>
                            {/* Re-enter Password */}
                            <div className={css({
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                margin: '5px 0',
                                '@media (max-width: 450px)': {
                                    flexDirection: 'column',
                                    padding: '5px 10px'
                                },
                            })}>
                                <div className={css({
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                })}>
                                    <label htmlFor='repassword' className={css({
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px',
                                        '@media (max-width: 450px)': {
                                            alignSelf: 'flex-start',
                                            paddingBottom: '5px'
                                        },
                                    })}>Password <span className={css({
                                        color: '#41cc66'
                                    })}>*</span> </label>
                                    
                                </div>
                                <input type='password' placeholder='re-enter password' value={formData.repassword} id='repassword' name='repassword' onChange={formHandler} className={css({
                                    height: '25px',
                                    width: '60%',
                                    minWidth: '150px',
                                    borderRadius: '5px',
                                    border: 'none',
                                    textAlign: 'center',
                                    outline: 'none',
                                    color: `${styles.icon_color_hover}`,
                                    fontWeight: 'bold',
                                    '@media (max-width: 450px)': {
                                        width: '100%'
                                    },
                                    '@media (min-width: 450px)': {
                                        marginLeft: '-230px'
                                    },
                                    "::placeholder" : {
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px'
                                    }
                                })} />
                            </div>
                        </form>
                        {/* <ul className={css({ 
                            margin: '35px 0px 0rem',
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
                            
                        </ul> */}
                        <ul onClick={submitHandler} className={css({ 
                            margin: '20px 0px 0rem',
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
                                <div className={css({
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
                                        marginBottom: '20px'
                                    }
                                })}>SUBMIT</div>
                            </li>
                        </ul>
                </header>
                </section>
                {/* end test */}
        </div>
        </>
    )
}
