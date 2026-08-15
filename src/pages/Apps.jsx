import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import Link from "@cloudscape-design/components/link";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Grid from "@cloudscape-design/components/grid";

const apps = [
  {
    title: "Predict Number",
    description: "Browser-based handwritten digit recognition using TensorFlow.js and a pre-trained MNIST model. Draw a digit on the canvas and see real-time predictions.",
    tech: ["TensorFlow.js", "HTML5 Canvas", "JavaScript"],
    link: "https://nikku1234.github.io/predict_number/tfjs.html",
  },
  {
    title: "Markdown Live Editor",
    description: "Real-time markdown editor with live preview. Write markdown on the left, see rendered output on the right instantly.",
    tech: ["JavaScript", "marked.js", "highlight.js"],
    link: "https://nikku1234.github.io/markdown-editor/",
  },
  {
    title: "Covid-19 World Map",
    description: "Interactive world map visualizing the global spread of Covid-19 using real-time data with country-wise statistics and trend charts.",
    tech: ["D3.js", "REST API", "Responsive Design"],
    link: "https://covid19-map.netlify.app",
  },
];

export default function Apps() {
  return (
    <div>
      <Container>
        <SpaceBetween direction="vertical" size="xl">
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <Box variant="h1" tagOverride="h1">Apps</Box>
            <Box variant="awsui-context-info-header" color="text-body-secondary">
              Web applications and interactive projects.
            </Box>
          </div>

          <Container
            header={
              <Header
                variant="h2"
                description="7-day coding activity from WakaTime"
              >
                Coding Activity
              </Header>
            }
          >
            <Box variant="p" color="text-body-secondary">
              WakaTime activity visualization - visit my{" "}
              <Link href="https://wakatime.com/@nikku1234" external>
                WakaTime profile
              </Link>{" "}
              for detailed statistics.
            </Box>
          </Container>

          <Container header={<Header variant="h2">Projects</Header>}>
            <SpaceBetween direction="vertical" size="l">
              {apps.map((app) => (
                <Container key={app.title}>
                  <SpaceBetween direction="vertical" size="s">
                    <Box variant="h3" tagOverride="h3">
                      <Link href={app.link} external fontSize="heading-m">
                        {app.title}
                      </Link>
                    </Box>
                    <Box variant="p">{app.description}</Box>
                    <SpaceBetween direction="horizontal" size="xs">
                      {app.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: "2px 8px",
                            borderRadius: "4px",
                            background: "#e9eef5",
                            fontSize: "12px",
                            color: "#545b64",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </SpaceBetween>
                  </SpaceBetween>
                </Container>
              ))}
            </SpaceBetween>
          </Container>
        </SpaceBetween>
      </Container>
    </div>
  );
}
