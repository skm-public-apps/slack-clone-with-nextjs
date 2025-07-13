interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}
export default function WorkspaceIdPage({
  params: { workspaceId },
}: WorkspaceIdPageProps) {
  return <div>WorkspaceIdPage {workspaceId}</div>;
}
