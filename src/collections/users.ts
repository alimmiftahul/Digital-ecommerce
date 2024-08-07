import { CollectionConfig } from "payload/types";
import { Access } from "payload/types";

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user.role === "admin") return true;

  return {
    id: {
      equals: user.id,
    },
  };
};

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Verify Account </a>`;
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "name",
      defaultValue: "",
      type: "text",
    },
    {
      name: "role",
      defaultValue: "user",
      required: true,
      // admin: {
      //   condition: ({ req }) => req.user.role === "admin", // justadmin can only see this page
      //   // condition: () => false,
      // },
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
