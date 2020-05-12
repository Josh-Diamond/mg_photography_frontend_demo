import React, { useState } from 'react'
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

export default function AdminPhotosAdd({ history }) {
    const [imagePreview, setImagePreview] = useState(false)
    const [uploadSuccess, setUploadSuccess] = useState(false)
    const [uploadFailure, setUploadFailure] = useState(false)
    const [validation, setValidation] = useState(false)

    const [formData, setFormData] = useState({
       category: '',
       date: '',
       description: '',
       location: '',
       photographer: '',
       event: '',
       tags: '',
       image_url: '' 
    })

    const formHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        if(formData.image_url === '' || formData.category === ''){
            setValidation(true)
        } else {
        e.preventDefault()
        axiosWithAuth()
            .post('https://mg-photography-backend-demo.herokuapp.com/api/pictures/', formData)
            .then(res => setUploadSuccess(true))
            .catch(err => setUploadFailure(true))
        }
    }

    return (
        <>
        <Link to='/admin_access/manage_photos' className={css({
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
                            {`Add Photo`}
                        </h1>
                        <form onSubmit={submitHandler} className={css({
                            maxWidth: '350px',
                            // border: '1px solid red',
                            margin: '0 auto',
                            // '@media (max-width: 450px)': {
                            //     padding: '0 10px'
                            // },
                        })} >
                            {/* Image URL */}
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
                                    <label htmlFor='image_url' className={css({
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px',
                                        '@media (max-width: 450px)': {
                                            alignSelf: 'flex-start',
                                            paddingBottom: '5px'
                                        },
                                    })}>Image Url <span className={css({
                                        color: '#41cc66'
                                    })}>*</span> </label>
                                    <AiFillPicture onClick={() => setImagePreview(true)} className={css({
                                // marginRight: '-100px',
                                // position: 'relative',
                                // right: '70px',
                                fontSize: '1.21rem',
                                // border: '1px solid red',
                                color: `#7d6247`,
                                transition: '.4s',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: `${styles.icon_color_hover}`,
                                },
                                '@media (min-width: 451px)': {
                                    opacity: '0',
                                    transition: 'none'
                                }
                            })} />
                                </div>
                                <input type='text' placeholder='image url' id='image_url' name='image_url' onChange={formHandler} className={css({
                                    height: '25px',
                                    width: '35%',
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
                            <AiFillPicture onClick={() => setImagePreview(true)} className={css({
                                marginRight: '-100px',
                                position: 'relative',
                                right: '70px',
                                fontSize: '1.21rem',
                                color: `#7d6247`,
                                transition: '.4s',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: `${styles.icon_color_hover}`,
                                },
                                '@media (max-width: 450px)': {
                                    display: 'none',
                                    // transition: 'none'
                                }
                            })} />
                            </div>
                            {/* Category */}
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
                                <label htmlFor='category' className={css({
                                    color: `${styles.profile_picture_border_color}`,
                                    textTransform: 'uppercase',
                                    fontWeight: '300',
                                    letterSpacing: '1.5px',
                                    '@media (max-width: 450px)': {
                                        alignSelf: 'flex-start',
                                        paddingBottom: '5px'
                                    },
                                })}>Category <span className={css({
                                    color: '#41cc66'
                                })}>*</span> </label>
                                {/* <input type='text' placeholder='category' id='category' className={css({
                                    height: '25px',
                                    width: '35%',
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
                                    "::placeholder" : {
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px'
                                    }
                                })} /> */}
                                <select id="category" required name="category" placeholder='category' onChange={formHandler} className={css({
                                    height: '25px',
                                    width: '35%',
                                    appearance: 'none',
                                    background: 'white',
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
                                    "::placeholder" : {
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px'
                                    }
                                })}>
                                    <option value=''></option>
                                    <option value="modeling" className={css({
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px',
                                    })}>Modeling</option>
                                    <option value="photography" className={css({
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px'
                                    })}>Photography</option>
                                    <option value="art" className={css({
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px'
                                    })}>Art</option>
                                </select>
                            </div>
                            {/* Date */}
                            <div className={css({
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                margin: '5x 0',
                                '@media (max-width: 450px)': {
                                    flexDirection: 'column',
                                    padding: '5px 10px'
                                },
                            })}>
                                <label htmlFor='date' className={css({
                                    color: `${styles.profile_picture_border_color}`,
                                    textTransform: 'uppercase',
                                    fontWeight: '300',
                                    letterSpacing: '1.5px',
                                    '@media (max-width: 450px)': {
                                        alignSelf: 'flex-start',
                                        paddingBottom: '5px'
                                    },
                                })}>Date </label>
                                <input type='text' placeholder='date' id='date' name='date' onChange={formHandler} className={css({
                                    height: '25px',
                                    width: '35%',
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
                                    "::placeholder" : {
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px'
                                    }
                                })} />
                            </div>
                            {/* Description */}
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
                                <label htmlFor='description' className={css({
                                    color: `${styles.profile_picture_border_color}`,
                                    textTransform: 'uppercase',
                                    fontWeight: '300',
                                    letterSpacing: '1.5px',
                                    '@media (max-width: 450px)': {
                                        alignSelf: 'flex-start',
                                        paddingBottom: '5px'
                                    },
                                })}>Description </label>
                                <input type='text' placeholder='description' id='description' name='description' onChange={formHandler} className={css({
                                    height: '25px',
                                    width: '35%',
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
                                    "::placeholder" : {
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px'
                                    }
                                })} />
                            </div>
                            {/* Location */}
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
                                <label htmlFor='location' className={css({
                                    color: `${styles.profile_picture_border_color}`,
                                    textTransform: 'uppercase',
                                    fontWeight: '300',
                                    letterSpacing: '1.5px',
                                    '@media (max-width: 450px)': {
                                        alignSelf: 'flex-start',
                                        paddingBottom: '5px'
                                    },
                                })}>Location </label>
                                <input type='text' placeholder='location' id='location' name='location' onChange={formHandler} className={css({
                                    height: '25px',
                                    width: '35%',
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
                                    "::placeholder" : {
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px'
                                    }
                                })} />
                            </div>
                            {/* Photographer */}
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
                                <label htmlFor='photographer' className={css({
                                    color: `${styles.profile_picture_border_color}`,
                                    textTransform: 'uppercase',
                                    fontWeight: '300',
                                    letterSpacing: '1.5px',
                                    '@media (max-width: 450px)': {
                                        alignSelf: 'flex-start',
                                        paddingBottom: '5px'
                                    },
                                })}>Photographer </label>
                                <input type='text' placeholder='photographer' id='photographer' name='photographer' onChange={formHandler} className={css({
                                    height: '25px',
                                    width: '35%',
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
                                    "::placeholder" : {
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px'
                                    }
                                })} />
                            </div>
                            {/* Event */}
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
                                <label htmlFor='Event' className={css({
                                    color: `${styles.profile_picture_border_color}`,
                                    textTransform: 'uppercase',
                                    fontWeight: '300',
                                    letterSpacing: '1.5px',
                                    '@media (max-width: 450px)': {
                                        alignSelf: 'flex-start',
                                        paddingBottom: '5px'
                                    },
                                })}>Event </label>
                                <input type='text' placeholder='event' id='event' name='event' onChange={formHandler} className={css({
                                    height: '25px',
                                    width: '35%',
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
                                    "::placeholder" : {
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px'
                                    }
                                })} />
                            </div>
                            {/* Tags */}
                            <div className={css({
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                margin: '5px 0',
                                '@media (max-width: 450px)': {
                                    flexDirection: 'column',
                                    padding: '5px 10px',
                                    paddingBottom: '0px'
                                },
                            })}>
                                <label htmlFor='tags' className={css({
                                    color: `${styles.profile_picture_border_color}`,
                                    textTransform: 'uppercase',
                                    fontWeight: '300',
                                    letterSpacing: '1.5px',
                                    '@media (max-width: 450px)': {
                                        alignSelf: 'flex-start',
                                        paddingBottom: '5px'
                                    },
                                })}>Tags </label>
                                <input type='text' placeholder='tags' id='tags' name='tags' onChange={formHandler} className={css({
                                    height: '25px',
                                    width: '35%',
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
                                })}>ADD PHOTO</div>
                            </li>
                        </ul>
                </header>
                </section>
                {/* end test */}
        </div>
        </>
    )
}
