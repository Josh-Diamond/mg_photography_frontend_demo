import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { TiInfoLarge } from 'react-icons/ti'

export default function MobileNavPopup({ setOpenMenu, setPopup, rightPicture, leftPicture, selectedIndex }) {
    
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
            backgroundColor: 'rgba(0,0,0, 0)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (min-width: 901px)': {
                display: 'none'
            }
        })}>
            <div className={css({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                // border: '1px solid red',
                height: '100vh',
                width: '100vw',
            })}>
                <div className={css({
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '2%'
                })}>
                    <h2><TiInfoLarge onClick={() => setPopup(true)} className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer',
                        color: '#e6e6e6',
                        transition: '.4s',
                        "&:hover": {
                            color: '#41cc66',
                        }
                    })} /></h2>
                    <h2><AiOutlineMenu onClick={() => setOpenMenu(true)} className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer',
                        color: '#e6e6e6',
                        transition: '.4s',
                        "&:hover": {
                            color: '#41cc66',
                        }
                    })} /></h2>
                </div>
                <div className={css({
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '2%'
                })}>
                    <h2><IoIosArrowBack onClick={() => leftPicture(selectedIndex)} className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer',
                        color: '#e6e6e6',
                        transition: '.4s',
                        "&:hover": {
                            color: '#41cc66',
                        }
                    })} /></h2>
                    <h2><IoIosArrowForward onClick={() => rightPicture(selectedIndex)} className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer',
                        color: '#e6e6e6',
                        transition: '.4s',
                        "&:hover": {
                            color: '#41cc66',
                        }
                    })} /></h2>
                </div>
            </div>
        </div>
    )
}