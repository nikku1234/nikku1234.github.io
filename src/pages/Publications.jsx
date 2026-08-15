import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import Badge from "@cloudscape-design/components/badge";
import SpaceBetween from "@cloudscape-design/components/space-between";
import publications from "../data/publications";

export default function Publications() {
  return (
    <div>
      <Container>
        <SpaceBetween direction="vertical" size="xl">
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <Box variant="h1" tagOverride="h1">Publications</Box>
            <Box variant="awsui-context-info-header" color="text-body-secondary">
              Research publications in deep learning and medical imaging.
            </Box>
          </div>

          <SpaceBetween direction="vertical" size="l">
            {publications.map((pub, index) => (
              <Container key={index}>
                <SpaceBetween direction="vertical" size="s">
                  <Box variant="h3" tagOverride="h3">{pub.title}</Box>
                  <Box variant="awsui-context-info-header" color="text-body-secondary" fontSize="body-s">
                    {pub.year}
                  </Box>
                  <Box variant="p">{pub.description}</Box>
                  <SpaceBetween direction="horizontal" size="xs" wrapItems>
                    {pub.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </SpaceBetween>
                </SpaceBetween>
              </Container>
            ))}
          </SpaceBetween>

          <Container header={<Header variant="h2">Research Interests</Header>}>
            <SpaceBetween direction="horizontal" size="s" wrapItems>
              {["Deep Learning", "Medical Imaging", "Federated Learning", "Computer Vision",
                "Mammogram Analysis", "Tumor Classification"
              ].map((interest) => (
                <Badge key={interest}>{interest}</Badge>
              ))}
            </SpaceBetween>
          </Container>
        </SpaceBetween>
      </Container>
    </div>
  );
}
