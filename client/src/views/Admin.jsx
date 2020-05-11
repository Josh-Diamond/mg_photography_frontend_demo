import React from 'react'
import { css } from 'emotion'
import PhotosCard from '../components/PhotosCard'
import UpdateCard from '../components/UpdateCard'
import { styles } from '../Styles'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

export default function Admin({ history }) {
    const logout = () => {
        localStorage.removeItem('token')
        history.push('/admin')
    }

    return (
        <div className={css({
            height: '100vh',
            width: '100vw',
            // backgroundColor: '#110C11',
            background: 'radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)',
            '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
        })}>
            <div className={css({
                position: 'fixed',
                zIndex: 7,
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: 'auto',
                backgroundColor: 'rgba(0,0,0, 0.3)',
            })}>
                <div>
                    <div className={css({
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        '@media (max-width: 900px)': {
                            display: 'none'
                        }
                    })}>
                        
                        <ul onClick={logout} className={css({ 
                            margin: '1%',
                            // width: '100%',
                            // marginLeft: '0px',
                            // display: 'flex',
                            // cursor: 'default',
                            // paddingLeft: '0px',
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
                                // margin: '0 auto',
                                // paddingLeft: '0px',
                                backroundColor: 'white',
                                // verticalAlign: 'middle',
                                // padding: '0px 0px 0px 0.75rem',
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
                                    color: '#e6e6e6',
                                    transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                    padding: '0px 1.5rem',
                                    borderRadius: '4px',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: 'transparent',
                                    borderImage: 'initial',
                                    textDecoration: 'none',
                                    fontSize: '1.5rem',
                                    fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                                    "&:hover": {
                                        color: `${styles.view_gallery_text_color_hover} !important`,
                                        // border: `1px solid ${styles.view_gallery_border_color_hover} !important`,
                                        backgroundColor: '#e6e6e6',
                                        // color: '#648f63 !important',
                                        border: `1px solid ${styles.view_gallery_text_color_hover}`
                                    },
                                    // '@media (max-width: 470px)': {
                                    //     width: '75%',
                                    //     margin: '0 auto',
                                    //     fontSize: '.9rem',
                                    // }
                                })}>
                                    <div className={css({
                                        display: 'flex',
                                        alignItems: 'center',
                                        '@media (max-width: 900px)': {
                                            // justifyContent: 'center',
                                        }
                                    })}>
                                    <FiLogOut className={css({
                                        marginRight: '7px',
                                        cursor: 'pointer',
                                        '@media (max-width: 900px)': {
                                            // margin: '0px',
                                            // marginTop: '7px',
                                        }
                                    })} />
                                    <p className={css({
                                        '@media (max-width: 900px)': {
                                            // display: 'none'
                                        }
                                    })}>Log Out</p>
                                    {/* <p>Log Out</p> */}
                                    </div>
                                    </Link>
                            </li>
                        </ul>
                    </div>
                
                    <div className={css({
                        display: 'flex',
                        height: '100vh',
                        alignItems: 'center',
                        // marginTop: '-80px',
                        justifyContent: 'space-evenly',
                        // border: '1px solid red',
                        '@media (max-width: 900px)': {
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            marginTop: '-20px'                        
                        },
                        '@media (min-width: 900px)': {
                            marginTop: '-75px'                 
                        },
                    })}>
                        <FiLogOut onClick={logout} className={css({
                            color: 'white',
                            fontSize: '1.5rem',
                            marginTop: '20px',
                            marginBottom: '-20px',
                            cursor: 'pointer',
                            transition: '.4s',
                            "&:hover" : {
                                color: `${styles.view_gallery_text_color_hover}`
                            },
                            '@media (min-width: 900px)': {
                                display: 'none'
                            }
                        })} />
                        <Link to='/admin_access/manage_photos' className={css({
                            textDecoration: 'none'
                        })}>
                            <PhotosCard />
                        </Link>
                        <Link to='/admin_access/update_site' className={css({
                            textDecoration: 'none'
                        })}>
                            <UpdateCard />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

// <div>
        //     <h2>Admin Access</h2>
        //     <button onClick={logout}>Logout</button>
        //     <ul>
        //         <li>Manage Photos - upload, edit, delete</li>
        //         <li>Custtomize Website - change profile picture and gallery album art</li>
        //     </ul>
        // </div>
