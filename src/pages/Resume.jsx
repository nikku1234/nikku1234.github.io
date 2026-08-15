import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import Link from "@cloudscape-design/components/link";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";

export default function Resume() {
  return (
    <div>
      <Container>
        <SpaceBetween direction="vertical" size="xl">
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <Box variant="h1" tagOverride="h1">Resume</Box>
          </div>

          <Container>
            <SpaceBetween direction="vertical" size="m" alignItems="center">
              <Box variant="p">
                Download my resume to learn more about my experience, education, and skills.
              </Box>
              <SpaceBetween direction="horizontal" size="m">
                <Button
                  iconName="download"
                  href="https://raw.githubusercontent.com/nikku1234/nikku1234.github.io/master/resume/mydoc.pdf"
                  target="_blank"
                  variant="primary"
                >
                  Download Resume (PDF)
                </Button>
                <Button
                  iconName="external"
                  href="https://linkedin.com/in/nikhil-ramesh"
                  target="_blank"
                  variant="normal"
                >
                  LinkedIn Profile
                </Button>
              </SpaceBetween>
            </SpaceBetween>
          </Container>

          <Container header={<Header variant="h2">Quick Summary</Header>}>
            <SpaceBetween direction="vertical" size="m">
              <div>
                <Box variant="h3" tagOverride="h3">Amazon Robotics</Box>
                <Box variant="awsui-context-info-header" color="text-body-secondary" fontSize="body-s">
                  SDE II - Performance Platform | 2022 - Present
                </Box>
              </div>
              <div>
                <Box variant="h3" tagOverride="h3">University at Buffalo</Box>
                <Box variant="awsui-context-info-header" color="text-body-secondary" fontSize="body-s">
                  M.S. Computer Science | 2021 - 2022
                </Box>
              </div>
              <div>
                <Box variant="h3" tagOverride="h3">AI Innovation Lab (A2IL)</Box>
                <Box variant="awsui-context-info-header" color="text-body-secondary" fontSize="body-s">
                  Research Assistant | 2021 - 2022
                </Box>
              </div>
            </SpaceBetween>
          </Container>
        </SpaceBetween>
      </Container>
    </div>
  );
}
