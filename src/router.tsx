import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, RootLayout } from "@/presentation/layouts";
import DashboardView from "@/presentation/views/projects/dashboard-projects/dashboard.view";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/projects",
        
        element: <DashboardView />
      },
      {
        path: "/projects/create",
        async lazy() {
          const { default: CreateProject } = await import("@/presentation/views/projects/create-project/create-project.view")
          return {
            Component: CreateProject
          }
        }
      },
      {
        path: "/projects/:projectId/edit",
        async lazy() {
          const { default: EditProject } = await import("@/presentation/views/projects/edit-project/edit-project.view")
          return {
            Component: EditProject
          }
        }
      },
      {
        path: "/projects/:projectId",
        async lazy() {
          const { default: ProjectDetails } = await import("@/presentation/views/projects/project-details/project-details.view")
          return {
            Component: ProjectDetails
          }
        }
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        async lazy() {
          const { default: Login } = await import("@/presentation/views/auth/login/login.view")
          return {
            Component: Login
          }
        }
      },
      {
        path: "register",
        async lazy() {
          const { default: Register } = await import("@/presentation/views/users/register.view")
          return {
            Component: Register
          }
        }
      },
    ]
  },
])