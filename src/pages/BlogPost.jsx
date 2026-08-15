import { useParams, useNavigate } from "react-router-dom";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import Badge from "@cloudscape-design/components/badge";
import Link from "@cloudscape-design/components/link";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import blogPosts from "../data/blogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Container>
        <SpaceBetween direction="vertical" size="m" alignItems="center">
          <Box variant="h1" tagOverride="h1">Post Not Found</Box>
          <Box variant="p">The blog post you're looking for doesn't exist.</Box>
          <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
        </SpaceBetween>
      </Container>
    );
  }

  const renderMarkdown = (content) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return <Box key={i} variant="h2" tagOverride="h2">{line.slice(3)}</Box>;
      }
      if (line.startsWith("### ")) {
        return <Box key={i} variant="h3" tagOverride="h3">{line.slice(4)}</Box>;
      }
      if (line.startsWith("- ")) {
        return <li key={i}>{line.slice(2)}</li>;
      }
      if (line.match(/^\d+\./)) {
        return <li key={i}>{line.replace(/^\d+\.\s*/, "")}</li>;
      }
      if (line.startsWith("> ")) {
        return (
          <Box key={i} variant="blockquote" color="text-body-secondary" fontStyle="italic">
            {line.slice(2)}
          </Box>
        );
      }
      if (line.trim() === "") {
        return <div key={i} style={{ height: "8px" }} />;
      }
      return <Box key={i} variant="p">{line}</Box>;
    });
  };

  return (
    <div>
      <Container>
        <SpaceBetween direction="vertical" size="xl">
          <div>
            <Button
              iconName="arrow-left"
              variant="link"
              onClick={() => navigate("/blog")}
            >
              Back to Blog
            </Button>
          </div>

          <div>
            <Box variant="h1" tagOverride="h1">{post.title}</Box>
            <SpaceBetween direction="horizontal" size="s" alignItems="center">
              <Box variant="awsui-context-info-header" color="text-body-secondary" fontSize="body-s">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Box>
              <SpaceBetween direction="horizontal" size="xs" wrapItems>
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </SpaceBetween>
            </SpaceBetween>
          </div>

          <div style={{ lineHeight: "1.8" }}>
            {renderMarkdown(post.content)}
          </div>

          <Container header={<Header variant="h3">Comments</Header>}>
            <Box variant="p" color="text-body-secondary">
              Comments powered by Disqus. Visit the{" "}
              <Link href="https://nikku1234.github.io" external>original site</Link>{" "}
              to see comments.
            </Box>
          </Container>
        </SpaceBetween>
      </Container>
    </div>
  );
}
