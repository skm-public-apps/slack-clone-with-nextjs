"use client";
import CreateWorkspaceModal from "@/features/workspaces/components/create-workspace-modal";
import { useEffect, useState } from "react";

export default function Modals() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
}
