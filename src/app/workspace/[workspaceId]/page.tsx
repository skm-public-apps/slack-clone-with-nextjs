"use client";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

export default function WorkspaceIdPage() {
  const workspaceId = useWorkspaceId();
  const { data, isLoading } = useGetWorkspace({ id: workspaceId });
  console.log(JSON.stringify(data));
  return <div>WorkspaceIdPage {workspaceId}</div>;
}
