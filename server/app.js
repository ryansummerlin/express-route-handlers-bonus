// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

app.use(express.json());

app.get('/artists', (req, res) => {
  const artists = getAllArtists();
  res.status(200).send(artists);
});

app.post('/artists', (req, res) => {
  const newArtist = req.body;
  res.status(201).send(addArtist(newArtist));
});

app.get('/artists/latest', (req, res) => {
  const latestArtist = getLatestArtist();
  res.status(200).send(latestArtist);
});

app.get('/artists/latest/albums', (req, res) => {
  const newArtistAlbums = getAlbumsForLatestArtist();
  res.status(200).send(newArtistAlbums);
});

app.get('/artists/:artistId/albums', (req, res) => {
  const artistId = req.params.artistId;
  res.send(getAlbumsByArtistId(artistId));
});

app.get('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;
  const artist = getArtistByArtistId(artistId);
  res.status(200);
  res.json(artist);
});

app.put('/artists/:artistId', (req, res) => {
  const updatedArtist = req.body;
  const artistId = req.params.artistId;
  res.send(editArtistByArtistId(artistId, updatedArtist));
});

app.patch('/artists/:artistId', (req, res) => {
  const updatedArtist = req.body;
  const artistId = req.params.artistId;
  res.send(editArtistByArtistId(artistId, updatedArtist));
});

app.delete('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;
  deleteArtistByArtistId(artistId);
  res.json({ message: "Successfully deleted"});
});





app.get('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  res.send(getAlbumByAlbumId(albumId));
});

app.post('/artists/:artistId/albums', (req, res) => {
  const newAlbum = req.body;
  const artistId = req.params.artistId;
  res.status(201).send(addAlbumByArtistId(artistId, newAlbum));
});

app.put('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  const updatedAlbum = req.body;
  res.send(editAlbumByAlbumId(albumId, updatedAlbum));
});

app.patch('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  const updatedAlbum = req.body;
  res.send(editAlbumByAlbumId(albumId, updatedAlbum));
});

app.delete('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  deleteAlbumByAlbumId(albumId);
  res.json({ message: "Successfully deleted"});
});

app.get('/albums', (req, res) => {
  const firstLetter = req.query.startsWith;
  res.send(getFilteredAlbums(firstLetter));
});



app.get('/artists/:artistId/songs', (req, res) => {
  const artistId = req.params.artistId;
  res.status(200).send(getSongsByArtistId(artistId));
});

app.get('/albums/:albumId/songs', (req, res) => {
  const albumId = req.params.albumId;
  res.send(getSongsByAlbumId(albumId));
});

app.get('/songs/:songId', (req, res) => {
  const songId = req.params.songId;
  res.send(getSongBySongId(songId));
});

app.post('/albums/:albumId/songs', (req, res) => {
  const albumId = req.params.albumId;
  const newSong = req.body;
  res.status(201).send(addSongByAlbumId(albumId, newSong));
});

app.put('/songs/:songId', (req, res) => {
  const songId = req.params.songId;
  const updatedSong = req.body;
  res.send(editSongBySongId(songId, updatedSong));
});

app.patch('/songs/:songId', (req, res) => {
  const songId = req.params.songId;
  const updatedSong = req.body;
  res.send(editSongBySongId(songId, updatedSong));
});

app.delete('/songs/:songId', (req, res) => {
  const songId = req.params.songId;
  deleteSongBySongId(songId);
  res.status(200);
  res.json({ message: "Successfully deleted"});
})


// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
