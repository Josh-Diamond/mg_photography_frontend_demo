import React, { useState,useEffect } from 'react'
import { css } from 'emotion'
import ModelingCard from '../components/ModelingCard'
import PhotographyCard from '../components/PhotographyCard'
import ArtCard from '../components/ArtCard'
import { Link } from 'react-router-dom'
import ViewAllCard from '../components/ViewAllCard'
import axios from 'axios'
import { TiArrowBack } from 'react-icons/ti'

export default function Gallery({ history, setModelingGallery, setPhotographyGallery, setArtGallery }) {
    const [beStyles, setBeStyles] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        localStorage.removeItem('token')
        setModelingGallery(false)
        setPhotographyGallery(false)
        setArtGallery(false)
    },[])

    useEffect(() => {
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
        <>
        {/* <Link to='/admin_access/manage_photos' className={css({
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
                </Link> */}

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
                backgroundColor: 'rgba(0,0,0, 0.25)',
            })}>
                <Link to='/' className={css({
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
                    display: 'flex',
                    // border: '1px solid red',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: '100%',
                    flexDirection: 'column',
                    '@media (max-width: 950px)': {
                        flexDirection: 'column'
                    },
                })}>
                    <h2 className={css({
                        fontFamily: "'Great Vibes', cursive",
                        fontWeight: 'bold',
                        // marginLeft: '1%',
                        textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                        color: '#41cc66',
                        fontSize: '3rem',
                        // marginTop: '7px',
                        paddingBottom: '10px',
                        // borderBottom: '3px solid #e6e6e6',
                        // boxShadowBottom: '0px 0px 200px rgba(255, 255, 255, 1)',
                        borderRadius: '50%',
                        '@media (min-width: 900px)': {
                            fontSize: '6rem',
                            // marginBottom: '500px'
                        },
                        '@media (max-width: 600px)': {
                            marginTop: '5%'
                        },
                        '@media (max-width: 470px)': {
                            fontSize: '2rem'
                        },
                    })}>Gallery</h2>
                    <div className={css({
                        //  border: '1px solid purple',
                         overflowY: 'scroll',
                         width: '600px',
                         display: 'block',
                         '@media (min-width: 900px)': {
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100vw',
                            flexWrap: 'wrap',
                            overflowY: 'auto',
                            padding: '50px 0px',
                            justifyContent: 'space-evenly',
                            // border: '1px solid red',
                            // paddingTop: '-50px'
                            // width: '800px'
                            // position: 'relative',
                            // bottom: '150px'
                            
                         },
                         
                         '@media (max-width: 600px)': {
                            width: '500px'},
                        '@media (max-width: 470px)': {
                            width: '450px'
                        },
                        '@media (max-width: 470px)': {
                            width: '400px'
                        },
                        '@media (max-width: 400px)': {
                            width: '380px'
                        },
                        '@media (max-width: 350px)': {
                            width: '350px'
                        },
                        
                    })}>
                        <Link to='/gallery' className={css({
                            textDecoration: 'none',
                        })}><ViewAllCard image={beStyles.view_all_picture_url} /></Link>
                        <Link to='/gallery' onClick={() => setModelingGallery(true)} className={css({
                            textDecoration: 'none'
                        })}><ModelingCard image={beStyles.modeling_picture_url} /></Link>
                        <Link to='/gallery' onClick={() => setPhotographyGallery(true)} className={css({
                            textDecoration: 'none'
                        })}><PhotographyCard image={beStyles.photography_picture_url} /></Link>
                        <Link to='/gallery' onClick={() => setArtGallery(true)} className={css({
                            textDecoration: 'none'
                        })}><ArtCard image={beStyles.art_picture_url} /></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
}
