var playlist = {test: 'hi'}

function updatePlaylist(obj, artname, songname){
  obj[artname] = songname
  return obj
}

function removeFromPlaylist(obj, artname){
  delete obj[artname]
  return obj
}
