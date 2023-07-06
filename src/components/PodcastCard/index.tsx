import { Box, Avatar, Heading, Card, CardBody, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type PodcastCardProps = {
  id: string;
  title: string;
  avatar: string;
  author: string;
  description: string;
};

export default function PodcastCard({
  id,
  title,
  avatar,
  author,
  description,
}: PodcastCardProps) {
  const navigate = useNavigate();
  return (
    <Box maxWidth={250} marginY={12}>
      <Card maxHeight={150}>
        <CardBody
          sx={{ cursor: "pointer", position: "relative", top: -20 }}
          onClick={() =>
            navigate(`podcast/${id}`, {
              state: { avatar, title, author, description },
            })
          }
        >
          <Stack spacing={3} textAlign={"center"}>
            <Avatar
              src={avatar}
              size={"2xl"}
              alignSelf={"center"}
              border={"1px solid #cacaca"}
            />
            <Heading
              as={"h4"}
              size={"md"}
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
            >
              {title}
            </Heading>
            <Heading
              as={"span"}
              size={"sm"}
              color={"grey"}
              fontWeight={"medium"}
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
            >
              Author: {author}
            </Heading>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
