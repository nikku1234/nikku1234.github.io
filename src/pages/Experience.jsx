import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import Badge from "@cloudscape-design/components/badge";
import SpaceBetween from "@cloudscape-design/components/space-between";
import experience from "../data/experience";

export default function Experience() {
  return (
    <div>
      <Container>
        <SpaceBetween direction="vertical" size="xl">
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <Box variant="h1" tagOverride="h1">Experience</Box>
          </div>

          <div style={{ position: "relative", paddingLeft: "40px" }}>
            <div
              style={{
                position: "absolute",
                left: "15px",
                top: "0",
                bottom: "0",
                width: "2px",
                background: "linear-gradient(to bottom, #0073bb, #545b64)",
              }}
            />
            {experience.map((item, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  marginBottom: index < experience.length - 1 ? "32px" : "0",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-31px",
                    top: "6px",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "#0073bb",
                    border: "3px solid #fff",
                    boxShadow: "0 0 0 2px #0073bb",
                  }}
                />
                <Container>
                  <SpaceBetween direction="vertical" size="s">
                    <div>
                      <Box variant="h3" tagOverride="h3" color="text-heading-default">
                        {item.company}
                      </Box>
                      <Box variant="awsui-context-info-header" color="text-body-secondary" fontSize="heading-s">
                        {item.role}
                      </Box>
                      <Box variant="awsui-context-info-header" color="text-body-secondary" fontSize="body-s">
                        {item.period}
                      </Box>
                    </div>
                    <Box variant="p">{item.description}</Box>
                    <SpaceBetween direction="horizontal" size="xs" wrapItems>
                      {item.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </SpaceBetween>
                  </SpaceBetween>
                </Container>
              </div>
            ))}
          </div>
        </SpaceBetween>
      </Container>
    </div>
  );
}
