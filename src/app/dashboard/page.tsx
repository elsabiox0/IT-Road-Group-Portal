"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ProfileTab } from "@/components/dashboard/profile-tab";
import { DocumentsTab } from "@/components/dashboard/documents-tab";

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">My Profile</TabsTrigger>
          <TabsTrigger value="documents">My Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-4">
          <ProfileTab />
        </TabsContent>
        <TabsContent value="documents" className="space-y-4">
          <DocumentsTab />
        </TabsContent>
      </Tabs>
    </>
  );
}
