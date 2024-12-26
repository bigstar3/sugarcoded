export default {
    name: "aboutpage", // Unique identifier
    title: "About Page", // Display name in Sanity Studio
    type: "document", // Content type
    fields: [
      {
        name: "heroTitle",
        title: "Hero Title",
        type: "string", // Field type
      },
      {
        name: "heroDescription",
        title: "Hero Description",
        type: "text", // Field type
      },
      {
        name: "heroImage",
        title: "Hero Image",
        type: "image", // Field type
        options: {
          hotspot: true, // Enables image cropping
        },
      },
      {
        name: "content",
        title: "Page Content",
        type: "array", // Repeating fields
        of: [{ type: "block" }], // Rich text blocks
      },
    ],
  };
  