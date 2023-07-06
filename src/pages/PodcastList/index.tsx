import { useState, useEffect, ChangeEvent } from "react";
import { Box, Grid, Input, Stack } from "@chakra-ui/react";
import { getPodcasts } from "../../services";
import PodcastCard from "../../components/PodcastCard";
import { Entry } from "../../types/podcastList";

export default function PodcastList() {
  const [podcasts, setPodcasts] = useState<Entry[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const storedListado = localStorage.getItem("podcasts");
    const storedTimestamp = localStorage.getItem("timestamp");

    if (storedListado && storedTimestamp) {
      const oneDayInMilliseconds: number = 24 * 60 * 60 * 1000;
      const lastRequestTime: Date = new Date(storedTimestamp);
      const currentTime: Date = new Date();

      if (
        currentTime.valueOf() - lastRequestTime.valueOf() <
        oneDayInMilliseconds
      ) {
        setPodcasts(JSON.parse(storedListado));
        return;
      }
    }
    fetchPodcast();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      fetchPodcast();
    } else {
      const filteredPodcasts = podcasts.filter((podcast) =>
        podcast["im:name"].label
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setPodcasts(filteredPodcasts);
    }
  }, [searchTerm]);

  const fetchPodcast = async () => {
    const newPodcastList = await getPodcasts();
    localStorage.setItem("podcasts", JSON.stringify(newPodcastList.feed.entry));
    localStorage.setItem("timestamp", new Date().toISOString());
    setPodcasts(newPodcastList.feed.entry);
  };

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  return (
    <Stack spacing={20}>
      <Box>
        <Input
          placeholder="Search Podcast"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </Box>
      <Box>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
          {podcasts.map((podcast: Entry) => (
            <PodcastCard
              key={podcast.id.attributes["im:id"]}
              id={podcast.id.attributes["im:id"]}
              title={podcast["im:name"].label}
              avatar={podcast["im:image"][2].label}
              author={podcast["im:artist"].label}
              description={podcast.summary.label}
            />
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
