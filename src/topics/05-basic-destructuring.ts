interface AudioPlayer {
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration:36,
    song: "Seru Giran",
    details:{
        author: "Seru Giran",
        year: 1978
    }
}

const song = "La grasa";

const { song:anotherSong, details } = audioPlayer;
const { author } = details;

// console.log(`Song:`, anotherSong )
// console.log(`Song:`, song )
// console.log(`Author:`, author )

const [,,trunks = 'Not found']: string[] = ['Goku','Vegeta','Trunks']

console.log('Personaje 3:', trunks)

export {};