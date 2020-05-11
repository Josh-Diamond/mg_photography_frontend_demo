import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
import axios from 'axios'
import { styles } from '../Styles'

export default function RequiredFields({ setValidation, formData }) {
    
    return (
        <div onClick={() => setValidation(false)} className={css({
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
            {formData.image_url === '' && formData.category === '' ?
                <h2 className={css({
                    marginBottom: '10px'
                })}>REQUIRED FIELDS</h2>
                : <h2 className={css({
                    marginBottom: '10px'
                })}>REQUIRED FIELD</h2>
            }
            {formData.image_url === '' && formData.category === '' ?
            <>
                <h4 className={css({
                    marginBottom: '5px'
                })}><span className={css({
                    position: 'relative',
                    top: '3px',
                    color: '#41cc66'
                })}>*</span> IMAGE URL</h4>
                <h4><span className={css({
                    position: 'relative',
                    top: '3px',
                    color: '#41cc66'
                })}>*</span> CATEGORY</h4>
            </>
            : formData.image_url === '' ?
            <h4 className={css({
                marginBottom: '5px'
            })}><span className={css({
                position: 'relative',
                top: '3px',
                color: '#41cc66'
            })}>*</span> IMAGE URL</h4>
            : formData.category === '' ?
            <h4><span className={css({
                position: 'relative',
                top: '3px',
                color: '#41cc66'
            })}>*</span> CATEGORY</h4>
            : null
         }
            </div>
        </div>
    )
}