import React from 'react'
import { css } from 'emotion'

export default function Popup({ selected, setPopup }) {
    return (
        <div onClick={() => setPopup(false)} className={css({
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
                '@media (min-width: 601px)': {
                    padding: '12px'
                }
            })}>
                { selected.location === '' && selected.date === '' && selected.description === '' && selected.photographer === '' ?
                <h4>No Information Provided</h4>
                : selected.date || selected.location ?
                <div className={css({
                    maxWidth: '100%',
                    // border: '1px solid red',
                    wordWrap: 'break-word',
                    flexDirection: 'row',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    // border: '1px solid yellow',
                    padding: '2% 0px'
                    // color: '#7d6247'
                    // justifyContent: 'space-around'
                })}>
                    <h4>{selected.location}</h4>
                    { selected.location ?
                    <p className={css({
                        margin: '0 10px',
                        
                    })}>•</p>
                    : null}
                    <h4>{selected.date}</h4>
                </div>
                : null}
                { selected.description ?
                <div className={css({
                    maxWidth: '100%',
                    // border: '1px solid red',
                    wordWrap: 'break-word',
                    flexDirection: 'row',
                    display: 'flex',
                    width: '100%',
                    fontSize: '1.3rem',
                    fontStyle: 'italic',
                    justifyContent: 'center',
                    // margin: '2% 0px',
                    // border: '1px solid red'
                    // margin: '5px 0',
                    // color: '#7d6247',
                    // color: '#543313'
                })}>
                    <h4 className={css({
                        letterSpacing: '0.1rem',
                        padding: '2% 0px',
                        // border: '1px solid blue'
                        // fontSize: '1.rem'
                    })}>{selected.description}</h4>
                </div>
                : null}
                {/* { selected.location ?
                <div className={css({
                    maxWidth: '100%',
                    border: '1px solid red',
                    wordWrap: 'break-word',
                    flexDirection: 'row',
                    display: 'flex',
                    width: '100%'
                })}>
                    <h4>Location:</h4>
                    <p>{selected.location}</p>
                </div>
                : null} */}
                { selected.photographer ?
                <div className={css({
                    maxWidth: '100%',
                    // border: '1px solid purple',
                    wordWrap: 'break-word',
                    flexDirection: 'row',
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '3% 0px'
                })}>
                    <h4 className={css({
                        fontFamily: "'Great Vibes', cursive",
                        fontWeight: 'bold',
                        // marginRight: '15px',
                        textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                        color: '#41cc66',
                        fontSize: '1.5rem',
                        marginRight: '10px'
                    })}>Photographed by</h4>
                    <p>{selected.photographer}</p>
                </div>
                : null}
            </div>
        </div>
    )
}
