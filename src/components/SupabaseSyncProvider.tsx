"use client";

import { useEffect } from "react";
import { syncFromSupabase } from "@/lib/store";

export default function SupabaseSyncProvider() {
  useEffect(() => {
    syncFromSupabase();
  }, []);

  return null;
}
