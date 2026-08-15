import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import Badge from "@cloudscape-design/components/badge";
import Link from "@cloudscape-design/components/link";
import Pagination from "@cloudscape-design/components/pagination";
import SpaceBetween from "@cloudscape-design/components/space-between";
import TextFilter from "@cloudscape-design/components/text-filter";
import Select from "@cloudscape-design/components/select";
import blogPosts from "../data/blogPosts";

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [filterText, setFilterText] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = [...new Set(blogPosts.flatMap((p) => p.tags))].sort();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesText =
      filterText === "" ||
      post.title.toLowerCase().includes(filterText.toLowerCase()) ||
      post.summary.toLowerCase().includes(filterText.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag.value);
    return matchesText && matchesTag;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <div>
      <Container>
        <SpaceBetween direction="vertical" size="xl">
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <Box variant="h1" tagOverride="h1">Blog</Box>
            <Box variant="awsui-context-info-header" color="text-body-secondary">
              Thoughts on software engineering, machine learning, and technology.
            </Box>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <TextFilter
                filteringText={filterText}
                onChange={({ detail }) => {
                  setFilterText(detail.filteringText);
                  setPage(1);
                }}
                placeholder="Search posts..."
              />
            </div>
            <div style={{ width: "250px" }}>
              <Select
                selectedOption={selectedTag}
                onChange={({ detail }) => {
                  setSelectedTag(detail.selectedOption);
                  setPage(1);
                }}
                options={[{ label: "All tags", value: "" }, ...allTags.map((t) => ({ label: t, value: t }))]}
                placeholder="Filter by tag"
                empty="No tags found"
              />
            </div>
          </div>

          <SpaceBetween direction="vertical" size="m">
            {paginatedPosts.map((post) => (
              <Container key={post.id}>
                <SpaceBetween direction="vertical" size="s">
                  <Link
                    fontSize="heading-m"
                    onFollow={() => navigate(`/blog/${post.id}`)}
                  >
                    {post.title}
                  </Link>
                  <Box variant="awsui-context-info-header" color="text-body-secondary" fontSize="body-s">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Box>
                  <Box variant="p">{post.summary}</Box>
                  <SpaceBetween direction="horizontal" size="xs" wrapItems>
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </SpaceBetween>
                </SpaceBetween>
              </Container>
            ))}
          </SpaceBetween>

          {totalPages > 1 && (
            <Pagination
              currentPageIndex={page}
              pagesCount={totalPages}
              onChange={({ detail }) => setPage(detail.currentPageIndex)}
            />
          )}
        </SpaceBetween>
      </Container>
    </div>
  );
}
