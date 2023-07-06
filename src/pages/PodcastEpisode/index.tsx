import { useLocation } from "react-router-dom";
import PodcastCardDetail from "../../components/PodcastCardDetail";
import {
  Box,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

export default function PodcastEpisode() {
  const location = useLocation();
  const { state } = location;
  const { avatar, author, description } = state.card;
  const { episodeName, episodeDescription, episodeUrl } = state.episodeDetail;

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
          <Card>
            <CardBody>
              <Stack spacing={6}>
                <Box>
                  <Heading as="h2" size="sm" fontWeight={"bold"}>
                    {episodeName}
                  </Heading>
                </Box>
                <Box>
                  <Heading
                    as={"p"}
                    size={"sm"}
                    color={"grey"}
                    fontWeight={"medium"}
                    textOverflow={"ellipsis"}
                    overflow={"hidden"}
                  >
                    {episodeDescription}
                  </Heading>
                </Box>
                <Box>
                  <audio src={episodeUrl} controls>
                    Your browser is not compatible with html audio
                  </audio>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
