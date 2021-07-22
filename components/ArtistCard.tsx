import {Album, ArtistData} from "../interfaces/ArtistData";
import "./ArtistCard.module.scss";

const ArtistCard = ({name,
    startedAt,
    dissasembled,
    discography}: ArtistData) => {
    return <div className="artist--card">
        <p>
            {`${name} started ${startedAt} ${dissasembled && `dissasembled in ${dissasembled}`}`}
        </p>
        {discography.map((album, index) => <AlbumRenderer UID={`${album.name}-${index}`} album={album}/>)}
    </div>
}

const AlbumRenderer: React.FC<{album: Album; UID: string}> = ({ album, UID, children }) => {
    return <div key={UID} className="album--container">
        {album.avgMarketPrice && <p>Average price for the album: {album.avgMarketPrice}</p>}
        {album.numberOfSongs && <p>Number of songs: {album.numberOfSongs}</p>}
        {album.songs.map(song => 
            <div className="entry--details">
                <p title="Album name">{song.name}</p>
                <p title="Duration">{song.duration}</p>
                {song.lyricsBy && <p>Lyrics by: {song.lyricsBy}</p>}
                {song.composedBy && <p>Composed by: {song.composedBy}</p>}
                {song.producedBy && <p>Produced by: {song.producedBy}</p>}
            </div>
        )}
        <style jsx>
        {`
        .album--container {
            display: grid;
        }

        `}
        </style>
    </div>;
}
    



export default ArtistCard;