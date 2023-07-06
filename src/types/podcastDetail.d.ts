export interface PodcastDetail {
  resultCount: number;
  results:     Result[];
}

export interface Result {
  wrapperType:             WrapperType;
  kind:                    Kind;
  collectionId:            number;
  trackId:                 number;
  artistName?:             string;
  collectionName:          Name;
  trackName:               string;
  collectionCensoredName?: Name;
  trackCensoredName?:      Name;
  collectionViewUrl:       string;
  feedUrl:                 string;
  trackViewUrl:            string;
  artworkUrl30?:           string;
  artworkUrl60:            string;
  artworkUrl100?:          string;
  collectionPrice?:        number;
  trackPrice?:             number;
  collectionHdPrice?:      number;
  releaseDate:             Date;
  collectionExplicitness?: string;
  trackExplicitness?:      string;
  trackCount?:             number;
  trackTimeMillis:         number;
  country:                 Country;
  currency?:               string;
  primaryGenreName?:       PrimaryGenreNameEnum;
  artworkUrl600:           string;
  genreIds?:               string[];
  genres:                  Array<GenreClass | string>;
  episodeUrl?:             string;
  previewUrl?:             string;
  artistIds?:              any[];
  episodeGuid?:            string;
  description?:            string;
  closedCaptioning?:       ClosedCaptioning;
  shortDescription?:       string;
  artworkUrl160?:          string;
  episodeFileExtension?:   EpisodeFileExtension;
  episodeContentType?:     EpisodeContentType;
}

export enum ClosedCaptioning {
  None = "none",
}

export enum Name {
  The60SongsThatExplainThe90S = "60 Songs That Explain the '90s",
}

export enum Country {
  Usa = "USA",
}

export enum EpisodeContentType {
  Audio = "audio",
}

export enum EpisodeFileExtension {
  Mp3 = "mp3",
}

export interface GenreClass {
  name: PrimaryGenreNameEnum;
  id:   string;
}

export enum PrimaryGenreNameEnum {
  Music = "Music",
}

export enum Kind {
  Podcast = "podcast",
  PodcastEpisode = "podcast-episode",
}

export enum WrapperType {
  PodcastEpisode = "podcastEpisode",
  Track = "track",
}
