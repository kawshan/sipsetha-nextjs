"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {NavProjects} from "@/components/nav-projects"
import {NavUser} from "@/components/nav-user"
import {TeamSwitcher} from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Sipsetha Institute",
            logo: GalleryVerticalEnd,
            plan: "Education",
        },
    ],
    navMain: [

        {
            title: "Administration",
            url: "#",
            icon: SquareTerminal,
            isActive: false,
            items: [
                {
                    title: "Employee",
                    url: "/dashboard/guardian",
                },
                {
                    title: "User",
                    url: "/dashboard/student",
                },
                {
                    title: "Privilege",
                    url: "/dashboard/studentClassRegistration",
                },

            ],
        },


        {
            title: "registration",
            url: "#",
            icon: SquareTerminal,
            isActive: false,
            items: [
                {
                    title: "Guardian",
                    url: "/dashboard/guardian",
                },
                {
                    title: "Student",
                    url: "/dashboard/student",
                },
                {
                    title: "Student Class Registration",
                    url: "/dashboard/studentClassRegistration",
                },

                {
                    title: "Payment Master",
                    url: "/dashboard/payment",
                },
            ],
        },
        {
            title: "Class",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Teacher",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },

    ],

}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams}/>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
