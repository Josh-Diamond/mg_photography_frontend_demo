import React from 'react'
import { css } from 'emotion'
import Name from '../static/Name.png'
import Logo from '../static/Logo.png'

export default function CreatedBy({ setCreatedBy }) {
    return (
        <div onClick={() => setCreatedBy(false)} className={css({
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
            backgroundColor: 'rgba(0,0,0, 0.85)',
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
                backgroundColor: 'white',
                maxWidth: '480px',
                width: '80%',
                flexWrap: 'wrap',
                // minHeight: '100px',
                borderRadius: '5px',
                letterSpacing: '0.15rem',
                backgroundColor: '#110C11',
                color: '#e6e6e6',
                // border: '2px solid #e6e6e6'
                border: '2px solid #515E66'
            })}>
                <h4>Created By</h4>
                <img src={Logo} alt='Logo' className={css({
                    margin: '0 auto',
                    maxWidth: '100%'
                })} />
                <img src={Name} alt='Josh Diamond' className={css({
                    margin: '0 auto',
                    marginTop: '4%',
                    maxWidth: '100%',
                    marginBottom: '2.1%'
                })} />
            </div>
        </div>
    )
}
