import React, { useState, useEffect } from 'react'
import { css } from 'emotion'

export default function InfoPopup({ history, showInfoPic, setShowInfo }) {
    const success = () => {
        setShowInfo(false)
    }
    return (
        <div onClick={success} className={css({
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
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            })}>
                <h2>URL:</h2>
                <h4 className={css({
                    color: '#41cc66'
                })}>{`${showInfoPic.image_url}`}</h4>
            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            })}>
                <h2>Category:</h2>
                <h4 className={css({
                    color: '#41cc66'
                })}>{`${showInfoPic.category}`}</h4>
            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            })}>
                <h2>Date:</h2>
                <h4 className={css({
                    color: '#41cc66'
                })}>{`${showInfoPic.date}`}</h4>
            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            })}>
                <h2>Description:</h2>
                <h4 className={css({
                    color: '#41cc66'
                })}>{`${showInfoPic.description}`}</h4>
            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            })}>
                <h2>Location:</h2>
                <h4 className={css({
                    color: '#41cc66'
                })}>{`${showInfoPic.location}`}</h4>
            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            })}>
                <h2>Photographer:</h2>
                <h4 className={css({
                    color: '#41cc66'
                })}>{`${showInfoPic.photographer}`}</h4>
            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            })}>
                <h2>Event:</h2>
                <h4 className={css({
                    color: '#41cc66'
                })}>{`${showInfoPic.event}`}</h4>
            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            })}>
                <h2>Tags:</h2>
                <h4 className={css({
                    color: '#41cc66'
                })}>{`${showInfoPic.tags}`}</h4>
            </div>
            </div>
        </div>
    )
}