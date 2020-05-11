import React, { useState, useEffect } from 'react'
import { css } from 'emotion'

export default function ModelingPreview({ image, setModelingPreview}) {
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        let img_url = image.slice(18, image.length)
        setImageURL(img_url)
    }, [image])
   
    return (
        <div onClick={() => setModelingPreview(false)} className={css({
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
           {imageURL ? <div className={css({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '5%',
                // paddingTop: '1%',
                backgroundColor: 'white',
                // maxWidth: '800px',
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
                {/* {imageURL ?
                <h2 className={css({
                    // marginTop: '10px',
                    marginBottom: '8%'
                    // textTransform: 'uppercase'
                })}>Image Preview</h2> : null } */}
                <img src={`https://i.imgur.com/${imageURL}.jpg`} className={css({
                    maxHeight: '75vh',
                    maxWidth: '75vw',
                    borderRadius: '5px',
                '-webkit-box-shadow': '0px 0px 25px 2px rgba(230,230,230,1)',
                '-moz-box-shadow': '0px 0px 25px 2px rgba(230,230,230,1)',
                boxShadow: '0px 0px 25px 2px rgba(230,230,230,1)',
                })} /> 
                </div> :
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
                    <h2>No Image URL provided</h2>
                    </div> }
            
        </div>
    )
}
