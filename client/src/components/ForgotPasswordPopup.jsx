import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
import { styles } from '../Styles'
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai'

export default function ForgotPasswordPopup({ history, setForgot, securityQuestion }) {
    const success = () => {
        // setForgot(false)
    }
    const [answer, setAnswer] = useState({"security_question": securityQuestion, "security_question_answer": ''})
    const [incorrect, setIncorrect] = useState(false)
    const answerHandler = e => {
        setAnswer({...answer, security_question_answer: e.target.value})
    }
   
    const catchHandler = error => {
        console.log(error)
        setIncorrect(true)
    }
    
    const tryAgain = e => {
        setForgot(false)
        setForgot(true)
        setAnswer({...answer, security_question_answer: ''})
        setIncorrect(false)
    }

    const correct = response => {
        localStorage.setItem('token', response.data.token)
        history.push('/reset_password')
    }

    const submitAnswer = e => {
        e.preventDefault()
        axios
            .post('https://mg-photography-backend.herokuapp.com/api/security/reset_password', answer)
            .then(res => correct(res))
            .catch(err => catchHandler(err))
    }

    console.log('answerr', answer)
    return (
        <div className={css({
            position: 'absolute',
            zIndex: 7,
            color: 'darkred',
            width: '100vw',
            height: '100vh',
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom: 0,
            // margin: 'auto',
            backgroundColor: 'rgba(0,0,0, 0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        })}>
            <div className={css({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '2%',
                // paddingTop: '1%',
                backgroundColor: 'white',
                maxWidth: '800px',
                // width: '80%',
                flexWrap: 'wrap',
                // minHeight: '100px',
                borderRadius: '5px',
                letterSpacing: '0.15rem',
                backgroundColor: '#110C11',
                color: '#e6e6e6',
                border: '2px solid #e6e6e6'
                // border: '2px solid #515E66'
            })}>
            {incorrect ? 
            <>
            <div className={css({
                display: 'flex',
                alignItems: 'center'
            })}>
                <AiOutlineClose className={css({
                    marginRight: '10px',
                    fontSize: '1.4rem',
                    color: '#41cc66'
                })} />
                <p className={css({
                    letterSpacing: '5px'
                })}>Wrong Answer</p>
            </div>
            <ul onClick={tryAgain} className={css({ 
                            margin: '10px 0px 0rem',
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
                            textAlign: 'center',
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
                                // padding: '0px 0px 0px 0.75rem',
                                display: 'list-item',
                                textAlign: '-webkit-match-parent',
                                // '@media (max-width: 385px)': {
                                //     padding: '0px 0px 0px 0px'  
                                // },
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
                                    color: '#e6e6e6',
                                    transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                    padding: '0px 1.5rem',
                                    borderRadius: '4px',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: '#e6e6e6',
                                    borderImage: 'initial',
                                    textDecoration: 'none',
                                    // width: '35px',
                                    "&:hover": {
                                        color: `${styles.view_gallery_text_color_hover} !important`,
                                        border: `1px solid ${styles.view_gallery_border_color_hover} !important`
                                        // color: '#648f63 !important',
                                        // border: '1px solid #648f63 !important'
                                    },
                                    // '@media (max-width: 470px)': {
                                    //     width: '75%',
                                    //     margin: '0 auto',
                                    //     fontSize: '.9rem',
                                    // }
                                })}>TRY AGAIN</div>
                            </li>
                        </ul>
            </>
             :
            <>
            <h2>{securityQuestion}</h2>
            <input placeholder='Answer' type='password' onChange={answerHandler} value={answer.security_question_answer} className={css({
                    width: '80%',
                    height: '25px',
                    borderRadius: '5px',
                    border: 'none',
                    textAlign: 'center',
                    outline: 'none',
                    color: `${styles.icon_color_hover}`,
                    fontWeight: 'bold',
                    // margin: '0 auto',
                    margin: '6% auto',
                    
                    "::placeholder": {
                        textAlign: 'center',
                        color: `${styles.profile_picture_border_color}`,
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        letterSpacing: '1.5px'
                    }
                })} />
                {/* button test */}
                <div className={css({
                display: 'flex',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '0 auto'
                })}>

            
                <ul onClick={submitAnswer} className={css({ 
                            // margin: '10px 0px 0rem',
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
                            textAlign: 'center',
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
                                // padding: '0px 0px 0px 0.75rem',
                                display: 'list-item',
                                textAlign: '-webkit-match-parent',
                                // '@media (max-width: 385px)': {
                                //     padding: '0px 0px 0px 0px'  
                                // },
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
                                    color: '#e6e6e6',
                                    transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                    padding: '0px 1.5rem',
                                    borderRadius: '4px',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: '#e6e6e6',
                                    borderImage: 'initial',
                                    textDecoration: 'none',
                                    // width: '35px',
                                    "&:hover": {
                                        color: `${styles.view_gallery_text_color_hover} !important`,
                                        border: `1px solid ${styles.view_gallery_border_color_hover} !important`
                                        // color: '#648f63 !important',
                                        // border: '1px solid #648f63 !important'
                                    },
                                    // '@media (max-width: 470px)': {
                                    //     width: '75%',
                                    //     margin: '0 auto',
                                    //     fontSize: '.9rem',
                                    // }
                                })}>SUBMIT</div>
                            </li>
                        </ul>
                        <ul onClick={() => setForgot(false)} className={css({ 
                            // margin: '10px 0px 0rem',
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
                            textAlign: 'center',
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
                                padding: '0px 0px 0px 1rem',
                                display: 'list-item',
                                textAlign: '-webkit-match-parent',
                                // '@media (max-width: 385px)': {
                                //     padding: '0px 0px 0px 0px'  
                                // },
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
                                    color: '#e6e6e6',
                                    transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                    padding: '0px 1.5rem',
                                    borderRadius: '4px',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: '#e6e6e6',
                                    borderImage: 'initial',
                                    textDecoration: 'none',
                                    // width: '35px',
                                    "&:hover": {
                                        color: `${styles.view_gallery_text_color_hover} !important`,
                                        border: `1px solid ${styles.view_gallery_border_color_hover} !important`
                                        // color: '#648f63 !important',
                                        // border: '1px solid #648f63 !important'
                                    },
                                    // '@media (max-width: 470px)': {
                                    //     width: '75%',
                                    //     margin: '0 auto',
                                    //     fontSize: '.9rem',
                                    // }
                                })}>CLOSE</div>
                            </li>
                        </ul>
                        </div>
                {/* end button test */}
                </>
                            }
            </div>
        </div>
    )
}