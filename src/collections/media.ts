import { User } from "../payload-types";
import { PRODUCT_CATEGORIES } from "../config/index";
import { CollectionConfig } from "payload/types";
import { Access } from "payload/types";

const isAdminOrHasAccessToImages =
  (): Access =>
  async ({ req }) => {
    const user = req.user as User | undefined;

    if (!user) return false;
    if (user.role === "admin") return true;
    return {
      user: {
        equals: req.user.id,
      },
    };
  };

export const Media: CollectionConfig = {
  slug: "media",
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        return { ...data, user: req.user.id };
      },
    ],
  },
  access: {
    read: async ({ req }) => {
      const referer = req.headers.referer;
      if (!req.user || !referer?.includes("sell")) {
        return true;
      }
      return await isAdminOrHasAccessToImages()({ req });
    },
    delete: isAdminOrHasAccessToImages(),
    update: isAdminOrHasAccessToImages(),
  },
  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        height: 300,
        position: "center",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "center",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "center",
      },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
};
