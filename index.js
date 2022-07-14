//-----------------------------------//
//-----Node Environment Setup--------//
//-----------------------------------//

// require dotenv to load environment variables
require('dotenv').config();

// assign secret variables to process.env
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const userID = process.env.USER_ID;

// require express to create a server
// const express = require('express');
// const app = express();

// require cors to allow cross origin resource sharing
require('cors');

// create a new instance of JSDOM for node server to render DOM objects
const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;
const document = new JSDOM(`index.html`).window.document;

// create a new instance of Buffer to convert base64 string to binary
const { Buffer } = require('buffer');

// create a new instance of the axios client for posting data to the API
const axios = require('axios');
const tokenFetch = axios.create({
  headers: {  
    'Accept': 'application/json, text/plain, */*', 
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'axios/0.27.2',
    'Authorization': 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64')
  },
  responseType: 'json',
  maxContentLength: 2000,
  maxBodyLength: 2000,
  transformRequest: [function (data) {
    return data;
  }],
  params: {
    grant_type: 'client_credentials'
  },
  data: {
    'grant_type': 'client_credentials'
  }
});
// create a new instance of axios for get requests to the Spotify API
const fetch = axios.create({});

//-----------------------------------//
//-----API Controller Module---------//
//-----------------------------------//
const apiController = (function () {
  //get access token
  async function getToken() {
    // console.log(tokenFetch)
    try {
      await tokenFetch.post('https://accounts.spotify.com/api/token').then( function (response) {
        console.log('fetching token...');
        if (response.status === 200) {
          token = response.data.access_token;
          // console.log(token)
          return token;
        }
      }).catch(function (error) {
        console.log(error);
      })
    } catch (error) {
      console.log(error);
    }
};
  //-----------------------------------//
  //--------API Display Module---------//
  //-----------------------------------//

  //fetch genres from spotify for later sorting
  async function getGenres(token) {
    console.log('fetching genres...');
    try {
      const response = await fetch.get(
        `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ).then( function (response) {
        // console.log(response);
        data =  response;
        return data.genres;
      }).catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //fetch user playlist information from api
  async function getMyPlaylists(token) {
    console.log('fetching playlists...');
    try {
      const limit = 21;

      const response = await fetch.get(
        `https://api.spotify.com/v1/users/${userID}/playlists?limit=${limit}&offset=0`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ).then( function (response) {
        // console.log(response);
        data =  response;
        return data;
      }).catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //fetch user playlist information from api
  async function getPlaylistByID(playlistID, token) {
    console.log('fetching playlist by ID...');
    console.log(token)
    try {
      const response = await fetch.get(
        `https://api.spotify.com/v1/playlists/${playlistID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ).then( function (response) {
        // console.log(response);
        data =  response;
        return data;
      }).catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //function used to fetch playlist track list
  async function getMyPlaylistsTrackList(playlistID, token) {
    console.log('fetching playlist track list...');
    try {
      const response = await fetch.get(
        `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ).then( function (response) {
        // console.log(response);
        data =  response;
        return data;
      }).catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //function used to fetch individual track info from playlists
  async function getTracksInfo(trackID, token) {
    console.log('fetching track info...');
    try {
      const response = await fetch.get(
        `https://api.spotify.com/v1/tracks/${trackID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ).then( function (response) {
        // console.log(response);
        data =  response;
        return data;
      }).catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //-----------------------------------//
  //--------API Function Module--------//
  //-----------------------------------//

  //fetch play/pause
  async function playFunction(token, uri) {
    try {
      const response = await fetch.put(`https://api.spotify.com/v1/me/player/play`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: `{"context_uri":"spotify:track:${uri}","offset":{"position":5},"position_ms":0}`,
      }).then( function (response) {
        // console.log(response);
        data =  response;
        console.log("Playing", data);
        return data;
      }).catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //-----------------------------------//
  //-------------Returns---------------//
  //-----------------------------------//

  return {
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
    getTracksInfo(trackID, token) {
      return getTracksInfo(trackID, token);
    },
    playFunction(token, uri) {
      return playFunction(token, uri);
    },
  };
})();

//-----------------------------------//
//-------UI Selector Module----------//
//-----------------------------------//

const uiController = (function () {
  //store html selectors in an object for outputField() method
  const domElements = {
    hToken: "#hidden-token",
    hlogin: "#login-div",
    btnLogin: "#login-btn",
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
  };

  return {
    //create a method to callback selectors
    outputField() {
      return {
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
      };
    },
    //general ui info population methods
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
      const html = `<button class="playlist-btns" value=${id}><img src=${url} alt="${text}"/><div class="text">${text}</div></button>`;
      document
        .querySelector(domElements.otherPlaylists)
        .insertAdjacentHTML("beforeend", html);
    },

    populateTrackList(uri, number, name, artist, length, id) {
      const html = `<div class="track-items"><input class="uri" type="hidden" value=${uri}>${number}. ${name} by ${artist}</input><button class="track-id playlist-items" value=${id}>PLAY</button><div class="track-length">${Math.floor(
        length / 1000 / 60
      )}:${Math.floor((length / 1000) % 60).toFixed(0)}</div></div>`;
      document
        .querySelector(domElements.playlistContents)
        .insertAdjacentHTML("beforeend", html);
    },

    populateSongInfo(name, artist, album) {
      const html = `<div class="song-info">Now Playing:<br>${name} by ${artist}<br>from the Album:<br>${album}</div>`;
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

    storeToken(value) {
      console.log(`document: ${domElements.hToken}`);
      document.querySelector(domElements.hToken).value = value;
    },

    getStoredToken() {
      return {
        token: document.querySelector(domElements.hToken).value,
      };
    },
  };
})();

//-----------------------------------//
//-------App Control Module----------//
//-----------------------------------//

const appController = (function (apiCtrl, uiCtrl) {
  //get object reference for DOM outputs
  const domOutput = uiCtrl.outputField();
  // console.log(domOutput);

  const asyncOps = async () => {
    console.log("starting async ops");
    //fetch token
    try { 
      const token = await apiCtrl.getToken()
    } catch (error) {
      console.log(error);
    };
    // console.log(token);
    //store token in hidden html element
    uiCtrl.storeToken(token);

    //----Populate HTML Information------//

    //---onLoad----//
    const genrePopulate = async () => {
      //retrieve token
      let token = uiCtrl.getStoredToken().token;
      //fetch genres
      try {
        const genreObj = await apiCtrl.getGenres(token);
        // console.log(genreObj);
        //populate drop-down menu with genres
        genreObj.forEach((element) => uiCtrl.assignGenre(element, element));
      } catch (error) {
        console.log(error);
      };
    };

    const musicPopulate = async () => {
      //retrieve token
      let token = uiCtrl.getStoredToken().token;

      try {
        //fetch playlist info for each playlist
        const data = await apiCtrl.getMyPlaylists(token);
        //populate title
        const title = data.items[3].name;
        const id = data.items[3].id;
        // console.log(data);
        uiCtrl.assignTitle(id, title);
        //place image on center div
        uiCtrl.assignPlaylistArt(data.items[3].images[0].url);
        //populate playlist selection library
        for (i = 0; i < data.items.length; i++) {
          // console.log(data.items[i])
          uiCtrl.populatePlaylists(
            data.items[i].id,
            data.items[i].images[0].url,
            data.items[i].name
          );
        };
      } catch (error) {
          console.log(error);
      };

      try {
        //fetch tracklist info for each track
        const newData = await apiCtrl.getMyPlaylistsTrackList(
          data.items[3].id,
          token
        );
        // console.log(newData);
        for (i = 0; i < newData.items.length; i++) {
          //place html
          uiCtrl.populateTrackList(
            newData.items[i].track.uri,
            i + 1,
            newData.items[i].track.name,
            newData.items[i].track.artists[0].name,
            newData.items[i].track.duration_ms,
            newData.items[i].track.id
          );
        }
      } catch (error) {
        console.log(error);
      };

      try {
        //fetch current song image
        const newerData = await apiCtrl.getTracksInfo(
          newData.items[0].track.id,
          token
        );
        // console.log(newerData)
        uiCtrl.populateSongInfo(
          newerData.name,
          newerData.artists[0].name,
          newerData.album.name
        );
      } catch (error) {
        console.log(error);
      };

      try {
        const newestData = await apiCtrl.getTracksInfo(
          newData.items[0].track.id,
          token
        );
        // console.log(newestData)
        //place song images
        uiCtrl.populateSongImage(newestData.album.images[0].url);
      } catch (error) {
        console.log(error);
      }
    };

    //-----------------------------------//
    //-------App Event Listeners---------//
    //-----------------------------------//

    const genreListener = () => {
      //retrieve token
      let token = uiCtrl.getStoredToken().token;
      const genreSelect = domOutput.genreSelect;
      genreSelect.addEventListener("change", async () => {
        uiCtrl.resetPlaylists();
        const genreId = genreSelect.options[genreSelect.selectedIndex].value;
        try {
          const playlist = await apiCtrl.getMyPlaylists(token);
          for (i = 0; i < playlist.items.length; i++) {
            // console.log(i);
            const description = playlist.items[i].description;
            // console.log(description.split(" "));
            if (description.split(" ").includes(genreId)) {
              // console.log(`${i} is a match`);
              // console.log(`${description} ${i} contains ${genreId}!`);
              //populate title
              const title = playlist.items[i].name;
              // console.log(title);
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
            console.log(error);
          };

        try {
          //assign current tracklist
          const newData = await apiCtrl.getMyPlaylistsTrackList(
            playlist.items[i].id,
            token
          );
          // console.log(newData);
          for (j = 0; j < newData.items.length; j++) {
            //place current tracklist
            uiCtrl.populateTrackList(
              newData.items[j].track.uri,
              j + 1,
              newData.items[j].track.name,
              newData.items[j].track.artists[0].name,
              newData.items[j].track.duration_ms,
              newData.items[i].track.id
            );
            //fetch current song image
            const newerData = await apiCtrl.getTracksInfo(
              newData.items[j].track.id,
              token
            );
            // console.log(newerData)
            uiCtrl.populateSongInfo(
              newerData.name,
              newerData.artists[0].name,
              newerData.album.name
            );
            uiCtrl.populateSongImage(newerData.album.images[0].url);
          }
        } catch (error) {
          console.log(error);
        };
      });
    };

    const playlistListener = () => {
      //retrieve token
      let token = uiCtrl.getStoredToken().token;
      const playlistContainer = domOutput.playlistLibrary;
      // console.log(playlistContainer);
      playlistContainer.addEventListener("click", async (e) => {
        uiCtrl.resetTracks();
        const btnID = e.target.value; // <----- there is a bug here, if user clicks image it will not work
        // console.log(btnID, "clicked");
        try {
          const currentPlaylist = await apiCtrl.getPlaylistByID(btnID, token);
          // console.log(currentPlaylist);
          uiCtrl.assignPlaylistArt(currentPlaylist.images[0].url);
          uiCtrl.assignTitle(currentPlaylist.id, currentPlaylist.name);
          const trackList = await apiCtrl.getMyPlaylistsTrackList(btnID, token);
          // console.log(trackList);
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
            const trackInfo = await apiCtrl.getTracksInfo(
              trackList.items[i].track.id,
              token
            );
            // console.log(trackInfo);
            uiCtrl.populateSongInfo(
              trackInfo.name,
              trackInfo.artists[0].name,
              trackInfo.album.name
            );
            uiCtrl.populateSongImage(trackInfo.album.images[0].url);
          }
        } catch (error) {
          console.log(error);
        };
    });

    const tracklistListener = () => {
      //retrieve token
      let token = uiCtrl.getStoredToken().token;
      const songDiv = domOutput.playlistSongs;
      songDiv.addEventListener("click", async (e) => {
        uiCtrl.resetTrackDetail();
        // const trackDiv = document.getElementsByClassName("track-items");
        // const uri = document.querySelector("uri");
        const trackID = e.target.value;
        // console.log(trackID)

        try {
          const trackInfo = await apiCtrl.getTracksInfo(trackID, token);
          uiCtrl.populateSongInfo(
            trackInfo.name,
            trackInfo.artists[0].name,
            trackInfo.album.name
          );
          uiCtrl.populateSongImage(trackInfo.album.images[0].url);
          console.log(trackInfo.uri);
          const uri = trackInfo;
        } catch (error) {
          console.log(error);
        };

        try {
          const trackPlay = await apiCtrl.playFunction(token, uri);
        } catch (error) {
          console.log(error);
        };
      });
    };

    const trackPlayListener = () => {
      //retrieve token
      let token = uiCtrl.getStoredToken().token;
      const songPlay = domOutput.play;
      const songSkip = domOutput.skipForward;
      const songBack = domOutput.skipBack;
      songPlay.addEventListener("click", async () => {
        const tracklist = domOutput.playlistSongs.children;
        const uri = tracklist[0].childNodes[0].defaultValue;
        console.log(uri);

        try {
          await apiCtrl.playFunction(token, uri);
        } catch (error) {
          console.log(error);
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

  asyncOps();
  }
})(apiController, uiController);