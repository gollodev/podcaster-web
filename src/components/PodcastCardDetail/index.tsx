import {
  Card,
  CardBody,
  Stack,
  Avatar,
  Heading,
  Box,
  Divider,
} from "@chakra-ui/react";

type PodcastCardDetailProps = {
  avatar: string;
  author: string;
  description: string;
};

export default function PodcastCardDetail({
  avatar,
  author,
  description,
}: PodcastCardDetailProps) {
  return (
    <Card maxWidth={250}>
      <CardBody>
        <Stack spacing={6}>
          <Avatar
            src={avatar}
            borderRadius={1}
            size={"3xl"}
            alignSelf={"center"}
            border={"1px solid #cacaca"}
          />
          <Divider />
          <Box>
            <Heading
              as={"h4"}
              size={"md"}
              fontWeight={"bold"}
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
            >
              {author}
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
              By {author}
            </Heading>
          </Box>
          <Divider />
          <Box>
            <Heading as={"span"} fontWeight={"bold"} size={"sm"}>
              Description:
            </Heading>
            <Heading
              as={"p"}
              size={"sm"}
              color={"grey"}
              fontWeight={"medium"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
            >
              {description}
            </Heading>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
