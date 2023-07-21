import StateOfFrontendCopy from "./blogpostsCopy/stateOfFrontendCopy";

export const blogCopy = {
  title: "Blogs",
  para1: "A selection of articles on coding, engineering, and personal experience.",
  blogs: [
    {
      title: "State of Frontend Development in 2023 ",
      date: "16th June 2023",
      desc: "Welcome to the world of frontend web development in 2023, where innovation and creativity intersect to create cutting-edge user experiences.",
      jsx: () => (
        <StateOfFrontendCopy/>
      ),
      imgSrc: "/images/uiuxops.png",
      link: "/blogs/blog/state-of-frontend-in-2023",
    },
  ],
};
