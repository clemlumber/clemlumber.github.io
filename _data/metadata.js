// Use ES Module export
export default {
  title: "Clem Lumber & Distributing Co",
  name: "Clem Lumber & Distributing Co", // Added site name explicitly
  // Add the base URL for the site
  url: "https://clemlumber.com", // Updated site URL
  language: "en", // Add language
  description: "Wholesale distributor of building materials, flooring, doors, and specialty products serving retailers in Ohio, Pennsylvania, and West Virginia.", // Refined description
  phone: "1-800-362-9831", // Added phone number
  fax: "1-800-995-2536",   // Added fax number
  email: "info@clemlumber.com", // Added email explicitly
  // Add other global variables from _config.yml as needed
  // twitter_username: "username",
  // github_username: "username",
  minimal_mistakes_skin: "aqua", // If needed for ported theme styles
  search: true, // If needed for ported theme features
  author: {
    name: "Clem Lumber & Distributing Co", // Use company name or specific author
    email: "info@clemlumber.com", // Keep existing email
    // url: "https://example.com/about-me/", // Optional: Add author URL if available
    // Keep existing links and bio if desired, they are custom
    // avatar: "/assets/images/bio-photo.jpg", // Check if path is correct - REMOVED unnecessary avatar
    // bio: "My awesome biography constrained to a sentence or two goes here.", // Update bio - REMOVED unnecessary bio
    // links: [ // REMOVED unnecessary social links
    //   { label: "Website", icon: "fas fa-fw fa-link", url: "https://" },
    //   { label: "Twitter", icon: "fab fa-fw fa-twitter-square", url: "https://twitter.com/" },
    //   { label: "GitHub", icon: "fab fa-fw fa-github", url: "https://github.com/" },
    //   { label: "Instagram", icon: "fab fa-fw fa-instagram", url: "https://instagram.com/" }
    // ]
  },
  footer: {
    // links: [
    //   { label: "Twitter", icon: "fab fa-fw fa-twitter-square", url: "https://twitter.com/" }
    // ]
  },
  head_scripts: [
    "https://www.google.com/recaptcha/api.js?render=6LexG7YZAAAAAFh-J3uSH5R1XCwrjn-mmDD6rZQr",
    "/assets/js/recaptcha.js" // Ensure this path is correct after potential asset move
  ]
}; 