import React from 'react'
import { css } from 'emotion'

export default function Thumbnail({ photo, image, index, setSelectedIndex, setSelected, mobile, setOpenMenu }) {
    const mobileSelector = () => {
        setSelectedIndex(index)
        setSelected({...photo, image_url: image})
        setOpenMenu(false)
    }

    const selector = () => {
        setSelectedIndex(index)
        setSelected({...photo, image_url: image})
    }


    if(mobile) {
    return (
        <div onClick={mobileSelector} className={ mobile ? css({
            cursor: 'pointer',
            boxSizing: 'border-box',
            opacity: 1,
            "&:hover": {
                opacity: 1
            },
            '@media (max-width: 1025px)': {
                padding: '4% 1%',
            },
        }) : css({
            cursor: 'pointer',
            boxSizing: 'border-box',
            opacity: .8,
            "&:hover": {
                opacity: 1
            },
            '@media (max-width: 1025px)': {
                padding: '4% 1%',
            },
        })}>
            <img src={`https://i.imgur.com/${image}.jpg`} className={ css({
                maxWidth: '200px',
                borderRadius: '5px',
                '-webkit-box-shadow': '0px 0px 20px 2px rgba(230,230,230,1)',
                '-moz-box-shadow': '0px 0px 20px 2px rgba(230,230,230,1)',
                boxShadow: '0px 0px 20px 2px rgba(230,230,230,1)',
                // border: '2px solid #e6e6e6',
                '@media (max-width: 1150px)': {
                    maxWidth: ' 280px'
                },
                '@media (max-width: 700px)': {
                    maxWidth: ' 250px'
                },
                '@media (max-width: 600px)': {
                    maxWidth: '98%'
                },
            })} />
        </div>
    ) 
 }
 
 else {
    return (
        <div onClick={selector} className={css({
            cursor: 'pointer',
            boxSizing: 'border-box',
            // border: '1px solid red',
            opacity: .8,
            padding: '5% 1%',
            "&:hover": {
                opacity: 1
            },
            '@media (max-width: 1025px)': {
                padding: '1%',
            },
        })}>
            <img src={`https://i.imgur.com/${image}.jpg`} className={ css({
                maxWidth: '200px',
                borderRadius: '5px',
                // border: '1px solid red',
                transition: '.4s',
                '-webkit-box-shadow': '0px 0px 20px 2px rgba(0,0,0,1)',
                '-moz-box-shadow': '0px 0px 20px 2px rgba(0,0,0,1)',
                boxShadow: '0px 0px 20px 2px rgba(0,0,0,1)',
                '&:hover': {
                    '-webkit-box-shadow': '0px 0px 20px 2px rgba(230,230,230,1)',
                '-moz-box-shadow': '0px 0px 20px 2px rgba(230,230,230,1)',
                boxShadow: '0px 0px 20px 2px rgba(230,230,230,1)',
                },
                // padding: '1%',
                '@media (max-width: 1150px)': {
                    maxWidth: ' 280px'
                },
                '@media (max-width: 700px)': {
                    maxWidth: ' 250px'
                },
                '@media (max-width: 600px)': {
                    maxWidth: '98%'
                },
            })} />
        </div>
    ) 
 }

}

