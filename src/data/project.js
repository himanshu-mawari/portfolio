export const projects = [
  {
    name: "DevTinder",
    image: "/images/devtinder-screenshot.png",
    tagline:
      "Developer networking platform with real-time connections and messaging.",
    bullets: [
      "Built secure authentication with JWT, httpOnly cookies, and protected routes.",
      "Implemented real-time connection requests and one-to-one messaging using Socket.IO.",
      "Built cursor-based chat history with infinite scrolling and per-user read tracking.",
      "Added optimistic UI updates with automatic rollback when requests fail.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    liveUrl: "https://devtinder-himanshu.vercel.app",
    githubUrl: "https://github.com/himanshu-mawari/devtinder-frontend",
    demoEmail: "demo@devtinder.com",
    demoPassword: "Demo1234",
  },

  {
    name: "Forever",
    image: "/images/forever-screenshot.png",
    tagline:
      "Full-stack e-commerce platform with customer storefront and admin panel.",
    bullets: [
      "Built a full-stack e-commerce platform with product browsing, cart, wishlist, and order management.",
      "Implemented JWT authentication with httpOnly cookies and role-based access control for customers and admins.",
      "Built an admin panel with product and order management, pagination, filtering, and URL-synced filter state.",
      "Implemented Cloudinary image management and MongoDB aggregation-based sales and order metrics.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    liveUrl: "https://forever-himanshu-five.vercel.app",
    githubUrl: "https://github.com/himanshu-mawari/ecommerce-frontend",
  },
];
