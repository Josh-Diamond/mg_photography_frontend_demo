import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
import { styles } from '../Styles'

export default function DeletePopup({ history, setConfirmDelete, deleteSubmitter }) {
    // const confirmDelete = () => {
    //     setConfirmDelete(false)
    //     history.push('/admin_access/manage_photos')
    // }
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
                border: '2px solid #e6e6e6',
                // border: '2px solid #515E66'
                // '@media (max-width: 800px)': {
                //     width: '50%'
                // },
                '@media (max-width: 600px)': {
                    padding: '5%'
                }
            })}>
            <h2 className={css({
                margin: '0 auto'
            })}>Confirm Delete?</h2>
            <div className={css({
                display: 'flex',
                // border: '1px solid red',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '0 auto'
            })}>
            <ul onClick={deleteSubmitter} className={css({ 
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
                                    width: '35px',
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
                                })}>YES</div>
                            </li>
                        </ul>
                        <ul onClick={() => setConfirmDelete(false)} className={css({ 
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
                                    width: '35px',
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
                                })}>NO</div>
                            </li>
                        </ul>
            </div>
            </div>
        </div>
    )
}