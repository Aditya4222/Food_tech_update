import { Home, Airplay, Users, ShoppingBag } from "react-feather";

export const MENUITEMS = [
  {
    menutitle: "General",
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "Dashboard",
        path: `${process.env.PUBLIC_URL}/dashboard/default`,
        icon: Home,
        type: "link",
        active: true,
      },
      {
        title: "Brand Level Data",
        icon: Airplay,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/widgets/general`,
            title: "Go To Brand Admin",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Ingredients Categories",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "List Ingredients",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Semi-Finished Categories",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Semi-Ingredients",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Food Menu Categories",
            type: "link",
          },
        ],
      },
      {
        title: "HRM",
        icon: Users,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/widgets/general`,
            title: "Change Profile",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Manage Users",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Company Account Setting",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Change Password",
            type: "link",
          },
        ],
      },
      {
        title: "Stocks",
        icon: ShoppingBag,
        type: "link",
        active: false,
        // children: [
        //   {
        //     path: `${process.env.PUBLIC_URL}/widgets/general`,
        //     title: "Change My Profile",
        //     type: "link",
        //   },
        //   {
        //     path: `${process.env.PUBLIC_URL}/widgets/chart`,
        //     title: "Manage Users",
        //     type: "link",
        //   },
        //   {
        //     path: `${process.env.PUBLIC_URL}/widgets/chart`,
        //     title: "Company Account Setting",
        //     type: "link",
        //   },
        //   {
        //     path: `${process.env.PUBLIC_URL}/widgets/chart`,
        //     title: "Change Profile",
        //     type: "link",
        //   },
        //   {
        //     path: `${process.env.PUBLIC_URL}/widgets/chart`,
        //     title: "Change Password",
        //     type: "link",
        //   },
        //   {
        //     path: `${process.env.PUBLIC_URL}/widgets/chart`,
        //     title: "Food Menu Categories",
        //     type: "link",
        //   },
        // ],
      },
      {
        title: "POS",
        path: `${process.env.PUBLIC_URL}/pos`,
        icon: Home,
        type: "link",
        active: true,
      },
    ],
  },
];
