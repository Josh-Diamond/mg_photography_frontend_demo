import React, { useState } from 'react'
import { css } from 'emotion'
import { styles } from '../Styles'
import { AiFillPicture } from 'react-icons/ai'
import ImagePreviewPopup from '../components/ImagePreviewPopup'
import axiosWithAuth from '../components/axiosWIthAuth'
import EditSuccessPopup from '../components/EditSuccessPopup'
import EditFailure from '../components/EditFailure'
import RequiredFields from '../components/RequiredFields'
import { Link } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'

export default function AdminPhotosAdd({ history, editID, editPhoto }) {
    const [imagePreview, setImagePreview] = useState(false)
    const [ editSuccess, setEditSuccess] = useState(false)
    const [ editFailure, setEditFailure] = useState(false)
    const [validation, setValidation] = useState(false)
    const [formData, setFormData] = useState( editPhoto || {
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
            .patch(`https://mg-photography-backend-demo.herokuapp.com/api/pictures/${editID}`, formData)
            .then(res => setEditSuccess(true))
            .catch(err => setEditFailure(true))
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
                { editFailure ? <EditFailure setEditFailure={setEditFailure} history={history} /> : null}
                { editSuccess ? <EditSuccessPopup setEditSuccess={setEditSuccess} history={history} /> : null }
                { imagePreview ? <ImagePreviewPopup setImagePreview={setImagePreview} image={formData.image_url} /> : null}
               
                <section className={css({
                    transformOrigin: '50% 50%',
                    transform: 'rotateX(0deg)',
                    cursor: 'default',
                    maxWidth: '480px',
                    width: '100%',
                    opacity: 0.95,
                    transition: 'opacity 1s ease 0s, transform 1s ease 0s',
                    padding: '3rem 3rem 3rem',
                    borderRadius: '4px',
                    backgroundColor: `${styles.card_background_color}`,
                    '@media (max-width: 600px)': {
                        padding: '3rem 1.5rem',
                    },
                    '@media (max-width: 550px)': {
                        padding: '3rem .5rem',
                        width: '90%',
                    },
                    '@media (max-width: 500px)': {
                        padding: '3rem 0rem',
                        width: '95%'
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
                            fontFamily: "'Great Vibes', cursive",
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

                            {`Edit Photo`}
                        </h1>
                        <form onSubmit={submitHandler} className={css({
                            maxWidth: '350px',
                            margin: '0 auto',
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
                                fontSize: '1.21rem',
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
                                <input type='text' value={formData.image_url} placeholder='image url' id='image_url' name='image_url' onChange={formHandler} className={css({
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
                                <select id="category" required name="category" placeholder='category' onChange={formHandler} value={formData.category} className={css({
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
                                <input type='text' placeholder='date' value={formData.date} id='date' name='date' onChange={formHandler} className={css({
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
                                <input type='text' placeholder='description' value={formData.description} id='description' name='description' onChange={formHandler} className={css({
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
                                <input type='text' placeholder='location' value={formData.location} id='location' name='location' onChange={formHandler} className={css({
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
                                <input type='text' placeholder='photographer' value={formData.photographer} id='photographer' name='photographer' onChange={formHandler} className={css({
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
                                <input type='text' placeholder='event' value={formData.event} id='event' name='event' onChange={formHandler} className={css({
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
                                <input type='text' placeholder='tags' value={formData.tags} id='tags' name='tags' onChange={formHandler} className={css({
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
                        <ul onClick={submitHandler} className={css({ 
                            margin: '20px 0px 0rem',
                            width: '100%',
                            marginLeft: '0px',
                            display: 'flex',
                            paddingLeft: '0px',
                            listStyle: 'none',
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
                                    },
                                    '@media (max-width: 470px)': {
                                        width: '75%',
                                        margin: '0 auto',
                                        fontSize: '.9rem',
                                        marginBottom: '20px'
                                    }
                                })}>EDIT PHOTO</div>
                            </li>
                        </ul>
                </header>
                </section>
        </div>
        </>
    )
}
