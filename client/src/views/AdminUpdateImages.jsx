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
import ProfilePreview from '../components/ProfilePreview'
import ViewAllPreview from '../components/ViewAllPreview'
import ModelingPreview from '../components/ModelingPreview'
import PhotographyPreview from '../components/PhotographyPreview'
import ArtPreview from '../components/ArtPreview'
import SaveSuccess from '../components/SaveSuccess'
import SecurityFailure from '../components/SecurityFailure'

export default function AdminUpdateImages({ history }) {
    const [loading, setLoading] = useState(true)
    const [profilePreview, setProfilePreview] = useState(false)
    const [viewAllPreview, setViewAllPreview] = useState(false)
    const [modelingPreview, setModelingPreview] = useState(false)
    const [photographyPreview, setPhotographyPreview] = useState(false)
    const [artPreview, setArtPreview] = useState(false)
    const [saveSuccess, setSaveSuccess] = useState(false)
    const [securityFailure, setSecurityFailure] = useState(false)
    const [validation, setValidation] = useState(false)

    const [formData, setFormData] = useState({
       profile_picture_url: '',
       view_all_picture_url: '',
       modeling_picture_url: '',
       photography_picture_url: '',
       art_picture_url: ''
    })

    useEffect(() => {
        axios
            .get('https://mg-photography-backend-demo.herokuapp.com/api/profile/1')
            .then(res => dataFetch(res))
            .catch(err => console.log(err))
    },[])

    const dataFetch = response => {
        setFormData({...response.data})
        setLoading(false)
    }
    const formHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault()
        axiosWithAuth()
            .patch('https://mg-photography-backend-demo.herokuapp.com/api/profile/1', formData)
            .then(res => setSaveSuccess(true))
            .catch(err => setSecurityFailure(true))
        }

    if(loading) {
        return (

        

            <div className={css({
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
                background: "radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)"
            })}>
                <h1 className={css({
                    color: '#41cc66',
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: '7rem',
                    textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                    '@media (max-width: 450px)': {
                        fontSize: '5rem'
                    },
                })}>Loading...</h1>
            </div>
        )
    }
    if (loading === false) {
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
                { securityFailure ? <SecurityFailure setSecurityFailure={setSecurityFailure} history={history} /> : null}
                { saveSuccess ? <SaveSuccess setSaveSuccess={setSaveSuccess} history={history} /> : null }
                { profilePreview ? <ProfilePreview setProfilePreview={setProfilePreview} image={formData.profile_picture_url} /> : null}
                { viewAllPreview ? <ViewAllPreview setViewAllPreview={setViewAllPreview} image={formData.view_all_picture_url} /> : null}
                { modelingPreview ? <ModelingPreview setModelingPreview={setModelingPreview} image={formData.modeling_picture_url} /> : null}
                { photographyPreview ? <PhotographyPreview setPhotographyPreview={setPhotographyPreview} image={formData.photography_picture_url} /> : null}
                { artPreview ? <ArtPreview setArtPreview={setArtPreview} image={formData.art_picture_url} /> : null}

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
                            {`Images`}
                        </h1>
                        <form onSubmit={submitHandler} className={css({
                            maxWidth: '350px',
                            // border: '1px solid red',
                            margin: '0 auto',
                            // '@media (max-width: 450px)': {
                            //     padding: '0 10px'
                            // },
                        })} >
                            {/* Profile Picture URL */}
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
                                    <label htmlFor='profile_picture_url' className={css({
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px',
                                        '@media (max-width: 450px)': {
                                            alignSelf: 'flex-start',
                                            paddingBottom: '5px'
                                        },
                                    })}>Profile Picture <span className={css({
                                        color: '#41cc66'
                                    })}>*</span> </label>
                                    <AiFillPicture onClick={() => setProfilePreview(true)} className={css({
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
                                <input type='text' placeholder='image url' id='profile_picture_url' name='profile_picture_url' value={formData.profile_picture_url} onChange={formHandler} className={css({
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
                            <AiFillPicture onClick={() => setProfilePreview(true)} className={css({
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
                                    <label htmlFor='view_all_picture_url' className={css({
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px',
                                        '@media (max-width: 450px)': {
                                            alignSelf: 'flex-start',
                                            paddingBottom: '5px'
                                        },
                                    })}>View All <span className={css({
                                        color: '#41cc66'
                                    })}>*</span> </label>
                                    <AiFillPicture onClick={() => setViewAllPreview(true)} className={css({
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
                                <input type='text' placeholder='image url' id='view_all_picture_url' name='view_all_picture_url' value={formData.view_all_picture_url} onChange={formHandler} className={css({
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
                            <AiFillPicture onClick={() => setViewAllPreview(true)} className={css({
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
                                    <label htmlFor='modeling_picture_url' className={css({
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px',
                                        '@media (max-width: 450px)': {
                                            alignSelf: 'flex-start',
                                            paddingBottom: '5px'
                                        },
                                    })}>Modeling <span className={css({
                                        color: '#41cc66'
                                    })}>*</span> </label>
                                    <AiFillPicture onClick={() => setModelingPreview(true)} className={css({
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
                                <input type='text' placeholder='image url' id='modeling_picture_url' name='modeling_picture_url' value={formData.modeling_picture_url} onChange={formHandler} className={css({
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
                            <AiFillPicture onClick={() => setModelingPreview(true)} className={css({
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
                                    <label htmlFor='photography_picture_url' className={css({
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px',
                                        '@media (max-width: 450px)': {
                                            alignSelf: 'flex-start',
                                            paddingBottom: '5px'
                                        },
                                    })}>Photography <span className={css({
                                        color: '#41cc66'
                                    })}>*</span> </label>
                                    <AiFillPicture onClick={() => setPhotographyPreview(true)} className={css({
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
                                <input type='text' placeholder='image url' id='photography_picture_url' name='photography_picture_url' value={formData.photography_picture_url} onChange={formHandler} className={css({
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
                            <AiFillPicture onClick={() => setPhotographyPreview(true)} className={css({
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
                                    <label htmlFor='art_picture_url' className={css({
                                        color: `${styles.profile_picture_border_color}`,
                                        textTransform: 'uppercase',
                                        fontWeight: '300',
                                        letterSpacing: '1.5px',
                                        '@media (max-width: 450px)': {
                                            alignSelf: 'flex-start',
                                            paddingBottom: '5px'
                                        },
                                    })}>Art <span className={css({
                                        color: '#41cc66'
                                    })}>*</span> </label>
                                    <AiFillPicture onClick={() => setArtPreview(true)} className={css({
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
                                <input type='text' placeholder='image url' id='art_picture_url' name='art_picture_url' value={formData.art_picture_url} onChange={formHandler} className={css({
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
                            <AiFillPicture onClick={() => setArtPreview(true)} className={css({
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
                                })}>SAVE</div>
                            </li>
                        </ul>
                </header>
                </section>
                {/* end test */}
        </div>
        </>
    )
}
}
