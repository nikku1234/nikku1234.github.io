import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import certifications from "../data/certifications";

export default function Certifications() {
  return (
    <div>
      <Container>
        <SpaceBetween direction="vertical" size="xl">
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <Box variant="h1" tagOverride="h1">Certifications</Box>
            <Box variant="awsui-context-info-header" color="text-body-secondary">
              Professional certifications and course completions.
            </Box>
          </div>

          <SpaceBetween direction="vertical" size="l">
            {certifications.map((cert, index) => (
              <Container key={index} header={<Header variant="h2">{cert.provider}</Header>}>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  {cert.courses.map((course, i) => (
                    <li key={i} style={{ marginBottom: "8px" }}>
                      <Box variant="p">{course}</Box>
                    </li>
                  ))}
                </ul>
              </Container>
            ))}
          </SpaceBetween>
        </SpaceBetween>
      </Container>
    </div>
  );
}
