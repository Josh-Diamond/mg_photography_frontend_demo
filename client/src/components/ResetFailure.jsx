import React, { useState, useEffect } from 'react'
import { css } from 'emotion'

export default function ResetFailure({ setResetFailure }) {
    const failure = () => {
        setResetFailure(false)
    }
    return (
        <div onClick={failure} className={css({
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
                border: '2px solid #e6e6e6'
                // border: '2px solid #515E66'
            })}>
            <h4 className={css({
                    // marginBottom: '5px'
                })}><span className={css({
                    position: 'relative',
                    top: '3px',
                    color: '#41cc66'
                })}>*</span> PASSWORD RESET FAILED</h4>
            </div>
        </div>
    )
}