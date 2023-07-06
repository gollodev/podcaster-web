import { PodcastDetail } from "../types/podcastDetail";
import { PodcastList } from "../types/podcastList";

const GET_PODCAST_BASE_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

export const getPodcasts = async (): Promise<PodcastList> => await (await fetch(GET_PODCAST_BASE_URL)).json()

export const getPodcastDetail = async (podcastId: string): Promise<PodcastDetail> => await ((await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode`)).json())