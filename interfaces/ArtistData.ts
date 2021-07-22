export interface Song {
    name: string;
    duration: number;
    lyrics?: string;
    lyricsBy?: string;
    composedBy?: string;
    producedBy?: string;
}

export interface Album {
    name: string;
    numberOfSongs: number;
    avgMarketPrice?: number;
    created: Date;
    songs: Array<Song>;
}

export interface ArtistData {
    name: string;
    startedAt: Date;
    dissasembled?: Date;
    discography: Array<Album>
}

export default ArtistData;