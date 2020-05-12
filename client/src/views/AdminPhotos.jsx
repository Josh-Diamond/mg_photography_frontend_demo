import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
// import image from '../static/modeling.jpg'
import ManageCard from '../components/ManageCard'
import axios from 'axios'
import { IoMdAddCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import DeletePopup from '../components/DeletePopup'
import SuccessfulDelete from '../components/SuccessfulDelete'
import DeleteFailure from '../components/DeleteFailure'
import InfoPopup from '../components/InfoPopup'
import axiosWithAuth from '../components/axiosWIthAuth'
import { AiFillHome } from 'react-icons/ai'
import { TiArrowBack } from 'react-icons/ti'

export default function AdminPhotos({ photos, uploadSuccess, setUploadSuccess, history, location, setEditID, setEditPhoto }) {
    const [allPhotos, setAllPhotos] = useState([])
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [deleteID, setDeleteID] = useState(null)
    const [successfulDelete, setSuccessfulDelete] = useState(false)
    const [deleteFailure, setDeleteFailure] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showInfoPic, setShowInfoPic] = useState({})
    console.log('showInfoPic', showInfoPic)
    const deleteSubmitter = e => {
        // axios
        //     .delete(`https://mg-photography-backend.herokuapp.com/api/pictures/${deleteID}`)
        //     .then(res => completedDelete())
        //     .catch(err => setDeleteFailure(true))
        axiosWithAuth()
            .delete(`https://mg-photography-backend-demo.herokuapp.com/api/pictures/${deleteID}`)
            .then(res => completedDelete())
            .catch(err => setDeleteFailure(true))
    }

    const completedDelete = () => {
        setSuccessfulDelete(true)
        axios
        .get('https://mg-photography-backend-demo.herokuapp.com/api/pictures')
        .then(res => setAllPhotos(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios
        .get('https://mg-photography-backend-demo.herokuapp.com/api/pictures')
        .then(res => setAllPhotos(res.data))
        .catch(err => console.log(err))
    },[])

    const logout = e => {
        localStorage.removeItem('token')
    }

    return (
        <div className={css({
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)',
        '-webkit-touch-callout': 'none',
            '-webkit-user-select': 'none',
            '-khtml-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none',
        })}>
            { showInfo ? <InfoPopup showInfoPic={showInfoPic} setShowInfo={setShowInfo} /> : null}
            {confirmDelete ? <DeletePopup setConfirmDelete={setConfirmDelete} history={history} deleteSubmitter={deleteSubmitter} /> : null}
            {successfulDelete ? <SuccessfulDelete setSuccessfulDelete={setSuccessfulDelete} setConfirmDelete={setConfirmDelete} setAllPhotos={setAllPhotos} /> : null}
            {deleteFailure ? <DeleteFailure setDeleteFailure={setDeleteFailure} /> : null}
            
            {/* nav start */}
            <div className={css({
                display: 'flex',
                width: '100vw',
                justifyContent: 'space-between',
                alignItems: 'center',
                // fontSize: '2rem',
                marginTop: '10px'
            })}>
                <Link to='/admin_access' className={css({
                        color: '#e6e6e6',
                        transition: '.4s',
                        textDecoration: 'none',
                        
                        "&:hover": {
                            color: '#41cc66',
                        }
                    })}>
                <TiArrowBack className={css({
                    marginLeft: '10px',
                    fontSize: '2.5rem'
                })} />
                </Link>
                <Link to='/' onClick={logout} className={css({
                        color: '#e6e6e6',
                        transition: '.4s',
                        textDecoration: 'none',
                        
                        "&:hover": {
                            color: '#41cc66',
                        }
                    })}>
                <AiFillHome className={css({
                    marginRight: '14px',
                    fontSize: '2rem'
                })} />
                </Link>
            </div>
            {/* nav end */}
            <h1 className={css({
                 color: '#41cc66',
                 fontFamily: "'Great Vibes', cursive",
                 fontSize: '5rem',
                 textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                 paddingTop: '25px',
                 '@media (max-width: 550px)': {
                     fontSize: '3rem'
                 }
            })}>
                Manage Photos
            </h1>
            <Link to='/admin_access/manage_photos/add_photo' className={css({
                textDecoration: 'none'
            })}>
                <IoMdAddCircle className={css({
                    fontSize: '2.5rem',
                    margin: '25px 0',
                    // color: '#e6e6e6',
                    cursor: 'pointer',
                    color: '#40310d',
                    transition: '.4s',
                    '&:hover': {
                        color: '#7d6247'
                    },
                    '@media (max-width: 550px)': {
                        margin: '15px 0'
                    }
                })} />
            </Link>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-evenly',
                // marginTop: '25px',
                flexWrap: 'wrap',
                overflowY: 'scroll',
                // border: '1px solid red',
                // height: '600px'
            })}>
                {allPhotos.length !== 0 ?
                allPhotos.map(photo => {
                    let img_url = photo.image_url.slice(18, photo.image_url.length)
                   return <ManageCard photo={photo} setShowInfo={setShowInfo} image={img_url} setConfirmDelete={setConfirmDelete} deleteID={deleteID} setDeleteID={setDeleteID} setEditID={setEditID} setEditPhoto={setEditPhoto} setShowInfoPic={setShowInfoPic} />
                }) :
                <h1 className={css({
                    color: '#41cc66',
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: '7rem',
                    position: 'absolute',
                    top: '75vh',
                    textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                    '@media (max-width: 450px)': {
                        fontSize: '5rem'
                    },
                })}>Loading...</h1>}                
            </div>
        </div>
    )
}
