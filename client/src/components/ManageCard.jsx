import React, { useState } from 'react'
import { css } from 'emotion'
import { TiInfoLarge } from 'react-icons/ti'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function ManageCard({ photo, setShowInfo, image, setConfirmDelete, setDeleteID, setEditID, setEditPhoto, setShowInfoPic }) {
    const clickInfo = () => {
        setShowInfoPic(photo)
        setShowInfo(true)
    }

    const clickDelete = () => {
        setConfirmDelete(true)
        setDeleteID(photo.id)
    }
    
    const clickEdit = () => {
        setEditID(photo.id)
        setEditPhoto({...photo})
    }

    return (
        <div className={css({
            width: '220px',
            height: '255px',
            borderRadius: '5px',
            margin: '25px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#110C11',
            '-webkit-box-shadow': '0px 0px 35px 2px rgba(230,230,230,1)',
            '-moz-box-shadow': '0px 0px 35px 2px rgba(230,230,230,1)',
            boxShadow: '0px 0px 35px 2px rgba(230,230,230,1)',
        })}>
            <img src={`https://i.imgur.com/${image}.jpg`} className={css({
                maxHeight: '200px',
                maxWidth: '200px',
                borderRadius: '5px',
                margin: '0 auto',
                marginTop: '15px',
            })}  />
            <section className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: '35px',
                marginBottom: '5px',
            })}>
                <TiInfoLarge onClick={clickInfo} className={css({
                    fontSize: '1.8rem',
                    color: '#e6e6e6',
                    transition: '.4s',
                    cursor: 'pointer',
                    '&:hover': {
                        color: '#41cc66',
                    }
                })} />
                <Link to='/admin_access/manage_photos/edit_photo' onClick={clickEdit} className={css({
                    textDecoration: 'none'
                })}>
                    <FaRegEdit onClick={() => setEditID(photo.id)} className={css({
                        fontSize: '1.5rem',
                        color: '#e6e6e6',
                        transition: '.4s',
                        cursor: 'pointer',
                        '&:hover': {
                            color: '#41cc66',
                        }
                    })} />
                </Link>
                {/* <MdDelete /> */}
                <MdDeleteForever onClick={clickDelete} className={css({
                    fontSize: '1.8rem',
                    color: '#e6e6e6',
                    transition: '.4s',
                    cursor: 'pointer',
                    '&:hover': {
                        color: '#41cc66',
                    }
                })} />
            </section>
        </div>
    )
}
