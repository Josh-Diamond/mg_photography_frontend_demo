import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
import { styles } from '../Styles'
import { AiFillPicture } from 'react-icons/ai'
import imagePreviewPopup from '../components/ImagePreviewPopup'
import ImagePreviewPopup from '../components/ImagePreviewPopup'
import axiosWithAuth from '../components/axiosWIthAuth'
import axios from 'axios'
import SuccessPopup from '../components/SuccessPopup'
import uploadFailure from '../components/UploadFailure'
import UploadFailure from '../components/UploadFailure'
import RequiredFields from '../components/RequiredFields'
import { Link } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { FaLock, FaQuestion } from 'react-icons/fa'

export default function AdminUpdateSecurity({ history }) {
    const [imagePreview, setImagePreview] = useState(false)
    const [uploadSuccess, setUploadSuccess] = useState(false)
    const [uploadFailure, setUploadFailure] = useState(false)
    const [validation, setValidation] = useState(false)

    // useEffect(e => {
    //     axios
    //         .get('https://mg-photography-backend.herokuapp.com/api/security/Marysa')
    //         .then(res => console.log('securityRes', res))
    //         .catch(err => console.log(err))
    //     // e.preventDefault()
    //     //         axiosWithAuth()
    //     //             .delete('https://mg-photography-backend.herokuapp.com/api/user/Marysa')
    //     //             .then(res => console.log(res))
    //     //             .catch(err => console.log(err))
    //     //         axiosWithAuth()
    //     //             .post('https://mg-photography-backend.herokuapp.com/api/user/', password)
    //     //             .then(res => console.log(res))
    //     //             .catch(err => console.log(err))
    // },[])

    const [formData, setFormData] = useState({
       security_question: '',
       security_question_answer: ''
    })

    // const formHandler = e => {
    //     setFormData({...formData, [e.target.name]: e.target.value})
    // }

    // const submitHandler = e => {
    //     if(formData.security_question === '' || formData.security_question_answer === ''){
    //         setValidation(true)
    //     } else {
    //     e.preventDefault()
    //     axiosWithAuth()
    //         .post('https://mg-photography-backend.herokuapp.com/api/pictures/', formData)
    //         .then(res => setUploadSuccess(true))
    //         .catch(err => setUploadFailure(true))
    //     }
    // }
    
    return (
        <>
        <Link to='/admin_access/update_site' className={css({
                        color: '#e6e6e6',
                        transition: '.4s',
                        textDecoration: 'none',
                        position: 'absolute',
                        display: 'flex',
                        marginTop: '10px',
                        "&:hover": {
                            color: '#41cc66',
                        }
                    })}>
                <TiArrowBack className={css({
                    marginLeft: '10px',
                    fontSize: '2.5rem'
                })} />
                </Link>

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
                { validation ? <RequiredFields setValidation={setValidation} formData={formData} /> : null}
                { uploadFailure ? <UploadFailure setUploadFailure={setUploadFailure} history={history} /> : null}
                { uploadSuccess ? <SuccessPopup setUploadSuccess={setUploadSuccess} history={history} /> : null }
                { imagePreview ? <ImagePreviewPopup setImagePreview={setImagePreview} image={formData.image_url} /> : null}
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
                            {`Security`}
                        </h1>

                        
                        <form className={css({
                            maxWidth: '350px',
                            // border: '1px solid red',
                            margin: '0 auto',
                            // '@media (max-width: 450px)': {
                            //     padding: '0 10px'
                            // },
                        })} >
                            <Link to='/reset_password' className={css({
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            // fontSize: '.6rem',
                            marginBottom: '15px',
                            textDecoration: 'none',
                            justifyContent: 'flex-start',
                            color: `${styles.profile_picture_border_color}`,
                            textTransform: 'uppercase',
                            fontWeight: '300',
                            letterSpacing: '1.5px',
                            transition: '.4s',
                            "&:hover" : {
                                color: `${styles.view_gallery_text_color_hover}`,
                                cursor: 'pointer'
                            }
                        })}>
                            <h4 className={css({
                                marginRight: '5px'
                            })}>• RESET PASSWORD</h4>
                            <FaLock />
                        </Link>
                        <Link to='security/question_answer' className={css({
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            // fontSize: '.6rem',
                            marginBottom: '15px',
                            textDecoration: 'none',
                            justifyContent: 'flex-start',
                            color: `${styles.profile_picture_border_color}`,
                            textTransform: 'uppercase',
                            fontWeight: '300',
                            letterSpacing: '1.5px',
                            transition: '.4s',
                            "&:hover" : {
                                color: `${styles.view_gallery_text_color_hover}`,
                                cursor: 'pointer'
                            }
                        })}>
                            <h4 className={css({
                                marginRight: '5px'
                            })}>• Question & Answer</h4>
                            <FaQuestion />
                        </Link>
                         </form>
                        
                </header>
                </section>
                {/* end test */}
        </div>
        </>
    )
}
