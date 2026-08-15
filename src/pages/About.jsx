import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import Grid from "@cloudscape-design/components/grid";
import Badge from "@cloudscape-design/components/badge";
import Link from "@cloudscape-design/components/link";
import SpaceBetween from "@cloudscape-design/components/space-between";

const skills = [
  "CI/CD", "Software Architecture", "Autonomous Robots", "Machine Learning",
  "Deep Learning", "Python", "C++", "JavaScript", "TypeScript", "AWS",
  "Docker", "TensorFlow", "PyTorch", "OpenCV", "React", "Node.js",
  "Git", "Linux", "Kubernetes", "PostgreSQL",
];

export default function About() {
  return (
    <div>
      <Container>
        <SpaceBetween direction="vertical" size="xl">
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <Box variant="h1" tagOverride="h1">About Me</Box>
            <Box variant="awsui-context-info-header" color="text-body-secondary" fontSize="heading-l">
              SDE II at Amazon Robotics | MS Computer Science, University at Buffalo
            </Box>
          </div>

          <Grid columns={2} disableResponsive={false} gutts={{ horizontal: "m", vertical: "m" }}>
            <div>
              <Container header={<Header variant="h2">Bio</Header>}>
                <Box variant="p">
                  I'm a Software Development Engineer II at Amazon Robotics, where I build
                  simulations and infrastructure for testing large-scale robotics simulations across
                  Amazon's fulfillment network. I work on the ARQA (Automated Robot Quality
                  Assurance) Automation Team and the Performance Platform Team, designing systems
                  that run large-scale simulations and the infrastructure to support them.
                </Box>
                <Box variant="p" padding={{ top: "s" }}>
                  I'm proficient in C++, Java, Kotlin, and TypeScript, with deep expertise across AWS
                  services for distributed, high-throughput simulation workloads. I joined Amazon as
                  an SDE I after completing my Master's, and was promoted to SDE II after two years.
                </Box>
                <Box variant="p" padding={{ top: "s" }}>
                  Prior to Amazon, I completed my Master of Science in Computer Science at the
                  University at Buffalo (2021-2022). During my graduate studies, I worked as a
                  Research Assistant at the AI Innovation Lab (A2IL) under Dr. David Doermann,
                  focusing on federated learning and medical image analysis. I also served as a
                  Teaching Assistant for CSE 610 Special Topics. My research interests lie at the
                  intersection of machine learning, robotics, and distributed systems.
                </Box>
              </Container>
            </div>

            <div>
              <Container header={<Header variant="h2">Contact</Header>}>
                <SpaceBetween direction="vertical" size="m">
                  <div>
                    <Box variant="awsui-context-info-header" fontSize="heading-s">Email</Box>
                    <Link href="mailto:nikhilramesh96@gmail.com">nikhilramesh96@gmail.com</Link>
                  </div>
                  <div>
                    <Box variant="awsui-context-info-header" fontSize="heading-s">GitHub</Box>
                    <Link href="https://github.com/nikku1234" external>github.com/nikku1234</Link>
                  </div>
                  <div>
                    <Box variant="awsui-context-info-header" fontSize="heading-s">LinkedIn</Box>
                    <Link href="https://linkedin.com/in/nikhil-ramesh" external>linkedin.com/in/nikhil-ramesh</Link>
                  </div>
                  <div>
                    <Box variant="awsui-context-info-header" fontSize="heading-s">Google Scholar</Box>
                    <Link href="https://scholar.google.com" external>Google Scholar Profile</Link>
                  </div>
                </SpaceBetween>
              </Container>
            </div>
          </Grid>

          <Container header={<Header variant="h2">Skills & Technologies</Header>}>
            <SpaceBetween direction="horizontal" size="s" wrapItems>
              {skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </SpaceBetween>
          </Container>

          <Container>
            <Box variant="awsui-context-info-header" color="text-body-secondary" fontSize="heading-s" fontStyle="italic" textAlign="center">
              "Engineering is not just about writing code - it's about solving problems that matter."
            </Box>
          </Container>
        </SpaceBetween>
      </Container>
    </div>
  );
}
