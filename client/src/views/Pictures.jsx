import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose, AiFillHome } from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdInfoOutline } from 'react-icons/md'
import { TiInfoOutline, TiInfoLarge, TiArrowBack} from 'react-icons/ti'
import { GoInfo } from 'react-icons/go'
import model from '../static/modeling.jpg'
import photography from '../static/photography.jpg'
import art from '../static/art.jpg'
import { FaCalculator } from 'react-icons/fa'
import Thumbnail from '../components/Thumbnail'
import Popup from '../components/Popup'
import { styles } from '../Styles'
import MobileNavPopup from '../components/MobileNavPopup'

export default function Pictures({ history, photos, setModelingGallery, setPhotographyGallery, setArtGallery }) {
    const [openMenu, setOpenMenu] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selected, setSelected] = useState('')
    const [popup, setPopup] = useState(false)
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const searchFilter = e => {
        setSearchInput(e.target.value)
        let filteredPics = photos.filter(photo => photo.category.toLowerCase().includes(e.target.value.toLowerCase()) || photo.date.toLowerCase().includes(e.target.value.toLowerCase()) || photo.description.toLowerCase().includes(e.target.value.toLowerCase()) || photo.location.toLowerCase().includes(e.target.value.toLowerCase()) || photo.photographer.toLowerCase().includes(e.target.value.toLowerCase()) || photo.event.toLowerCase().includes(e.target.value.toLowerCase()) || photo.tags.toLowerCase().includes(e.target.value.toLowerCase()))
        setFiltered(filteredPics)
      }

    
    const setToModeling = () => {
        setArtGallery(false)
        setPhotographyGallery(false)
        setModelingGallery(true)
    }

    const setToPhotography = () => {
        setModelingGallery(false)
        setArtGallery(false)
        setPhotographyGallery(true)
    }

    const setToArt = () => {
        setModelingGallery(false)
        setPhotographyGallery(false)
        setArtGallery(true)
    }

    const setToAll = () => {
        setModelingGallery(false)
        setPhotographyGallery(false)
        setArtGallery(false)
    }

    const goBack = () => {
        history.goBack()
    }
    useEffect(() => {
        localStorage.removeItem('token')
      if(photos[0]) {
          let img_url_tail = photos[0].image_url.slice(18, photos[0].image_url.length)
        setSelected({...photos[0], image_url: img_url_tail})
         }
    },[photos])
    
    const rightPicture = index => {
      if(index === photos.length-1) {
        let img_url = photos[0].image_url.slice(18, photos[0].image_url.length)
        setSelectedIndex(0)
        setSelected({...photos[0], image_url: img_url})
      } else { 
          let img_url = photos[index + 1].image_url.slice(18, photos[index + 1].image_url.length)
        setSelectedIndex(index + 1)
        setSelected({...photos[index + 1], image_url: img_url})
      }
    }

    const arrowSelection = e => {
        if ([39].includes(e.keyCode)) {
            photos.length !== 0 && rightPicture(selectedIndex)
          }
          if ([37].includes(e.keyCode)) {
              photos.length !== 0 && leftPicture(selectedIndex)
          }
    }

    // document.addEventListener("keydown", e => {
     
    //     if ([39].includes(e.keyCode)) {
    //       photos.length !== 0 && rightPicture(selectedIndex)
    //     }
    //     if ([37].includes(e.keyCode)) {
    //         photos.length !== 0 && leftPicture(selectedIndex)
    //     }
    //   });

    const leftPicture = index => {
        let last_index = photos.length-1
        if(index === 0) {
            let img_url = photos[last_index].image_url.slice(18, photos[last_index].image_url.length)
            setSelectedIndex(last_index)
            setSelected({...photos[last_index], image_url: img_url})
        } else {
            let img_url = photos[index - 1].image_url.slice(18, photos[index - 1].image_url.length)
            setSelectedIndex(index - 1)
            setSelected({...photos[index - 1], image_url: img_url})
        }
    }
    
    console.log('searchInput', searchInput)

    return (

      
        <div className={ css({
            display: 'flex',
            backgroundColor: '#110C11',
            overflowY: 'hidden',
            boxSizing: 'border-box',
            '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
                overflowY: 'hidden',
                maxHeight: '100vh'
            // },
        })}>
           {openMenu ? null : <MobileNavPopup setOpenMenu={setOpenMenu} leftPicture={leftPicture} selectedIndex={selectedIndex} rightPicture={rightPicture} setPopup={setPopup} /> }

        <div className={openMenu ? css({
            display: 'flex',
            width: 'calc(100vw)',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            backgroundColor: '#110C11',
            background: "radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)",

            '@media (max-width: 1125px)': {
              justifyContent: 'center',
            },
            '@media (max-width: 1025px)': {
                width: '100vw',
            },
        }) : css({
            display: 'flex',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            backgroundColor: '#110C11',
            background: "radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)",
            width: 'calc(100vw)',
            transition: '1s',
            '@media (max-width: 900px)': {
                justifyContent: 'center',
              },
            
        })}>
            {popup && <Popup setPopup={setPopup} selected={selected} />}
            <section className={openMenu ? css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10px',
                '@media (max-width: 900px)': {
                    display: 'none'
                },
            }) : css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10px',
                '@media (max-width: 900px)': {
                    display: 'none'
                },
            })}>
               
                <TiInfoLarge onClick={() => setPopup(true)} className={css({
                    fontSize: '2rem',
                    color: '#e6e6e6',
                    transition: '.4s',
                    cursor: 'pointer',
                    '@media (max-width: 1200px)': {
                        fontSize: '1.8rem'
                    },
                    "&:hover": {
                        color: '#41cc66',
                    }
                })} />
                <IoIosArrowBack className={css({
                    fontSize: '6rem',
                    cursor: 'pointer',
                    marginTop: 'calc(50vh - 42px)',
                    color: '#e6e6e6',
                    transition: '.4s',
                    '@media (max-width: 1200px)': {
                        fontSize: '4rem'
                    },
                    "&:hover": {
                        color: '#41cc66',
                    }
                })} onClick={() => leftPicture(selectedIndex)} />
            </section>
            <section className={css({
                boxSizing: "border-box",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            })}>
               {photos[0] ? 
            //    imageFrameTEST
            <div className={css({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px',
                maxHeight: '90vh',
                maxWidth: '70vw',
                flexWrap: 'wrap',
                borderRadius: '5px',
                backgroundColor: '#110C11',
                color: '#e6e6e6',
                border: '2px solid #e6e6e6',
                '@media (max-width: 1150px)': {
                    maxWidth: '80vw'
                },
                '@media (max-width: 900px)': {
                    maxWidth: '90vw'
                },
                '@media (max-width: 600px)': {
                    padding: '20px'
                },
                '@media (max-width: 500px)': {
                    padding: '18px'
                },
                '@media (max-width: 450px)': {
                    padding: '16px',
                    maxWidth: '88vw'
                },
                '@media (max-width: 350px)': {
                    maxWidth: '84vw',
                },
                '@media (max-height: 300px)': {
                    maxHeight: '80vh'
                },
            })}>
               <img src={`https://i.imgur.com/${selected.image_url}.jpg`} className={css({
                    maxHeight: '90vh',
                    maxWidth: '70vw',
                    borderRadius: '5px',
                    // border: '1px solid red',
                '-webkit-box-shadow': '0px 0px 20px 2px rgba(230,230,230,1)',
                '-moz-box-shadow': '0px 0px 20px 2px rgba(230,230,230,1)',
                boxShadow: '0px 0px 20px 2px rgba(230,230,230,1)',
                '@media (max-width: 1150px)': {
                    maxWidth: '80vw'
                },
                '@media (max-width: 900px)': {
                    maxWidth: '90vw'
                },
                '@media (max-width: 450px)': {
                    maxWidth: '88vw',
                    margin: '5px'
                },
                '@media (max-width: 350px)': {
                    maxWidth: '84vw',
                },
                '@media (max-height: 300px)': {
                    maxHeight: '80vh'
                },
                })} />
                </div>
                :
                <h1 className={css({
                    color: '#41cc66',
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: '7rem',
                    textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                    '@media (max-width: 450px)': {
                        fontSize: '5rem'
                    },
                })}>Loading...</h1> }
                

            </section>
            <section className={ openMenu ? css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10px',
                '@media (max-width: 900px)': {
                    width: '0px',
                    display: 'none',
                },
            }) : css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10px',
                '@media (max-width: 900px)': {
                    display: 'none'
                },
            })}>
                {openMenu ? 
                <AiOutlineClose className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer',
                        color: '#e6e6e6',
                        transition: '.4s',
                        '@media (max-width: 1200px)': {
                            fontSize: '1.8rem'
                        },
                    "&:hover": {
                        color: '#41cc66',
                    }
                    })} onClick={() => setOpenMenu(false)} /> :
                    <AiOutlineMenu className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer',
                        color: '#e6e6e6',
                        transition: '.4s',
                        '@media (max-width: 1200px)': {
                            fontSize: '1.8rem'
                        },
                    "&:hover": {
                        color: '#41cc66',
                    }
                    })} onClick={() => setOpenMenu(true)} />}
                    <IoIosArrowForward className={css({
                        fontSize: '6rem',
                        cursor: 'pointer',
                        marginTop: 'calc(50vh - 50px)',
                        color: '#e6e6e6',
                        transition: '.4s',
                        '@media (max-width: 1200px)': {
                            fontSize: '4rem'
                        },
                    "&:hover": {
                        color: '#41cc66',
                    }
                    })} onClick={() => rightPicture(selectedIndex)} />
            </section>
           
        </div>


        {/* menu */}
         {/* menu */}
         <section className={ openMenu ? css({
             width: '300px',
              display: 'flex',
              flexDirection: 'column',
              transition: '1s',
            backgroundColor: 'rgba(17,88,4,1)',
              borderLeft: `2px solid #e6e6e6`,
              '@media (max-width: 1150px)': {
                width: '0%',
                display: 'none',
                overflowY: 'hidden'
            },
         }) : css({
             width: '0px',
             display: 'flex',
             flexDirection: 'column',
             overflowX: 'hidden',
             transition: '1s',
             backgroundColor: 'rgba(17,88,4,1)',
             '@media (max-width: 1150px)': {
                width: '0%',
                display: 'none'
            },
         })}>
                <div className={css({
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    paddingBottom: '0px',
                })}>
                <Link to='/gallery_selection' className={css({
                        display: 'flex',
                        alignItems: 'center',
                        width: '80%',
                        color: '#e6e6e6',
                        transition: '.4s',
                        textDecoration: 'none',
                        
                        "&:hover": {
                            color: '#41cc66',
                        }
                    })}>
                        <TiArrowBack className={css({
                            fontSize: '2rem',
                        })} />
                    </Link>
                    <Link to='/' className={css({
                         display: 'flex',
                         alignItems: 'center',
                         color: '#e6e6e6',
                         transition: '.4s',
                         textDecoration: 'none',
                         
                         "&:hover": {
                             color: '#41cc66',
                         }
                    })}>
                        <AiFillHome className={css({
                            fontSize: '1.8rem'
                        })} />
                    </Link>
                    </div>
                <input placeholder='Search' onChange={searchFilter} className={css({
                    width: '80%',
                    height: '25px',
                    borderRadius: '5px',
                    border: 'none',
                    textAlign: 'center',
                    outline: 'none',
                    letterSpacing: '1.5px',
                    color: `${styles.icon_color_hover}`,
                    fontWeight: 'bold',
                    margin: '8% auto',
                    "::placeholder": {
                        textAlign: 'center',
                        color: `${styles.profile_picture_border_color}`,
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        letterSpacing: '1.5px'
                    }
                })} />
                {filtered.length !== 0 && searchInput.length !== 0 ? 
                    <p className={css({
                        // border: '1px solid red',
                        width: '80%',
                        margin: '0 auto',
                        textAlign: 'left',
                        fontSize: '1.25rem',
                        color: '#e6e6e6',
                        paddingBottom: '10px'
                    //     color: '#41cc66',
                    // fontFamily: "'Great Vibes', cursive",
                    // fontSize: '3rem',
                    // textShadow: '0px 0px 10px rgba(255, 255, 255, 1)'
                    })}>Results ({filtered.length})</p> :
                    null}
                <div className={css({
                    maxHeight: '91vh',
                    overflowY: 'scroll',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                })}>
                    {/* {photos.map((photo, index) => {
                        let sliced_url = photo.image_url.slice(18, photo.image_url.length)
                     return <Thumbnail key={sliced_url} photo={photo} image={sliced_url} setSelected={setSelected} setSelectedIndex={setSelectedIndex} index={index} />
                    })} */}

                    {/* search bar attempt */}
                    {filtered.length === 0 && searchInput.length === 0 ? photos.map((photo, index) => {
                        let sliced_url = photo.image_url.slice(18, photo.image_url.length)
                     return <Thumbnail key={sliced_url} photo={photo} image={sliced_url} setSelected={setSelected} setSelectedIndex={setSelectedIndex} index={index} />
                    })
                :
                filtered.length === 0 && searchInput.length !== 0 ?
                <div className={css({
                    letterSpacing: '1.5px'
                })}>
                    <p className={css({
                        color: '#e6e6e6'
                    })}>Your search <br/>- <span className={css({
                        fontWeight: 'bold',
                        wordBreak: 'break-word',
                        // color: '#ab5a1b'
                        color: '#FFAD34',
                        
                    })}>{searchInput}</span> -<br/> did not return any results</p>
                </div>
                :
                filtered.map((photo, index) => {
                    let sliced_url = photo.image_url.slice(18, photo.image_url.length)
                 return <Thumbnail key={sliced_url} photo={photo} image={sliced_url} setSelected={setSelected} setSelectedIndex={setSelectedIndex} index={index} />
                })}
                </div>
            </section>

            {/* Mobile Menu */}
            <section className={ openMenu ? css({
             width: '300px',
              display: 'flex',
            background: "radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)",
              flexDirection: 'column',
              '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
              overflowY: 'hidden',
              maxHeight: '100vh',
              color: '#e6e6e6',
              '@media (max-width: 1150px)': {
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                backgroundColor: '#110C11',
                color: '#e6e6e6',
                overflowY: 'hidden',
            },
            '@media (min-width: 1151px)': {
               width: '0%',
               display: 'none',
            opacity: 0
            },
         }) : css({
             width: '0px',
             display: 'flex',
             flexDirection: 'column',
             overflowX: 'hidden',
             transition: '1s',
             '@media (min-width: 1150px)': {
                width: '0%'
             },
             '@media (max-width: 1150px)': {
                opacity: 0,
                display: 'none'
            },
         })}>
                <div className={css({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '3%'
                })}>
                    <Link to='/gallery_selection' className={css({
                        display: 'flex',
                        alignItems: 'center',
                        color: '#e6e6e6',
                        transition: '.4s',
                        textDecoration: 'none',
                        "&:hover": {
                            color: '#41cc66',
                        }
                    })}>
                        <TiArrowBack className={css({
                            fontSize: '2rem',
                        })} />
                        </Link>
                        <Link to='/' className={css({
                            display: 'flex',
                            alignItems: 'center',
                            color: '#e6e6e6',
                            transition: '.4s',
                            textDecoration: 'none',
                            
                            "&:hover": {
                                color: '#41cc66',
                            }
                        })}>
                            <AiFillHome className={css({
                                fontSize: '1.8rem'
                            })} />
                        </Link>
                    <AiOutlineClose onClick={() => setOpenMenu(false)} className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer',
                        color: '#e6e6e6',
                        transition: '.4s',
                        '@media (max-width: 1200px)': {
                            fontSize: '1.8rem'
                        },
                    "&:hover": {
                        color: '#41cc66',
                    }
                    })} onClick={() => setOpenMenu(false)} />
                </div>
                <input placeholder='Search' onChange={searchFilter} className={css({
                    width: '80%',
                    height: '25px',
                    borderRadius: '5px',
                    border: 'none',
                    textAlign: 'center',
                    outline: 'none',
                    letterSpacing: '1.5px',
                    color: `${styles.icon_color_hover}`,
                    fontWeight: 'bold',
                    // margin: '0 auto',
                    margin: '2% auto',
                    "::placeholder": {
                        textAlign: 'center',
                        color: `${styles.profile_picture_border_color}`,
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        letterSpacing: '1.5px'
                    }
                })} />
                
                {filtered.length !== 0 && searchInput.length !== 0 ? 
                    <p className={css({
                        // border: '1px solid red',
                        width: '80%',
                        margin: '0 auto',
                        textAlign: 'left',
                        fontSize: '1.25rem',
                    //     color: '#41cc66',
                    // fontFamily: "'Great Vibes', cursive",
                    // fontSize: '3rem',
                    // textShadow: '0px 0px 10px rgba(255, 255, 255, 1)'
                    })}>Results ({filtered.length})</p> :
                    null}
                    
          
                <div className={css({
                    maxHeight: '91vh',
                    overflowY: 'scroll',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    padding: '1% 5%'
                })}>
                    {/* {photos.map((photo, index) => {
                        let sliced_url = photo.image_url.slice(18, photo.image_url.length)
                     return <Thumbnail key={sliced_url} photo={photo} mobile image={sliced_url} setOpenMenu={setOpenMenu} setSelected={setSelected} setSelectedIndex={setSelectedIndex} index={index} />
                    })} */}

                    {/* search bar attempt */}
                    {filtered.length === 0 && searchInput.length === 0 ? photos.map((photo, index) => {
                        let sliced_url = photo.image_url.slice(18, photo.image_url.length)
                     return <Thumbnail key={sliced_url} photo={photo} mobile image={sliced_url} setOpenMenu={setOpenMenu} setSelected={setSelected} setSelectedIndex={setSelectedIndex} index={index} />
                    })
                :
                filtered.length === 0 && searchInput.length !== 0 ?
                <div className={css({
                    letterSpacing: '1.5px'
                })}>
                    <p>Your search - <span className={css({
                        fontWeight: 'bold',
                        wordBreak: 'break-word',
                        color: '#FFAD34'
                    })}>{searchInput}</span> - did not return any results</p>
                </div>
                :
                filtered.map((photo, index) => {
                    let sliced_url = photo.image_url.slice(18, photo.image_url.length)
                 return <Thumbnail key={sliced_url} photo={photo} mobile image={sliced_url} setOpenMenu={setOpenMenu} setSelected={setSelected} setSelectedIndex={setSelectedIndex} index={index} />
                })
                }
                </div>
            </section>

    </div>
    )
}