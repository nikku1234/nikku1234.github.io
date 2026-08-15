import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import Link from "@cloudscape-design/components/link";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Grid from "@cloudscape-design/components/grid";

export default function Coding() {
  return (
    <div>
      <Container>
        <SpaceBetween direction="vertical" size="xl">
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <Box variant="h1" tagOverride="h1">Coding</Box>
            <Box variant="awsui-context-info-header" color="text-body-secondary">
              My coding profiles and competitive programming activity.
            </Box>
          </div>

          <Grid columns={2} disableResponsive={false} gutts={{ horizontal: "m", vertical: "m" }}>
            <Container header={<Header variant="h2">HackerRank</Header>}>
              <SpaceBetween direction="vertical" size="s">
                <Box variant="p">
                  Solved problems across multiple domains including algorithms, data structures,
                  mathematics, and artificial intelligence.
                </Box>
                <Link href="https://www.hackerrank.com/nikku1234" external>
                  View Profile
                </Link>
              </SpaceBetween>
            </Container>

            <Container header={<Header variant="h2">LeetCode</Header>}>
              <SpaceBetween direction="vertical" size="s">
                <Box variant="p">
                  Practiced data structures and algorithms problems, focusing on arrays, trees,
                  graphs, and dynamic programming.
                </Box>
                <Link href="https://leetcode.com/nikku1234" external>
                  View Profile
                </Link>
              </SpaceBetween>
            </Container>

            <Container header={<Header variant="h2">LintCode</Header>}>
              <SpaceBetween direction="vertical" size="s">
                <Box variant="p">
                  Solved coding challenges covering various difficulty levels and algorithmic concepts.
                </Box>
                <Link href="https://www.lintcode.com" external>
                  View Profile
                </Link>
              </SpaceBetween>
            </Container>

            <Container header={<Header variant="h2">CodeChef</Header>}>
              <SpaceBetween direction="vertical" size="s">
                <Box variant="p">
                  Participated in competitive programming contests and solved practice problems.
                </Box>
                <Link href="https://www.codechef.com" external>
                  View Profile
                </Link>
              </SpaceBetween>
            </Container>
          </Grid>
        </SpaceBetween>
      </Container>
    </div>
  );
}
