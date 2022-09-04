import (__dirname + '/index.css');

const uiController = (function () {
  //store html selectors in an object for outputField() method
  const domElements = {
    loginDiv: "#login-div",
    login: "#login",
    userShow: "#userShow",
    accToken: "#access-token",
    refToken: "#refresh-token",
    hToken: "#hidden-token",
    songDetail: "#song-description",
    previousSong: "#prev",
    currentSong: "#current",
    nextSong: "#next",
    title: "#playlist-title",
    playlistArt: "#playlist-art",
    nowPlaying: "#now-playing",
    skipBack: "#skipBack",
    play: "#play",
    skipForward: "#skipForward",
    playlistContents: "#metadata-1",
    otherPlaylists: "#metadata-2",
    genreSelect: "#genre-select",
    loader: "#loading"
  };

  return {
    //create a method to callback selectors
    outputField() {
      return {
        loginDiv: document.querySelector(domElements.loginDiv),
        login: document.querySelector(domElements.login),
        access: document.querySelector(domElements.accToken),
        refresh: document.querySelector(domElements.refToken),
        songDetail: document.querySelector(domElements.songDetail),
        hiddenDiv: document.querySelector(domElements.hlogin),
        btnLogin: document.querySelector(domElements.btnLogin),
        previousSong: document.querySelector(domElements.previousSong),
        currentSong: document.querySelector(domElements.currentSong),
        nextSong: document.querySelector(domElements.nextSong),
        title: document.querySelector(domElements.title),
        playlistArt: document.querySelector(domElements.playlistArt),
        nowPlaying: document.querySelector(domElements.nowPlaying),
        skipBack: document.querySelector(domElements.skipBack),
        play: document.querySelector(domElements.play),
        skipForward: document.querySelector(domElements.skipForward),
        playlistSongs: document.querySelector(domElements.playlistContents),
        playlistLibrary: document.querySelector(domElements.otherPlaylists),
        genreSelect: document.querySelector(domElements.genreSelect),
        loader: document.querySelector(domElements.loader)
      };
    },

    hideElement(element) {
      element.style.visibility = 'hidden'
      element.style.background = 'transparent'
      element.style.opacity = '100%'
      element.style['background-blend-mode'] = 'none'
      element.style['z-index'] = -999
    },

    //general ui info population methods
    displayLoadingMessage() {
      this.outputField().loader.style.backgroundColor = 'yellow'
      this.outputField().loader.style.opacity = .7;
      this.outputField().loader.style.color = 'black'
      this.outputField().loader.innerHTML = "LOADING..."
      this.outputField().loader.classList.add('display');
      this.timeoutSet() // set timeout to hide loading message
    },
    
    hideLoadingMessage() {
      this.outputField().loader.classList.remove('display');
    },
    
    displayError(error="Unknown Error") {
      this.outputField().loader.style.backgroundColor = 'red'
      this.outputField().loader.style.color = 'white'
      this.outputField().loader.innerHTML = ""
      this.outputField().loader.innerHTML = error
      this.outputField().loader.classList.add('display');
      this.timeoutSet()
      throw new Error(error)
    },

    timeoutSet() {
      setTimeout(() => {
        this.hideLoadingMessage()
        } , 10000);  // 1000ms = 1s
    },

    displayUserName(userName){
      const html = `<div class="nav-box center-box">Logged in as: ${userName.toString()}</div>`;
      document
        .querySelector(domElements.userShow)
        .insertAdjacentHTML("afterbegin", html);
    },

    assignGenre(text, value) {
      const html = `<option id="genre-item" value="${value}">${text}</option>`;
      document
        .querySelector(domElements.genreSelect)
        .insertAdjacentHTML("beforeend", html);
    },

    assignTitle(id, text) {
      const html = `<div class="playlist-title">${text}</div><input class="hidden-title" type="hidden" value=${id}></input>`;
      document
        .querySelector(domElements.title)
        .insertAdjacentHTML("beforeend", html);
    },

    assignPlaylistArt(img) {
      const image = `<div class="playlist-art-img" id="playlist-img">
      <img src=${img} class="playlist-pic"/></div>`;
      document
        .querySelector(domElements.playlistArt)
        .insertAdjacentHTML("beforeend", image);
    },

    populatePlaylists(id, url, text) {
      const html = `<button class="playlist-btns" value=${id} style="z-index:1;"><img src=${url} alt="${text}" style="z-index:-1;"/><div class="text">${text}</div></button>`;
      document
        .querySelector(domElements.otherPlaylists)
        .insertAdjacentHTML("beforeend", html);
    },

    populateTrackList(uri, number, name, artist, length, id) {
      const html = `<div class="track-items"><input class="uri" type="hidden" value=${uri}>${number}. ${name} by ${artist}</input><button class="track-id playlist-items" id="play" value=${id}>PLAY</button><div class="track-length">${Math.floor(
        length / 1000 / 60
      )}:${Math.floor((length / 1000) % 60).toFixed(0)}</div></div>`;
      document
        .querySelector(domElements.playlistContents)
        .insertAdjacentHTML("beforeend", html);
    },

    populateSongInfo(name, artist, album) {
      const html = `<div class="song-info">Now Viewing:<br>${name} by ${artist}<br>from the Album:<br>${album}</div>`;
      document
        .querySelector(domElements.songDetail)
        .insertAdjacentHTML("beforeend", html);
    },

    populateSongImage(img) {
      const html = `<img class="track-imgs" src=${img}>`;
      document
        .querySelector(domElements.currentSong)
        .insertAdjacentHTML("beforeend", html);
    },

    resetTrackArt() {
      this.outputField().currentSong.innerHTML = "";
    },

    resetTrackDetail() {
      this.outputField().songDetail.innerHTML = "";
      this.resetTrackArt();
    },

    resetTitle() {
      this.outputField().title.innerHTML = "";
      this.resetTrackDetail();
    },

    resetPlaylistPic() {
      this.outputField().playlistArt.innerHTML = "";
      this.resetTitle();
    },

    resetTracks() {
      this.outputField().playlistSongs.innerHTML = "";
      this.resetPlaylistPic();
    },

    resetPlaylists() {
      this.outputField().playlistLibrary.innerHTML = "";
      this.resetTracks();
    },

    storeBackToken(value) {
      document.querySelector(domElements.hToken).value = value;
    },

    storeAccessToken(value) {
      document.querySelector(domElements.accToken).value = value;
    },

    storeRefToken(value) {
      document.querySelector(domElements.refToken).value = value;
    },

    getBackToken() {
      return {
        token: document.querySelector(domElements.hToken).value
      };
    },

    getAccToken() {
      return {
        token: document.querySelector(domElements.accToken).value
      };
    },

    getRefToken() {
      return {
        token: document.querySelector(domElements.refToken).value
      };
    }
  };
})();

const apiController = (function (uiCtrl) {
  function userLogin() {
    // Open the auth popup
    const spotifyLoginWindow = window.open(
      `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=token`,
      'Login with Spotify',
      'width=800,height=600'
    );

    try {      
      const currentUser = window.spotifyCallback = async (popup, payload) => {
        uiCtrl.storeAccessToken(payload)
        
        popup.close()
        
        uiCtrl.hideElement(uiCtrl.outputField().loginDiv)
        uiCtrl.hideElement(uiCtrl.outputField().login)

        const user = await getUser(payload)
        return user
      }
      this.token = spotifyLoginWindow.window.location.hash.substring(14).split('&')[0]

      if (this.token) {
        this.window.spotifyCallback(spotifyLoginWindow, this.token);
        return currentUser
      } else {
        alert("Failed to Fetch Token")
        spotifyLoginWindow.window.close()
      }
    } catch (error) {
      uiCtrl.displayError(`ERROR:${error}`);
    }
  }

  //get access token for users
  async function getUser(token) {
    uiCtrl.displayLoadingMessage()
    const response = await fetch(`${process.env.BASE}me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(response => {
      if (response.ok) {
        uiCtrl.hideLoadingMessage()
        this.me = response.json()
        return this.me
      } else {
        uiCtrl.displayUserName("Signed Out")
        uiCtrl.displayError("Failed to Login")
      }
    }).catch (error => {
      uiCtrl.displayError(error)
    })
    uiCtrl.displayUserName(response.display_name)
    return response
  };

  //get access token for GVO playlists
  async function getToken() {
    uiCtrl.displayLoadingMessage();
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/x-www-form-urlencoded', 
          'Authorization' : 'Basic ' + btoa(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET)
      },
      body: 'grant_type=client_credentials'
    })
    .then(async (response) => {
      if (response.ok) {
        uiCtrl.hideLoadingMessage()
        const data = await response.json()
        uiCtrl.storeBackToken(data.access_token)
        return data.access_token;
      }
      uiCtrl.displayError(response.status)
    })
    .catch (error => {
      uiCtrl.displayError(error)
    } )
    return response
  };

  //fetch genres from spotify for later sorting
  async function getGenres(token) {
    uiCtrl.displayLoadingMessage()
    const response = await fetch(
      `${process.env.BASE}recommendations/available-genre-seeds`,
      {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${token}`,
        }
      }
    ).then( async (response) => {
      if (response.ok) {
        uiCtrl.hideLoadingMessage()
        const data = await response.json()
        return data.genres;
      }
      uiCtrl.displayError(response.status)
    }).catch (error => {
      uiCtrl.displayError(error);
    })
    return response
  };

  //fetch user playlist information from api
  async function getMyPlaylists(token) {
    const limit = 21;

    uiCtrl.displayLoadingMessage()
    const response = await fetch(
      `${process.env.BASE}users/${process.env.USER_ID}/playlists?limit=${limit}&offset=0`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then( async (response) => {
      if (response.ok) {
        uiCtrl.hideLoadingMessage()
        const data = await response.json()
        return data;
      }
      uiCtrl.displayError(response.status)
    }).catch (error => {
      uiCtrl.displayError(error)
    })
    return response
  };

  //fetch user playlist information from api
  async function getPlaylistByID(playlistID, token) {
    uiCtrl.displayLoadingMessage()
    const response = await fetch(
      `${process.env.BASE}playlists/${playlistID}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then( async (response) => {
      if (response.ok) {
        uiCtrl.hideLoadingMessage()
        data = await response.json()
        return data;
      }
      uiCtrl.displayError(response.status)
    }).catch (error => {
      uiCtrl.displayError(error)
    })
    return response;
  };

  //function used to fetch playlist track list
  async function getMyPlaylistsTrackList(playlistID, token) {
    uiCtrl.displayLoadingMessage()
    const response = await fetch(
      `${process.env.BASE}playlists/${playlistID}/tracks`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then( async (response) => {
      if (response.ok) {
        uiCtrl.hideLoadingMessage()
        const data = await response.json()
        return data;
      }
      uiCtrl.displayError(response.status)
    }).catch(error => {
      uiCtrl.displayError(error)
    })
    return response;
  };

  //function used to fetch individual track info from playlists
  async function getTrackInfo(trackID, token) {
    uiCtrl.displayLoadingMessage()
    const response = await fetch(
      `${process.env.BASE}tracks/${trackID}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then( async (response) => {
      if (response.ok) {
        uiCtrl.hideLoadingMessage()
        const data = await response.json()
        return data;
      }
      uiCtrl.displayError(response.status)
    }).catch(error => {
      uiCtrl.displayError(error)
    })
    return response;
  };

  //fetch play/pause
  async function playFunction(token, uri) {
    uiCtrl.displayLoadingMessage()
    const response = await fetch(`${process.env.BASE}me/player/play`, 
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: `{"context_uri":"spotify:track:${uri}"}`
      }
    ).then( (response) => {
      console.log(response)
      if (response.ok) {
        uiCtrl.hideLoadingMessage()
        data = response.json()
        return data;
      } uiCtrl.displayError(response.status)
    }).catch(error => {
      uiCtrl.displayError(error)
    })
    return response;
  };

  return {
    userLogin() {
      return userLogin();
    },
    getUser(token) {
      return getUser(token);
    },
    getToken() {
      return getToken();
    },
    getGenres(token) {
      return getGenres(token);
    },
    getMyPlaylists(token) {
      return getMyPlaylists(token);
    },
    getPlaylistByID(playlistID, token) {
      return getPlaylistByID(playlistID, token);
    },
    getMyPlaylistsTrackList(playlistID, token) {
      return getMyPlaylistsTrackList(playlistID, token);
    },
    getTrackInfo(trackID, token) {
      return getTrackInfo(trackID, token);
    },
    getAvailableDevices(token) {
      return getAvailableDevices(token)
    },
    playFunction(token, uri) {
      return playFunction(token, uri);
    },
  };
})(uiController);


const appController = (function (apiCtrl, uiCtrl) {
  //get object reference for DOM outputs
  const domOutput = uiCtrl.outputField();

  const userOps = async () => {
    //listener for spotify user login
    const user = domOutput.login.addEventListener("click", async () => {
      try {
        let user = apiCtrl.userLogin()
        if (user) {
          await asyncOps()
          return user
        }
      } catch (error) {
        uiCtrl.displayError(`ERROR: ${error}`)
      }
    })
    return user
  }

  const asyncOps = async () => {
    let token = await apiCtrl.getToken();
    uiCtrl.storeBackToken(token);

    const genrePopulate = async () => {
      try {
        await apiCtrl.getGenres(token)
        .then((data) => {
          //populate drop-down menu with genres
          data.forEach((element) => uiCtrl.assignGenre(element, element));
        });
      } catch (error) {
        uiCtrl.displayError("Genres not loaded:" + error);
      };
    };

    const musicPopulate = async () => {
      let token = uiCtrl.getBackToken().token;

      // fetch playlist info for each playlist
      const data = await apiCtrl.getMyPlaylists(token);

      const title = data.items[3].name;
      const id = data.items[3].id;
      // print title
      uiCtrl.assignTitle(id, title);
      // place image on center div
      uiCtrl.assignPlaylistArt(data.items[3].images[0].url);
      // populate playlist selection library
      for (let i = 0; i < data.items.length; i++) {
        uiCtrl.populatePlaylists(
          data.items[i].id,
          data.items[i].images[0].url,
          data.items[i].name
        );
      };

      const trackList = await apiCtrl.getMyPlaylistsTrackList(data.items[3].id,token);

      for (let i = 0; i < trackList.items.length; i++) {
        uiCtrl.populateTrackList(
          trackList.items[i].track.uri,
          i + 1,
          trackList.items[i].track.name,
          trackList.items[i].track.artists[0].name,
          trackList.items[i].track.duration_ms,
          trackList.items[i].track.id
        );
      }

      const songInfo = await apiCtrl.getTrackInfo(trackList.items[0].track.id,token);

      uiCtrl.populateSongInfo(
        songInfo.name,
        songInfo.artists[0].name,
        songInfo.album.name
      );

      const songImage = await apiCtrl.getTrackInfo(trackList.items[0].track.id,token);
      //place song images
      uiCtrl.populateSongImage(songImage.album.images[0].url);
    };

    const genreListener = () => {
      let token = uiCtrl.getBackToken().token;
      const genreSelect = domOutput.genreSelect;
      genreSelect.addEventListener("change", async () => {
        uiCtrl.resetPlaylists();
        const genreId = genreSelect.options[genreSelect.selectedIndex].value;
        try {
          const playlist = await apiCtrl.getMyPlaylists(token);
          for (i = 0; i < playlist.items.length; i++) {
            const description = playlist.items[i].description;
            if (description.split(" ").includes(genreId)) {
              //populate title
              const title = playlist.items[i].name;
              uiCtrl.resetTracks();
              uiCtrl.assignTitle(genreId, title);
              //assign current playlist image to center div
              uiCtrl.assignPlaylistArt(playlist.items[i].images[0].url);
              //assign current playlist(s)
              uiCtrl.populatePlaylists(
                playlist.items[i].id,
                playlist.items[i].images[0].url,
                playlist.items[i].name
              );
            }
          }} catch (error) {
            uiCtrl.displayError(error);
          };

        try {
          //assign current tracklist
          const trackList = await apiCtrl.getMyPlaylistsTrackList(playlist.items[i].id, token);

          for (j = 0; j < trackList.items.length; j++) {
            //place current tracklist
            uiCtrl.populateTrackList(
              trackList.items[j].track.uri,
              j + 1,
              trackList.items[j].track.name,
              trackList.items[j].track.artists[0].name,
              trackList.items[j].track.duration_ms,
              trackList.items[i].track.id
            );
            //fetch current song image
            if (j == 0) {
              const songImage = await apiCtrl.getTrackInfo(trackList.items[j].track.id, token);
              uiCtrl.populateSongInfo(songImage.name, songImage.artists[0].name, songImage.album.name)
              uiCtrl.populateSongImage(songImage.album.images[0].url);
              };
          }
        } catch (error) {
          uiCtrl.displayError("Failed to load playlist:" + error);
        };
      });
    };

    const playlistListener = () => {
      let token = uiCtrl.getBackToken().token;
      const playlistContainer = domOutput.playlistLibrary;
      playlistContainer.addEventListener("click", async (e) => {
        uiCtrl.resetTracks();
        const btnID = e.target.value || e.target.parentElement.value;
        try {
          const currentPlaylist = await apiCtrl.getPlaylistByID(btnID, token);
          uiCtrl.assignPlaylistArt(currentPlaylist.images[0].url);
          uiCtrl.assignTitle(currentPlaylist.id, currentPlaylist.name);
          const trackList = await apiCtrl.getMyPlaylistsTrackList(btnID, token);

          for (i = 0; i < trackList.items.length; i++) {
            uiCtrl.populateTrackList(
              trackList.items[i].track.uri,
              i + 1,
              trackList.items[i].track.name,
              trackList.items[i].track.artists[0].name,
              trackList.items[i].track.duration_ms,
              trackList.items[i].track.id
            );
            //fetch current song image
            const trackInfo = await apiCtrl.getTrackInfo(trackList.items[i].track.id, token);
            if (i == 0) {
              uiCtrl.populateSongInfo(trackInfo.name, trackInfo.artists[0].name, trackInfo.album.name);
              uiCtrl.populateSongImage(trackInfo.album.images[0].url);
            }
          }
        } catch (error) {
          uiCtrl.displayError("Failed to load playlist");
        };
      });
    };

    const tracklistListener = () => {
      let token = uiCtrl.getAccToken()
      const songDiv = domOutput.playlistSongs;
      songDiv.addEventListener("click", async (e) => {
        uiCtrl.resetTrackDetail();
        const trackDiv = document.getElementsByClassName("track-items");
        const uri = document.querySelector(".uri").value;
        const trackID = e.target.value;

        try {
          let token = uiCtrl.getBackToken()
          const trackInfo = await apiCtrl.getTrackInfo(trackID, token);
          uiCtrl.populateSongInfo(
            trackInfo.name,
            trackInfo.artists[0].name,
            trackInfo.album.name
          );
          uiCtrl.populateSongImage(trackInfo.album.images[0].url);
        } catch (error) {
          uiCtrl.displayError(error);
        };
        // play button for individual tracks
        try{
          await apiCtrl.playFunction(token, uri);
        } catch (error) {
          uiCtrl.displayError("Playback error:" + error);
        };
      });
    };

    const trackPlayListener = () => {
      let token = uiCtrl.getAccToken();
      const songPlay = domOutput.play;
      // const songSkip = domOutput.skipForward;
      // const songBack = domOutput.skipBack;
      songPlay.addEventListener("click", async () => {
        const tracklist = domOutput.playlistSongs.children;
        const uri = tracklist[0].childNodes[0].defaultValue;

        try {
          await apiCtrl.playFunction(token, uri);
        } catch (error) {
          uiCtrl.displayError("Playback error" + error);
        };
      })
    };

    musicPopulate();
    genrePopulate();
    genreListener();
    playlistListener();
    trackPlayListener();
    tracklistListener();
  };
  userOps();
})(apiController, uiController);
