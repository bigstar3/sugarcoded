import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// Import your custom schemas
import aboutpage from "./aboutpage"; // Ensure this matches the file name exactly

export default createSchema({
  name: "default",
  types: schemaTypes.concat([aboutpage]), // Use the correct variable name
});
