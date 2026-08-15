import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppLayout from "@cloudscape-design/components/app-layout";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Header from "@cloudscape-design/components/header";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import "@cloudscape-design/global-styles/index.css";

const navItems = [
  { type: "link", text: "Home", href: "/" },
  { type: "link", text: "About", href: "/about" },
  { type: "link", text: "Experience", href: "/experience" },
  { type: "link", text: "Blog", href: "/blog" },
  { type: "link", text: "Resume", href: "/resume" },
  {
    type: "section",
    text: "Resources",
    items: [
      { type: "link", text: "Coding", href: "/coding" },
      { type: "link", text: "Learning", href: "/learning" },
      { type: "link", text: "Apps", href: "/apps" },
    ],
  },
  { type: "link", text: "Publications", href: "/publications" },
  { type: "link", text: "Certifications", href: "/certifications" },
];

const topNavProps = {
  identity: {
    href: "/",
    title: "Nikhil Ramesh",
  },
  utilities: [
    {
      type: "link",
      text: "GitHub",
      href: "https://github.com/nikku1234",
      external: true,
    },
    {
      type: "link",
      text: "LinkedIn",
      href: "https://linkedin.com/in/nikhil-ramesh",
      external: true,
    },
    {
      type: "link",
      text: "Email",
      href: "mailto:nikhilramesh96@gmail.com",
    },
  ],
};

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [navigationOpen, setNavigationOpen] = useState(true);

  return (
    <AppLayout
      navigation={
        <SideNavigation
          activeHref={location.pathname}
          onFollow={(event) => {
            if (!event.external) {
              event.preventDefault();
              navigate(event.href);
            }
          }}
          items={navItems}
        />
      }
      navigationOpen={navigationOpen}
      onNavigationChange={() => setNavigationOpen(!navigationOpen)}
      toolsHide={true}
      header={
        <TopNavigation
          {...topNavProps}
          onUtilitiesChange={() => {}}
        />
      }
      content={children}
      contentHeader={null}
    />
  );
}
