import React, { useState, useEffect } from 'react';
import './App.css';
import { css } from 'emotion'
import { Route, Switch } from 'react-router-dom';
import Landing from './views/Landing'
import PrivateRoute from './components/PrivateRoute'
import Admin from './views/Admin'
import Gallery from './views/Gallery'
import Login from './views/Login'
import Pictures from './views/Pictures'
import axios from 'axios'
import AdminPhotos from './views/AdminPhotos'
import AdminUpdate from './views/AdminUpdate'
import AdminPhotosAdd from './views/AdminPhotosAdd'
import AdminPhotosEdit from './views/AdminPhotosEdit'
import ResetPassword from './views/ResetPassword'
import AdminUpdateImages from './views/AdminUpdateImages'
import AdminUpdateSecurity from './views/AdminUpdateSecurity'
import SecurityQuestionAnswer from './views/SecurityQuestionAnswer'

function App() {
  const [photos, setPhotos] = useState([])
  const [modelingPhotos, setModelingPhotos] = useState([])
  const [photographyPhotos, setPhotographyPhotos] = useState([])
  const [artPhotos, setArtPhotos] = useState([])
  const [modelingGallery, setModelingGallery] = useState(false)
  const [photographyGallery, setPhotographyGallery] = useState(false)
  const [artGallery, setArtGallery] = useState(false)
  const [editID, setEditID] = useState(null)
  const [editPhoto, setEditPhoto] = useState({})
 console.log('editOBJappJS', editPhoto)
  useEffect(() => {
    axios
      .get('https://mg-photography-backend-demo.herokuapp.com/api/pictures')
      .then(res => {
        setPhotos(res.data)
        setModelingPhotos(res.data.filter(photo => photo.category.toLowerCase() === 'modeling'))
        setPhotographyPhotos(res.data.filter(photo => photo.category.toLowerCase() === 'photography'))
        setArtPhotos(res.data.filter(photo => photo.category.toLowerCase() === 'art'))
      })
      .catch(err => console.log(err))

      // reset gallery selection
      setModelingGallery(false)
      setPhotographyGallery(false)
      setArtGallery(false)
  },[])
  // console.log('modelingGallery?', modelingGallery)
  // console.log('modeling_photosss', modelingPhotos)
  // console.log('photography_photosss', photographyPhotos)
  // console.log('art_photosss', artPhotos)
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={props => <Landing {...props} />} />
        <Route path='/gallery_selection' render={props => <Gallery {...props} setModelingGallery={setModelingGallery} setPhotographyGallery={setPhotographyGallery} setArtGallery={setArtGallery} />} />
        <Route exact path='/gallery' render={props => <Pictures {...props} photos={modelingGallery ? modelingPhotos : photographyGallery ? photographyPhotos : artGallery ? artPhotos : photos} />} setModelingGallery={setModelingGallery} setPhotographyGallery={setPhotographyGallery} setArtGallery={setArtGallery} />
        <Route exact path='/admin' render={props => <Login {...props} />} />
        <PrivateRoute exact path='/admin_access' view={Admin} />
        <PrivateRoute exact path='/admin_access/manage_photos' view={AdminPhotos} photos={photos} setEditID={setEditID} setEditPhoto={setEditPhoto} />
        <PrivateRoute exact path='/admin_access/update_site' view={AdminUpdate} />
        <PrivateRoute exact path='/admin_access/manage_photos/add_photo' view={AdminPhotosAdd} />
        <PrivateRoute exact path='/admin_access/manage_photos/edit_photo' view={AdminPhotosEdit} editID={editID} editPhoto={editPhoto} />
        <PrivateRoute exact path='/admin_access/update_site/images' view={AdminUpdateImages} />
        <PrivateRoute exact path='/admin_access/update_site/security' view={AdminUpdateSecurity} />
        <PrivateRoute exact path='/admin_access/update_site/security/question_answer' view={SecurityQuestionAnswer} />
        <PrivateRoute exact path='/reset_password' view={ResetPassword} />
      </Switch>
    </div>
  );
}

export default App;
