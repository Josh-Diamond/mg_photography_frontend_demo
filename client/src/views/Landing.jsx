import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import CreatedBy from '../components/CreatedBy'
import { styles } from '../Styles'
import axios from 'axios'

export default function Landing() {
    const [beStyles, setBeStyles] = useState({})
    const [loading, setLoading] = useState(true)
    const [createdBy, setCreatedBy] = useState(false)

    useEffect(() => {
        localStorage.removeItem('token')
        getStyles();
    },[])

    const getStyles = () => {
        axios
            .get('https://mg-photography-backend-demo.herokuapp.com/api/profile/1')
            .then(res => {
                setBeStyles(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
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

    if(loading === false) {
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
                {createdBy ? <CreatedBy setCreatedBy={setCreatedBy} /> : null}
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
                        height: '575px',
                        backgroundColor: `${styles.card_background_color}`,
                        '@media (max-width: 600px)': {
                            padding: '3rem 1.5rem',
                        },
                        '@media (max-width: 550px)': {
                            padding: '3rem .5rem',
                            width: '90%',
                            height: '575px'
                        },
                        '@media (max-width: 500px)': {
                            padding: '3rem 0rem',
                            width: '85%'
                        },
                        '@media (max-width: 470px)': {
                            height: '525px'
                        },
                        '@media (max-width: 400px)': {
                            height: '480px'
                        },
                        '@media (max-width: 385px)': {
                            height: '450px'
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
                            <span className={css({
                                position: 'relative',
                                display: 'block',
                                marginBottom: '1.5rem',
                                // '@media (max-width: 400px)': {
                                //     width: '100%',
                                //     maxWidth: '250px'
                                // },
                            })}>
                                <span className={css({
                                    boxSizing: 'border-box',
                                    display: 'block',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '-3rem',
                                    width: 'calc(100% + 6rem)',
                                    height: '1px',
                                    zIndex: -1,
                                    background: 'rgb(200, 204, 207)',
                                    border: `1px solid ${styles.profile_picture_line_color}`,
                                    '@media (max-width: 600px)': {
                                        width: 'calc(100% + 3rem)',
                                        left: '-1.5rem'
                                    },
                                    '@media (max-width: 550px)': {
                                        width: 'calc(100% + 1rem)',
                                        left: '-.5rem'
                                    },
                                    '@media (max-width: 500px)': {
                                        width: 'calc(100%)',
                                        left: '0rem'
                                    },
                                })} />
                                <img src={`${beStyles.profile_picture_url}.jpg`} alt='profile picture' className={css({
                                    maxWidth: '250px',
                                    display: 'block',
                                    // boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1.5rem',
                                    boxShadow: `${styles.card_background_color} 0px 0px 0px 1.5rem`,
                                    margin: '0px auto',
                                    borderRadius: '100%',
                                    '-webkit-touch-callout': 'none',
                                    '-webkit-user-select': 'none',
                                    '-khtml-user-select': 'none',
                                    '-moz-user-select': 'none',
                                    '-ms-user-select': 'none',
                                    'user-select': 'none',
                                    '@media (max-width: 400px)': {
                                        width: '200px',
                                        height: '200px'
                                    },
                                })} />
                            </span>
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
                                {`${styles.display_name}`}
                            </h1>
                            <p className={css({
                                margin: '0px 0px 1.5rem',
                                display: 'block',
                                marginBlockStart: '.5rem',
                                marginBlockEnd: '1.5rem',
                                marginInlineStart: '0px',
                                fontSize: '1rem',
                                marginInlineEnd: '0px',
                                fontWeight: 'lighter',
                                color: `${styles.sub_heading_color}`,
                                '-webkit-touch-callout': 'none',
                                '-webkit-user-select': 'none',
                                '-khtml-user-select': 'none',
                                '-moz-user-select': 'none',
                                '-ms-user-select': 'none',
                                'user-select': 'none',
                                '@media (max-width: 550px)': {
                                    fontSize: '.8rem'
                                },
                                '@media (max-width: 385px)': {
                                    fontSize: '.6rem'
                                }
                            })}>
                                Model <span className={css({
                                    color: `${styles.sub_heading_lines_color}`
                                })}>|</span> Photographer <span className={css({
                                    color: `${styles.sub_heading_lines_color}`
                                })}>|</span> Artist
                            </p>
                        </header>
                        <ul className={css({ 
                            margin: '0px 0px 1.5rem',
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
                                <Link to='/gallery_selection' className={css({
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
                                })}>View Gallery</Link>
                            </li>
                        </ul>
                        <footer className={css({
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
                            <ul className={css({
                                cursor: 'default',
                                paddingLeft: '0px',
                                marginTop: '-0.675rem',
                                listStyle: 'none',
                                margin: '0px 0px 1.5rem'
                            })}>
                                <li className={css({
                                    display: 'inline-block',
                                    padding: '0.675rem 0.5rem'
                                })}>
                                    <a href='https://instagram.com/marysa_alexis?igshid=1abwouwwzi9xt' className={css({
                                        position: 'relative',
                                        // display: 'block',
                                        width: '3.75rem',
                                        height: '3.75rem',
                                        lineHeight: '3.75rem',
                                        textAlign: 'center',
                                        textIndent: '.4rem',
                                        whiteSpace: 'nowrap',
                                        textDecoration: 'none',
                                        borderRadius: '100%',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderColor: `${styles.icon_border_color}`,
                                        // borderColor: '#C7CCCF',
                                        borderImage: 'initial',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        color: `${styles.icon_color}`,
                                        // color: '#C7CCCF',
                                        transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                        '&:hover': {
                                            color: `${styles.icon_color_hover} !important`,
                                            border: `1px solid ${styles.icon_border_color_hover} !important`
                                            // color: '#648f63 !important',
                                            // border: '1px solid #648f63 !important'
                                        },
                                        '@media (max-width: 385px)': {
                                            width: '3rem',
                                            height: '3rem' 
                                        }                         
                                    })}>
                                        <FaInstagram className={css({
                                            fontSize: '2rem',
                                            color: 'inherit'
                                        })} />
                                    </a>
                                </li>
                                <li className={css({
                                    display: 'inline-block',
                                    padding: '0.675rem 0.5rem',
                                })}>
                                    <a href='https://www.facebook.com/profile.php?id=100006888631286' className={css({
                                        position: 'relative',
                                        // display: 'block',
                                        width: '3.75rem',
                                        height: '3.75rem',
                                        lineHeight: '3.75rem',
                                        textAlign: 'center',
                                        textIndent: '.4rem',
                                        whiteSpace: 'nowrap',
                                        textDecoration: 'none',
                                        borderRadius: '100%',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderColor: `${styles.icon_border_color}`,
                                        borderImage: 'initial',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        color: `${styles.icon_color}`,
                                        transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                        '&:hover': {
                                            color: `${styles.icon_color_hover} !important`,
                                            border: `1px solid ${styles.icon_border_color_hover} !important`
                                            // color: '#648f63 !important',
                                            // border: '1px solid #648f63 !important'
                                        },
                                        '@media (max-width: 385px)': {
                                            width: '3rem',
                                            height: '3rem' 
                                        }                         
                                    })}>
                                        <FaFacebook className={css({
                                            fontSize: '2rem',
                                            color: 'inherit'
                                        })} />
                                    </a>
                                </li>
                                <li className={css({
                                    display: 'inline-block',
                                    padding: '0.675rem 0.5rem',
                                })}>
                                    <a href="mailto:marysaartisticintrigue@gmail.com" className={css({
                                        position: 'relative',
                                        // display: 'block',
                                        width: '3.75rem',
                                        height: '3.75rem',
                                        lineHeight: '3.75rem',
                                        textAlign: 'center',
                                        textIndent: '.4rem',
                                        whiteSpace: 'nowrap',
                                        textDecoration: 'none',
                                        borderRadius: '100%',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderColor: `${styles.icon_border_color}`,
                                        borderImage: 'initial',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        color: `${styles.icon_color}`,
                                        transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                        '&:hover': {
                                            color: `${styles.icon_color_hover} !important`,
                                            border: `1px solid ${styles.icon_border_color_hover} !important`
                                            // color: '#648f63 !important',
                                            // border: '1px solid #648f63 !important'
                                        },
                                        '@media (max-width: 385px)': {
                                            width: '3rem',
                                            height: '3rem' 
                                        }                         
                                    })}>
                                        <AiOutlineMail className={css({
                                            fontSize: '2rem',
                                            color: 'inherit'
                                        })} />
                                    </a>
                                </li>
                            </ul>
                        </footer>
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
                                <span onClick={() => setCreatedBy(true)}>©</span>{`${styles.footer}`}
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
    
}
// }
