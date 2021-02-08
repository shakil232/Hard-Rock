
const searchSongs = async () => {
  const searchTex = document.getElementById('search-input').value;
  const url = `https://api.lyrics.ovh/suggest/${searchTex}`
  const res = await fetch(url);
  const data = await res.json();
  displaySongs(data.data)

  //  fetch(url)
  //  .then(res => res.json())
  //  .then(data => displaySongs(data.data))
}
const displaySongs = songs => {
  const songsContainer = document.getElementById('songs-container')
  songsContainer.innerHTML = ''
  songs.forEach(song => {
    console.log(song);
    const songDiv = document.createElement('div');
    songDiv.className = `class="single-result row align-items-center my-3 p-3"`
    songDiv.innerHTML = `
      <div class="col-md-9">
      <h3 class="lyrics-name">${song.title}</h3>
      <p class="author lead">Album by <span>${song.artist.name}</span></p>
      <audio controls>
        <source src="${song.preview}"> </source>
      </audio>
      </div>
      <div class="col-md-3 text-md-right text-center">
      <button onclick="getLyrics('${song.artist.name}' , '${song.title}')" class="btn btn-success">Get Lyrics</button>
      </div>`
    songsContainer.appendChild(songDiv)
  });
}

const getLyrics = async (artist, title) => {
  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
  const res = await fetch(url);
  const data = await res.json();
  displayLyrics(data.lyrics)

  // fetch(url)
  // .then(res => res.json())
  // .then(data => displayLyrics(data.lyrics))
}
const displayLyrics = lyrics => {
  const lyricsContainer = document.getElementById('lyrics-container');
  lyricsContainer.innerText = lyrics;

}
