import StateOfBackendCopy from "./blogpostsCopy/stateOfBackendCopy";
import StateOfFrontendCopy from "./blogpostsCopy/stateOfFrontendCopy";

export const blogCopy = {
  title: "Blogs",
  para1:
    "A selection of articles on coding, engineering, and personal experience.",
  blogs: [
    {
      title: "State of Backend Web Development in 2023 ",
      date: "31 July 2023",
      desc: "In this blog, we will explore the state of backend development in 2023, highlighting the key trends, technologies, and practices that are shaping the industry.",
      jsx: () => <StateOfBackendCopy />,
      imgSrc: "/images/uiuxops.jpg",
      link: "/blogs/blog/state-of-backend-in-2023",
    },
    {
      title: "State of Frontend Development in 2023 ",
      date: "16 June 2023",
      desc: "Welcome to the world of frontend web development in 2023, where innovation and creativity intersect to create cutting-edge user experiences.",
      jsx: () => <StateOfFrontendCopy />,
      imgSrc: "/images/uiuxops.jpg",
      link: "/blogs/blog/state-of-frontend-in-2023",
    },
  ],
};
