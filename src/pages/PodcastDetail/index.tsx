import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import PodcastCardDetail from "../../components/PodcastCardDetail";
import {
  SimpleGrid,
  Grid,
  Box,
  Card,
  CardBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { Result } from "../../types/podcastDetail";
import { getPodcastDetail } from "../../services";

export default function PodcastDetail() {
  const [episodes, setEpisodes] = useState<Result[]>([]);
  const params = useParams();
  const location = useLocation();
  const { state } = location;
  const { avatar, author, description } = state;
  const navigate = useNavigate();

  useEffect(() => {
    const storedListado = localStorage.getItem("episodes");
    const storedTimestamp = localStorage.getItem("timestamp-episodes");

    if (storedListado && storedTimestamp) {
      const oneDayInMilliseconds: number = 24 * 60 * 60 * 1000;
      const lastRequestTime: Date = new Date(storedTimestamp);
      const currentTime: Date = new Date();

      if (
        currentTime.valueOf() - lastRequestTime.valueOf() <
        oneDayInMilliseconds
      ) {
        setEpisodes(JSON.parse(storedListado));
        return;
      }
    }
    fetchPodcastDetail(String(params.id));
  }, [params]);

  const fetchPodcastDetail = async (podcastId: string) => {
    const newEpisodes = await getPodcastDetail(podcastId);
    localStorage.setItem("episodes", JSON.stringify(newEpisodes.results));
    localStorage.setItem("timestamp-episodes", new Date().toISOString());
    setEpisodes(newEpisodes.results);
  };

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} gap={1}>
        <Box>
          <PodcastCardDetail
            avatar={avatar}
            author={author}
            description={description}
          />
        </Box>
        <Box>
          <Card mb={6}>
            <CardBody>
              <Heading as={"span"} fontWeight={"bold"} size={"sm"}>
                Episodes: {episodes.length}
              </Heading>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <TableContainer maxWidth={"100%"}>
                <Table
                  width={"100%"}
                  variant="striped"
                  colorScheme={"gray"}
                  size={"sm"}
                >
                  <Thead>
                    <Tr>
                      <Th>Title</Th>
                      <Th>Date</Th>
                      <Th>Duration</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {episodes?.map((episode: Result) => (
                      <Tr key={episode.episodeGuid}>
                        <Td
                          onClick={() =>
                            navigate(
                              `/podcast/${params.id}/episode/${episode.episodeGuid}`,
                              {
                                state: {
                                  card: { avatar, author, description },
                                  episodeDetail: {
                                    episodeName: episode.trackName,
                                    episodeDescription: episode.description,
                                    episodeUrl: episode.episodeUrl,
                                  },
                                },
                              }
                            )
                          }
                          cursor={"pointer"}
                          textColor={"blue.400"}
                          _hover={{ textDecoration: "underline" }}
                        >
                          {episode.trackName}
                        </Td>
                        <Td>
                          {new Date(episode.releaseDate).toLocaleString(
                            "en-US",
                            {
                              month: "numeric",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </Td>
                        <Td>{`${String(
                          Math.floor(episode.trackTimeMillis / 60000 / 60)
                        ).padStart(2, "0")}:${String(
                          Math.floor((episode.trackTimeMillis / 60000) % 60)
                        ).padStart(2, "0")}`}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
